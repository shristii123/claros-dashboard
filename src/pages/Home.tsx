import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const stats = [
  { label: 'Total Users', value: '10', icon: '◎', color: '#6366f1' },
  { label: 'Total Posts', value: '50', icon: '▤', color: '#10b981' },
  { label: 'API Source', value: 'JSONPlaceholder', icon: '⬡', color: '#f59e0b' },
  { label: 'Status', value: 'Live', icon: '◉', color: '#3b82f6' },
];

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="home-hero">
        <h1 className="home-title">Welcome to Claros <span className="accent-word">Dashboard</span></h1>
        <p className="home-subtitle">
          A full-featured React + Redux dashboard with live API data, filtering, and pagination.
        </p>
      </div>

      <div className="stats-grid">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <div className="stat-icon" style={{ background: s.color + '22', color: s.color }}>
              {s.icon}
            </div>
            <div>
              <p className="stat-value">{s.value}</p>
              <p className="stat-label">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="quick-links">
        <h2 className="section-title">Quick Navigation</h2>
        <div className="link-cards">
          <Link to="/users" className="link-card">
            <span className="lc-icon">◎</span>
            <div>
              <p className="lc-title">Users Data</p>
              <p className="lc-desc">View, search & paginate users from JSONPlaceholder API</p>
            </div>
            <span className="lc-arrow">→</span>
          </Link>
          <Link to="/posts" className="link-card">
            <span className="lc-icon">▤</span>
            <div>
              <p className="lc-title">Posts Data</p>
              <p className="lc-desc">Browse, filter & navigate through posts data</p>
            </div>
            <span className="lc-arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
