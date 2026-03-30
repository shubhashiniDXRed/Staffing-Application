'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function LoginPage() {
  const [userType, setUserType] = useState<'customer' | 'consultant'>('customer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL;
      
      if (!directusUrl) {
        setError('Configuration error: Directus URL not set. Add NEXT_PUBLIC_DIRECTUS_URL to environment variables.');
        setLoading(false);
        return;
      }

      console.log("[v0] Login attempt - Email:", email, "Role:", userType);

      const response = await fetch(`${directusUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const contentType = response.headers.get('content-type');
      console.log("[v0] Response status:", response.status, "Content-Type:", contentType);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Invalid email or password' }));
        const errorMessage = errorData.errors?.[0]?.message || errorData.message || 'Login failed. Please check your credentials.';
        setError(errorMessage);
        console.log("[v0] Login error response:", errorData);
        setLoading(false);
        return;
      }

      const data = await response.json();
      console.log("[v0] Login successful");

      if (data.data?.access_token) {
        localStorage.setItem('directus_token', data.data.access_token);
        if (data.data.refresh_token) {
          localStorage.setItem('directus_refresh_token', data.data.refresh_token);
        }
        localStorage.setItem('user_role', userType);
        window.location.href = userType === 'customer' ? '/dashboard/customer' : '/dashboard/consultant';
      } else {
        setError('Login failed: No access token received');
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      console.log("[v0] Login exception:", errorMsg);
      setError('Connection error. Please check your Directus URL.');
    } finally {
      setLoading(false);
    }
  };

  const customerFeatures = [
    { num: 1, title: 'AI-Powered Matching', desc: 'Smart candidate-to-role matching' },
    { num: 2, title: 'Performance Insights', desc: 'Predict team success and retention' },
    { num: 3, title: 'Rapid Deployment', desc: 'Get started in minutes, not months' },
  ];

  const consultantFeatures = [
    { num: 1, title: 'Perfect Matches', desc: 'Find roles aligned with your skills' },
    { num: 2, title: 'Competitive Pay', desc: 'Access high-paying opportunities' },
    { num: 3, title: 'Career Growth', desc: 'Build your professional reputation' },
  ];

  const features = userType === 'customer' ? customerFeatures : consultantFeatures;

  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--bg)' }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', overflowY: 'auto', backgroundColor: 'var(--bg)' }}>
        <div style={{ width: '100%', maxWidth: '380px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '36px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap style={{ width: '20px', height: '20px', color: 'white' }} />
            </div>
            <span style={{ fontSize: '24px', fontWeight: 700, color: 'var(--t0)' }}>Optiploy</span>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
            <button
              type="button"
              onClick={() => setUserType('customer')}
              style={{
                flex: 1,
                padding: '10px 16px',
                border: '1.5px solid',
                borderColor: userType === 'customer' ? 'var(--brand)' : 'var(--b0)',
                borderRadius: 'var(--r)',
                background: userType === 'customer' ? 'var(--brand-l)' : '#fff',
                color: userType === 'customer' ? 'var(--brand)' : 'var(--t2)',
                fontSize: '13px',
                fontWeight: 600,
                fontFamily: 'var(--f)',
                cursor: 'pointer',
              }}
            >
              Customer
            </button>
            <button
              type="button"
              onClick={() => setUserType('consultant')}
              style={{
                flex: 1,
                padding: '10px 16px',
                border: '1.5px solid',
                borderColor: userType === 'consultant' ? 'var(--brand)' : 'var(--b0)',
                borderRadius: 'var(--r)',
                background: userType === 'consultant' ? 'var(--brand-l)' : '#fff',
                color: userType === 'consultant' ? 'var(--brand)' : 'var(--t2)',
                fontSize: '13px',
                fontWeight: 600,
                fontFamily: 'var(--f)',
                cursor: 'pointer',
              }}
            >
              Consultant
            </button>
          </div>

          <h1 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--t0)', marginBottom: '6px' }}>Welcome back</h1>
          <p style={{ fontSize: '14px', color: 'var(--t2)', marginBottom: '32px' }}>
            {userType === 'customer' ? 'Sign in to manage your hiring' : 'Sign in to view available opportunities'}
          </p>

          {error && (
            <div style={{ backgroundColor: 'var(--err-l)', color: 'var(--err)', padding: '12px 14px', borderRadius: 'var(--r)', marginBottom: '20px', fontSize: '13px', fontWeight: 600 }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--t1)', marginBottom: '6px' }}>Email address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  border: '1.5px solid var(--b0)',
                  borderRadius: 'var(--r)',
                  fontSize: '14px',
                  fontFamily: 'var(--f)',
                  color: 'var(--t0)',
                  outline: 'none',
                  backgroundColor: '#fff',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--brand)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,55,255,.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--b0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--t1)' }}>Password</label>
                <Link href="/auth/forgot-password" style={{ fontSize: '13px', color: 'var(--brand)', fontWeight: 600, textDecoration: 'none' }}>
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  border: '1.5px solid var(--b0)',
                  borderRadius: 'var(--r)',
                  fontSize: '14px',
                  fontFamily: 'var(--f)',
                  color: 'var(--t0)',
                  outline: 'none',
                  backgroundColor: '#fff',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--brand)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,55,255,.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--b0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{ display: 'flex', marginBottom: '24px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '13px', color: 'var(--t2)', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  style={{ width: '15px', height: '15px', cursor: 'pointer', accentColor: 'var(--brand)' }}
                />
                Remember me
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '12px',
                border: 'none',
                borderRadius: 'var(--r)',
                background: loading ? 'var(--brand-h)' : 'var(--brand)',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 700,
                fontFamily: 'var(--f)',
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
              onMouseEnter={(e) => !loading && (e.currentTarget.style.background = 'var(--brand-h)')}
              onMouseLeave={(e) => !loading && (e.currentTarget.style.background = 'var(--brand)')}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '12px', color: 'var(--t3)' }}>
            Don&apos;t have an account? <Link href={userType === 'customer' ? '/auth/signup/customer' : '/auth/signup/consultant'} style={{ color: 'var(--brand)', fontWeight: 600, textDecoration: 'none' }}>Sign up</Link>
          </p>
        </div>
      </div>

      <div style={{ width: '50%', background: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(255,255,255,.04)', top: '-120px', right: '-100px' }} />
        <div style={{ position: 'absolute', width: '350px', height: '350px', borderRadius: '50%', background: 'rgba(255,255,255,.03)', bottom: '-80px', left: '-60px' }} />

        <div style={{ position: 'relative', zIndex: 1, color: '#fff', maxWidth: '400px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.2, marginBottom: '16px' }}>
            {userType === 'customer' ? 'Hire the perfect team' : 'Find your next opportunity'}
          </h2>
          <p style={{ fontSize: '15px', opacity: 0.8, lineHeight: 1.65, marginBottom: '28px' }}>
            {userType === 'customer'
              ? 'Optimize hiring with AI-powered candidate matching and performance insights'
              : 'Connect with top companies looking for your skills and expertise'}
          </p>

          {features.map((feat) => (
            <div key={feat.num} style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '16px', fontWeight: 'bold' }}>
                {feat.num}
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '2px' }}>{feat.title}</div>
                <div style={{ fontSize: '12px', opacity: 0.65, lineHeight: 1.4 }}>{feat.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="width: '50%'"] { display: none !important; }
        }
      `}</style>
    </div>
  );
}
