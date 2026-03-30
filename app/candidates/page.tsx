'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Star } from 'lucide-react';

export default function CandidatesBrowse() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  const candidates = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior React Developer',
      skills: ['React', 'TypeScript', 'Node.js'],
      match: 95,
      location: 'San Francisco, CA',
      avatar: '👩‍💼',
    },
    {
      id: 2,
      name: 'Alex Chen',
      title: 'Full Stack Engineer',
      skills: ['Python', 'React', 'AWS'],
      match: 87,
      location: 'New York, NY',
      avatar: '👨‍💼',
    },
    {
      id: 3,
      name: 'Emma Williams',
      title: 'DevOps Specialist',
      skills: ['Kubernetes', 'Docker', 'CI/CD'],
      match: 82,
      location: 'Austin, TX',
      avatar: '👩‍💼',
    },
    {
      id: 4,
      name: 'James Murphy',
      title: 'Product Manager',
      skills: ['Strategy', 'Analytics', 'Leadership'],
      match: 78,
      location: 'Seattle, WA',
      avatar: '👨‍💼',
    },
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
              backgroundColor: 'var(--brand-l)',
              color: 'var(--brand)',
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
              color: 'var(--t2)',
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
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--t0)' }}>Browse Candidates</h1>
          <p style={{ fontSize: '14px', color: 'var(--t2)', marginTop: '4px' }}>
            Find and match with top talent
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: '32px', flex: 1 }}>
          {/* Search and Filter */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <Search
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '18px',
                  height: '18px',
                  color: 'var(--t3)',
                  pointerEvents: 'none',
                }}
              />
              <input
                type="text"
                placeholder="Search by skills, title, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 40px',
                  border: '1.5px solid var(--b0)',
                  borderRadius: 'var(--r)',
                  fontSize: '14px',
                  fontFamily: 'var(--f)',
                  outline: 'none',
                }}
              />
            </div>
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 16px',
                border: '1.5px solid var(--b0)',
                borderRadius: 'var(--r)',
                backgroundColor: '#fff',
                color: 'var(--t0)',
                fontSize: '14px',
                fontFamily: 'var(--f)',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <Filter style={{ width: '18px', height: '18px' }} />
              Filters
            </button>
          </div>

          {/* Candidates Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid var(--b0)',
                  borderRadius: 'var(--r2)',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '12px', flex: 1 }}>
                    <div style={{ fontSize: '40px' }}>{candidate.avatar}</div>
                    <div>
                      <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--t0)', marginBottom: '2px' }}>
                        {candidate.name}
                      </h3>
                      <p style={{ fontSize: '13px', color: 'var(--t2)', marginBottom: '4px' }}>
                        {candidate.title}
                      </p>
                      <p style={{ fontSize: '12px', color: 'var(--t3)' }}>
                        📍 {candidate.location}
                      </p>
                    </div>
                  </div>
                  <button
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'var(--t3)',
                    }}
                  >
                    <Star style={{ width: '20px', height: '20px' }} />
                  </button>
                </div>

                {/* Match Score */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--t1)' }}>AI Match Score</span>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent)' }}>
                      {candidate.match}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: '6px',
                      backgroundColor: 'var(--s2)',
                      borderRadius: '3px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        backgroundColor: 'var(--accent)',
                        width: `${candidate.match}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Skills */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {candidate.skills.map((skill, i) => (
                      <span
                        key={i}
                        style={{
                          display: 'inline-block',
                          padding: '4px 10px',
                          backgroundColor: 'var(--brand-l)',
                          color: 'var(--brand)',
                          borderRadius: 'var(--r)',
                          fontSize: '12px',
                          fontWeight: 500,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    style={{
                      flex: 1,
                      padding: '10px 12px',
                      backgroundColor: 'var(--brand)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 'var(--r)',
                      fontWeight: 600,
                      fontSize: '13px',
                      fontFamily: 'var(--f)',
                      cursor: 'pointer',
                    }}
                  >
                    View Profile
                  </button>
                  <button
                    style={{
                      flex: 1,
                      padding: '10px 12px',
                      backgroundColor: 'var(--s2)',
                      color: 'var(--t0)',
                      border: '1px solid var(--b0)',
                      borderRadius: 'var(--r)',
                      fontWeight: 600,
                      fontSize: '13px',
                      fontFamily: 'var(--f)',
                      cursor: 'pointer',
                    }}
                  >
                    Add to Pipeline
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
