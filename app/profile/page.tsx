'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Settings, LogOut } from 'lucide-react';

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@company.com',
    phone: '+1 (555) 123-4567',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

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
          padding: '24px',
          overflowY: 'auto',
        }}
      >
        <Link
          href="/dashboard/customer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '32px',
            textDecoration: 'none',
          }}
        >
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
        </Link>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link
            href="/dashboard/customer"
            style={{
              padding: '10px 12px',
              borderRadius: 'var(--r)',
              color: 'var(--t2)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Dashboard
          </Link>
          <Link
            href="/profile"
            style={{
              padding: '10px 12px',
              borderRadius: 'var(--r)',
              backgroundColor: 'var(--brand-l)',
              color: 'var(--brand)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Settings
          </Link>
        </nav>

        <div style={{ borderTop: '1px solid var(--b0)', paddingTop: '16px', marginTop: 'auto' }}>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: 'var(--r)',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'var(--err)',
              fontSize: '13px',
              fontWeight: 500,
              fontFamily: 'var(--f)',
              cursor: 'pointer',
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
            padding: '20px 32px',
            borderBottom: '1px solid var(--b0)',
            backgroundColor: '#fff',
          }}
        >
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--t0)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Settings style={{ width: '24px', height: '24px' }} />
            Account Settings
          </h1>
        </div>

        {/* Content */}
        <div style={{ padding: '32px', flex: 1, maxWidth: '800px' }}>
          {saved && (
            <div
              style={{
                backgroundColor: 'var(--ok-l)',
                color: 'var(--ok)',
                padding: '12px 14px',
                borderRadius: 'var(--r)',
                marginBottom: '24px',
                fontSize: '13px',
                fontWeight: 600,
              }}
            >
              ✓ Settings saved successfully
            </div>
          )}

          <form onSubmit={handleSave}>
            {/* Profile Section */}
            <div style={{ backgroundColor: '#fff', border: '1px solid var(--b0)', borderRadius: 'var(--r2)', padding: '24px', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--t0)', marginBottom: '16px' }}>
                Profile Information
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--t1)', marginBottom: '6px' }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      border: '1.5px solid var(--b0)',
                      borderRadius: 'var(--r)',
                      fontSize: '14px',
                      fontFamily: 'var(--f)',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--t1)', marginBottom: '6px' }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      border: '1.5px solid var(--b0)',
                      borderRadius: 'var(--r)',
                      fontSize: '14px',
                      fontFamily: 'var(--f)',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--t1)', marginBottom: '6px' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    border: '1.5px solid var(--b0)',
                    borderRadius: 'var(--r)',
                    fontSize: '14px',
                    fontFamily: 'var(--f)',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--t1)', marginBottom: '6px' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    border: '1.5px solid var(--b0)',
                    borderRadius: 'var(--r)',
                    fontSize: '14px',
                    fontFamily: 'var(--f)',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            {/* Security Section */}
            <div style={{ backgroundColor: '#fff', border: '1px solid var(--b0)', borderRadius: 'var(--r2)', padding: '24px', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--t0)', marginBottom: '16px' }}>
                Change Password
              </h2>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--t1)', marginBottom: '6px' }}>
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  placeholder="Enter your current password"
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    border: '1.5px solid var(--b0)',
                    borderRadius: 'var(--r)',
                    fontSize: '14px',
                    fontFamily: 'var(--f)',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--t1)', marginBottom: '6px' }}>
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter a new password"
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    border: '1.5px solid var(--b0)',
                    borderRadius: 'var(--r)',
                    fontSize: '14px',
                    fontFamily: 'var(--f)',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--t1)', marginBottom: '6px' }}>
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your new password"
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    border: '1.5px solid var(--b0)',
                    borderRadius: 'var(--r)',
                    fontSize: '14px',
                    fontFamily: 'var(--f)',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            {/* Save Button */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                type="submit"
                style={{
                  padding: '12px 24px',
                  backgroundColor: 'var(--brand)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 'var(--r)',
                  fontWeight: 600,
                  fontSize: '14px',
                  fontFamily: 'var(--f)',
                  cursor: 'pointer',
                }}
              >
                Save Changes
              </button>
              <Link
                href="/dashboard/customer"
                style={{
                  padding: '12px 24px',
                  backgroundColor: 'var(--s2)',
                  color: 'var(--t0)',
                  border: '1px solid var(--b0)',
                  borderRadius: 'var(--r)',
                  fontWeight: 600,
                  fontSize: '14px',
                  fontFamily: 'var(--f)',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
