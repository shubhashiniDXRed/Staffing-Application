'use client';

import Link from 'next/link';
import { BarChart3 } from 'lucide-react';

export default function AnalyticsPage() {
  const stats = [
    { title: 'Total Job Views', value: '2,847', change: '+12%', positive: true },
    { title: 'Application Rate', value: '34%', change: '+5%', positive: true },
    { title: 'Average Time to Hire', value: '18 days', change: '-2 days', positive: true },
    { title: 'Offer Acceptance Rate', value: '87%', change: '+8%', positive: true },
  ];

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
            href="/candidates"
            style={{
              padding: '10px 12px',
              borderRadius: 'var(--r)',
              color: 'var(--t2)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Candidates
          </Link>
          <Link
            href="/analytics"
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
            Analytics
          </Link>
        </nav>
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
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--t0)' }}>Analytics & Reports</h1>
          <p style={{ fontSize: '14px', color: 'var(--t2)', marginTop: '4px' }}>
            Track your hiring performance and metrics
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: '32px', flex: 1 }}>
          {/* Key Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '32px' }}>
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid var(--b0)',
                  borderRadius: 'var(--r2)',
                  padding: '20px',
                }}
              >
                <div style={{ fontSize: '12px', color: 'var(--t2)', fontWeight: 500, marginBottom: '8px' }}>
                  {stat.title}
                </div>
                <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--t0)', marginBottom: '8px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '12px', color: stat.positive ? 'var(--ok)' : 'var(--err)', fontWeight: 600 }}>
                  {stat.positive ? '↑' : '↓'} {stat.change}
                </div>
              </div>
            ))}
          </div>

          {/* Charts Placeholder */}
          <div style={{ backgroundColor: '#fff', border: '1px solid var(--b0)', borderRadius: 'var(--r2)', padding: '24px', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--t0)', marginBottom: '16px' }}>
              Hiring Pipeline
            </h3>
            <div
              style={{
                height: '300px',
                backgroundColor: 'var(--s1)',
                borderRadius: 'var(--r)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--t2)',
              }}
            >
              <BarChart3 style={{ width: '48px', height: '48px', opacity: 0.3 }} />
            </div>
          </div>

          {/* Top Jobs */}
          <div style={{ backgroundColor: '#fff', border: '1px solid var(--b0)', borderRadius: 'var(--r2)', padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--t0)', marginBottom: '16px' }}>
              Top Performing Job Postings
            </h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--b0)' }}>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '12px',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'var(--t1)',
                    }}
                  >
                    Job Title
                  </th>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '12px',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'var(--t1)',
                    }}
                  >
                    Views
                  </th>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '12px',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'var(--t1)',
                    }}
                  >
                    Applications
                  </th>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '12px',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'var(--t1)',
                    }}
                  >
                    Conversion Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { title: 'Senior React Developer', views: 847, apps: 89, rate: '10.5%' },
                  { title: 'Product Manager', views: 742, apps: 56, rate: '7.5%' },
                  { title: 'DevOps Engineer', views: 634, apps: 71, rate: '11.2%' },
                ].map((job, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--b0)' }}>
                    <td style={{ padding: '12px', fontSize: '13px', color: 'var(--t0)', fontWeight: 500 }}>
                      {job.title}
                    </td>
                    <td style={{ padding: '12px', fontSize: '13px', color: 'var(--t0)' }}>
                      {job.views.toLocaleString()}
                    </td>
                    <td style={{ padding: '12px', fontSize: '13px', color: 'var(--t0)' }}>
                      {job.apps}
                    </td>
                    <td style={{ padding: '12px', fontSize: '13px', color: 'var(--ok)', fontWeight: 600 }}>
                      {job.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
