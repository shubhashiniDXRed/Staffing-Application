'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState<'email' | 'reset'>('email');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            mutation {
              auth_password_request(email: "${email}") {
                ok
              }
            }
          `,
        }),
      });

      const data = await response.json();

      if (data.errors) {
        setError(data.errors[0]?.message || 'Failed to send reset email');
      } else {
        setMessage('Check your email for password reset instructions');
        setStep('reset');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left side - Form */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          backgroundColor: 'var(--bg)',
        }}
      >
        <div style={{ width: '100%', maxWidth: '380px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '36px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'var(--brand)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Zap style={{ width: '20px', height: '20px', color: 'white' }} />
            </div>
            <span style={{ fontSize: '24px', fontWeight: 700 }}>Optiploy</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '26px',
              fontWeight: 700,
              color: 'var(--t0)',
              marginBottom: '6px',
            }}
          >
            Reset your password
          </h1>
          <p
            style={{
              fontSize: '14px',
              color: 'var(--t2)',
              marginBottom: '32px',
            }}
          >
            Enter your email and we&apos;ll send you instructions
          </p>

          {message && (
            <div
              style={{
                backgroundColor: 'var(--ok-l)',
                color: 'var(--ok)',
                padding: '12px 14px',
                borderRadius: 'var(--r)',
                marginBottom: '20px',
                fontSize: '13px',
                fontWeight: 600,
              }}
            >
              {message}
            </div>
          )}

          {error && (
            <div
              style={{
                backgroundColor: 'var(--err-l)',
                color: 'var(--err)',
                padding: '12px 14px',
                borderRadius: 'var(--r)',
                marginBottom: '20px',
                fontSize: '13px',
                fontWeight: 600,
              }}
            >
              {error}
            </div>
          )}

          {step === 'email' ? (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '24px' }}>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--t1)',
                    marginBottom: '6px',
                  }}
                >
                  Email address
                </label>
                <input
                  id="email"
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
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: 'none',
                  borderRadius: 'var(--r)',
                  background: 'var(--brand)',
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: 700,
                  fontFamily: 'var(--f)',
                  cursor: 'pointer',
                }}
              >
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '14px', color: 'var(--t2)', marginBottom: '24px' }}>
                Check your email for the password reset link. It expires in 24 hours.
              </p>
            </div>
          )}

          {/* Back to login */}
          <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '12px', color: 'var(--t3)' }}>
            Remember your password?{' '}
            <Link
              href="/"
              style={{
                color: 'var(--brand)',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Hero */}
      <div
        style={{
          width: '50%',
          background: 'var(--brand)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'relative', zIndex: 1, color: '#fff', maxWidth: '400px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '16px' }}>
            Regain access to your account
          </h2>
          <p style={{ fontSize: '15px', opacity: 0.8, lineHeight: 1.65 }}>
            We&apos;ll help you reset your password securely and get back to finding the right talent
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          div:has(> div:last-child) {
            flex-direction: column;
          }
          div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
