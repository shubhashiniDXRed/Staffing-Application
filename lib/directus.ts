/**
 * Directus GraphQL Client
 * Handles authentication and API calls to Directus backend
 */

interface DirectusAuthResponse {
  access_token: string;
  refresh_token: string;
  expires: number;
}

interface DirectusError {
  message: string;
  extensions?: {
    code: string;
  };
}

interface DirectusGraphQLResponse<T> {
  data?: T;
  errors?: DirectusError[];
}

class DirectusClient {
  private baseUrl: string;
  private accessToken: string | null = null;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.loadToken();
  }

  private loadToken() {
    if (typeof window !== 'undefined') {
      this.accessToken = localStorage.getItem('directus_token');
    }
  }

  private getAuthHeader(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (this.accessToken) {
      headers['Authorization'] = `Bearer ${this.accessToken}`;
    }

    return headers;
  }

  async query<T>(query: string, variables?: Record<string, any>): Promise<DirectusGraphQLResponse<T>> {
    const response = await fetch(`${this.baseUrl}/graphql`, {
      method: 'POST',
      headers: this.getAuthHeader(),
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  async login(email: string, password: string): Promise<DirectusAuthResponse> {
    const response = await this.query<{ auth_login: DirectusAuthResponse }>(
      `
        mutation Login($email: String!, $password: String!) {
          auth_login(email: $email, password: $password) {
            access_token
            refresh_token
            expires
          }
        }
      `,
      { email, password }
    );

    if (response.errors) {
      throw new Error(response.errors[0]?.message || 'Login failed');
    }

    if (response.data?.auth_login) {
      const { access_token, refresh_token } = response.data.auth_login;
      this.setToken(access_token, refresh_token);
      return response.data.auth_login;
    }

    throw new Error('No token received');
  }

  private setToken(accessToken: string, refreshToken: string) {
    this.accessToken = accessToken;
    if (typeof window !== 'undefined') {
      localStorage.setItem('directus_token', accessToken);
      localStorage.setItem('directus_refresh_token', refreshToken);
    }
  }

  logout() {
    this.accessToken = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('directus_token');
      localStorage.removeItem('directus_refresh_token');
    }
  }

  getToken(): string | null {
    return this.accessToken;
  }

  isAuthenticated(): boolean {
    return !!this.accessToken;
  }
}

// Initialize client
const directusClient = new DirectusClient(process.env.NEXT_PUBLIC_DIRECTUS_URL || '');

export default directusClient;
