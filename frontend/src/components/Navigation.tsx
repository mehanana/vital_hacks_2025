import React from 'react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark mb-4">
      <div className="container">
        <a className="navbar-brand" href="#">
          Medical Diagnostic Tool
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'survey' ? 'active' : ''}`}
                onClick={() => onTabChange('survey')}
                style={{ background: 'none', border: 'none', color: 'inherit' }}
              >
                Survey
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'learn' ? 'active' : ''}`}
                onClick={() => onTabChange('learn')}
                style={{ background: 'none', border: 'none', color: 'inherit' }}
              >
                Learn More
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
                onClick={() => onTabChange('about')}
                style={{ background: 'none', border: 'none', color: 'inherit' }}
              >
                About
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 