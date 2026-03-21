import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon">⬡</span>
        <span className="logo-text">Claros</span>
      </div>
      <nav className="sidebar-nav">
        <p className="nav-label">MENU</p>
        <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <span className="nav-icon">⊞</span>
          <span>Home</span>
        </NavLink>
        <NavLink to="/users" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <span className="nav-icon">◎</span>
          <span>Users</span>
        </NavLink>
        <NavLink to="/posts" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <span className="nav-icon">▤</span>
          <span>Posts</span>
        </NavLink>
      </nav>
      <div className="sidebar-footer">
        <div className="user-badge">
          <div className="avatar">S</div>
          <div>
            <p className="u-name">Shristi</p>
            <p className="u-role">Developer</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
