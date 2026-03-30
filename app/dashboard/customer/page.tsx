'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogOut, Settings, Menu, X, BarChart3, Users, Briefcase } from 'lucide-react';

export default function CustomerDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState({ name: 'Company Name', email: 'user@company.com' });

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
              background: 'var(--brand)',
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
              href="/dashboard/customer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 12px',
                borderRadius: 'var(--r)',
                backgroundColor: 'var(--brand-l)',
                color: 'var(--brand)',
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
              href="/candidates"
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
              <Users style={{ width: '18px', height: '18px' }} />
              Candidates
            </Link>
            <Link
              href="/jobs"
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
              Jobs
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
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--t0)' }}>Dashboard</h1>
        </div>

        {/* Content */}
        <div style={{ padding: '32px', flex: 1 }}>
          {/* Welcome */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--t0)', marginBottom: '8px' }}>
              Welcome back, {user.name}!
            </h2>
            <p style={{ color: 'var(--t2)', fontSize: '14px' }}>
              Here&apos;s your hiring overview for today
            </p>
          </div>

          {/* Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
            {[
              { label: 'Active Postings', value: '8', icon: '📋' },
              { label: 'Total Applicants', value: '145', icon: '👥' },
              { label: 'Interviews Scheduled', value: '12', icon: '📅' },
              { label: 'Hires This Month', value: '3', icon: '✅' },
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

          {/* Quick Actions */}
          <div style={{ backgroundColor: '#fff', border: '1px solid var(--b0)', borderRadius: 'var(--r2)', padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--t0)', marginBottom: '16px' }}>
              Quick Actions
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
              <Link
                href="/jobs/new"
                style={{
                  display: 'inline-block',
                  padding: '12px 16px',
                  backgroundColor: 'var(--brand)',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: 'var(--r)',
                  fontWeight: 600,
                  fontSize: '13px',
                  fontFamily: 'var(--f)',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
              >
                Post New Job
              </Link>
              <Link
                href="/candidates"
                style={{
                  display: 'inline-block',
                  padding: '12px 16px',
                  backgroundColor: 'var(--s2)',
                  color: 'var(--t0)',
                  textDecoration: 'none',
                  borderRadius: 'var(--r)',
                  fontWeight: 600,
                  fontSize: '13px',
                  fontFamily: 'var(--f)',
                  textAlign: 'center',
                  border: '1px solid var(--b0)',
                  cursor: 'pointer',
                }}
              >
                Browse Candidates
              </Link>
              <Link
                href="/analytics"
                style={{
                  display: 'inline-block',
                  padding: '12px 16px',
                  backgroundColor: 'var(--s2)',
                  color: 'var(--t0)',
                  textDecoration: 'none',
                  borderRadius: 'var(--r)',
                  fontWeight: 600,
                  fontSize: '13px',
                  fontFamily: 'var(--f)',
                  textAlign: 'center',
                  border: '1px solid var(--b0)',
                  cursor: 'pointer',
                }}
              >
                View Analytics
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
