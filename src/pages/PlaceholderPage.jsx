import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PlaceholderPage({ title, icon: Icon, description }) {
  return (
    <div className="page-content">
      <div className="placeholder-container">
        {Icon && (
          <div className="placeholder-icon">
            <Icon size={36} />
          </div>
        )}
        <h2 className="placeholder-title">{title}</h2>
        <p className="placeholder-desc">
          {description || `The ${title} section is ready. Routing is fully functional. Content will be added soon.`}
        </p>

        <Link to="/" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <ArrowLeft size={18} /> Back to Home
        </Link>

        <div className="badge-empty">
          Status: Clean Placeholder / Route Active
        </div>
      </div>
    </div>
  );
}
