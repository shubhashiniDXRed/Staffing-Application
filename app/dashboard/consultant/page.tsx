'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogOut, Settings, BarChart3, Briefcase, Heart } from 'lucide-react';

export default function ConsultantDashboard() {
  const [user, setUser] = useState({ name: 'Consultant Name', email: 'consultant@example.com' });

  useEffect(() => {
    const token = localStorage.getItem('directus_token');
    if (!token) {
      window.location.href = '/';
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--bg)' }}>
      {/* Sidebar */}
      <div
        style={{
          width: '250px',
          backgroundColor: 'var(--s1)',
          borderRight: '1px solid var(--b0)',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
          overflowY: 'auto',
        }}
        className="sidebar"
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: 'white', fontSize: '18px', fontWeight: 700 }}>O</span>
          </div>
          <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--t0)' }}>Optiploy</span>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link
              href="/dashboard/consultant"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 12px',
                borderRadius: 'var(--r)',
                backgroundColor: 'var(--accent-l)',
                color: 'var(--accent)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                fontFamily: 'var(--f)',
              }}
            >
              <BarChart3 style={{ width: '18px', height: '18px' }} />
              Dashboard
            </Link>
            <Link
              href="/opportunities"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 12px',
                borderRadius: 'var(--r)',
                color: 'var(--t2)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                fontFamily: 'var(--f)',
              }}
            >
              <Briefcase style={{ width: '18px', height: '18px' }} />
              Opportunities
            </Link>
            <Link
              href="/favorites"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 12px',
                borderRadius: 'var(--r)',
                color: 'var(--t2)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                fontFamily: 'var(--f)',
              }}
            >
              <Heart style={{ width: '18px', height: '18px' }} />
              Saved Jobs
            </Link>
          </div>
        </nav>

        {/* User Section */}
        <div style={{ borderTop: '1px solid var(--b0)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link
            href="/profile"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: 'var(--r)',
              color: 'var(--t2)',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 500,
              fontFamily: 'var(--f)',
            }}
          >
            <Settings style={{ width: '16px', height: '16px' }} />
            Settings
          </Link>
          <button
            onClick={handleLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: 'var(--r)',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'var(--t2)',
              fontSize: '13px',
              fontWeight: 500,
              fontFamily: 'var(--f)',
              cursor: 'pointer',
              width: '100%',
              textAlign: 'left',
            }}
          >
            <LogOut style={{ width: '16px', height: '16px' }} />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 32px',
            borderBottom: '1px solid var(--b0)',
            backgroundColor: '#fff',
          }}
        >
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--t0)' }}>My Dashboard</h1>
        </div>

        {/* Content */}
        <div style={{ padding: '32px', flex: 1 }}>
          {/* Welcome */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--t0)', marginBottom: '8px' }}>
              Welcome, {user.name}!
            </h2>
            <p style={{ color: 'var(--t2)', fontSize: '14px' }}>
              Find your next opportunity with top companies
            </p>
          </div>

          {/* Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
            {[
              { label: 'Profile Completion', value: '85%', icon: '📊' },
              { label: 'Saved Jobs', value: '12', icon: '❤️' },
              { label: 'Applications', value: '7', icon: '📮' },
              { label: 'Interviews Lined Up', value: '2', icon: '✨' },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid var(--b0)',
                  borderRadius: 'var(--r2)',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <div style={{ fontSize: '32px' }}>{stat.icon}</div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--t2)', fontWeight: 500 }}>{stat.label}</div>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--t0)' }}>{stat.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Opportunities */}
          <div style={{ backgroundColor: '#fff', border: '1px solid var(--b0)', borderRadius: 'var(--r2)', padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--t0)', marginBottom: '16px' }}>
              Featured Opportunities For You
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    padding: '16px',
                    border: '1px solid var(--b0)',
                    borderRadius: 'var(--r)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--t0)', marginBottom: '4px' }}>
                      Senior Software Engineer
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--t2)' }}>TechCorp • San Francisco, CA</div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      style={{
                        padding: '8px 16px',
                        backgroundColor: 'var(--accent)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 'var(--r)',
                        fontWeight: 600,
                        fontSize: '12px',
                        fontFamily: 'var(--f)',
                        cursor: 'pointer',
                      }}
                    >
                      Apply
                    </button>
                    <button
                      style={{
                        padding: '8px 16px',
                        backgroundColor: 'transparent',
                        color: 'var(--accent)',
                        border: '1px solid var(--accent)',
                        borderRadius: 'var(--r)',
                        fontWeight: 600,
                        fontSize: '12px',
                        fontFamily: 'var(--f)',
                        cursor: 'pointer',
                      }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/opportunities"
              style={{
                display: 'inline-block',
                marginTop: '16px',
                color: 'var(--accent)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '13px',
                fontFamily: 'var(--f)',
                cursor: 'pointer',
              }}
            >
              View all opportunities →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
