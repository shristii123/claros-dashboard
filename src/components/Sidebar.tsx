import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button - only shows on mobile */}
      <button
        className="btn btn-dark d-md-none"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: 200,
          width: 40,
          height: 40,
          padding: 0,
        }}
      >
        ☰
      </button>

      {/* Overlay - dark background behind sidebar on mobile */}
      {isOpen && (
        <div
          className="d-md-none"
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 150,
          }}
        />
      )}

      {/* Sidebar */}
      <aside
        className="sidebar"
        style={{
          transform: isOpen ? 'translateX(0)' : undefined,
        }}
      >
        <div className="sidebar-logo">
          <span className="logo-icon">⬡</span>
          <span className="logo-text">Claros</span>
        </div>
        <nav className="sidebar-nav">
          <p className="nav-label">MENU</p>
          <NavLink
            to="/" end
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            <span className="nav-icon">⊞</span>
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            <span className="nav-icon">◎</span>
            <span>Users</span>
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            <span className="nav-icon">▤</span>
            <span>Posts</span>
          </NavLink>
        </nav>
        <div className="sidebar-footer">
          <div className="d-flex align-items-center gap-2 p-2">
            <div className="avatar">S</div>
            <div>
              <p className="u-name">Shristi</p>
              <p className="u-role">Developer</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;