import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Total Users", value: "10", icon: "◎", color: "#6366f1" },
  { label: "Total Posts", value: "50", icon: "▤", color: "#10b981" },
  {
    label: "API Source",
    value: "JSONPlaceholder",
    icon: "⬡",
    color: "#f59e0b",
  },
  { label: "Status", value: "Live", icon: "◉", color: "#3b82f6" },
];

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <div className="py-4 mb-4">
        <h1 className="home-title fw-bold fs-1 mb-2">
          Welcome to Claros <span className="accent-word">Dashboard</span>
        </h1>
        <p className="text-muted" style={{ maxWidth: 520 }}>
          A full-featured React + Redux dashboard with live API data, filtering,
          and pagination.
        </p>
      </div>

      {/* Stats */}
      <div className="row g-3 mb-4">
        {stats.map((s) => (
          <div className="col-6 col-md-6" key={s.label}>
            <div className="card border shadow-sm stat-card h-100">
              <div className="card-body d-flex align-items-center gap-3">
                <div
                  className="stat-icon"
                  style={{ background: s.color + "22", color: s.color }}
                >
                  {s.icon}
                </div>
                <div>
                  <p className="stat-value">{s.value}</p>
                  <p className="stat-label">{s.label}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="fs-5 fw-bold mb-2">Quick Navigation</h2>
        <div className="d-flex flex-column gap-2">
          <div className="w-50">
            {" "}
            {/* Makes card 50% width of container */}
            <Link to="/users" className="card border shadow-sm link-card p-2">
              <div className="d-flex align-items-center gap-2">
                <span className="lc-icon fs-5">◎</span>
                <div>
                  <p className="lc-title mb-0 fw-bold small">Users Data</p>
                  <p className="lc-desc mb-0 text-muted small">
                    View, search & paginate users from JSONPlaceholder API
                  </p>
                </div>
                <span className="lc-arrow ms-auto fs-6">→</span>
              </div>
            </Link>
          </div>

          <div className="w-50">
            <Link to="/posts" className="card border shadow-sm link-card p-2">
              <div className="d-flex align-items-center gap-2">
                <span className="lc-icon fs-5">▤</span>
                <div>
                  <p className="lc-title mb-0 fw-bold small">Posts Data</p>
                  <p className="lc-desc mb-0 text-muted small">
                    Browse, filter & navigate through posts data
                  </p>
                </div>
                <span className="lc-arrow ms-auto fs-6">→</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
