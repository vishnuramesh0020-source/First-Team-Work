import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bell, Search, User } from 'lucide-react';

const routeTitles = {
  '/': 'Home Dashboard',
  '/trainers': 'Trainers',
  '/memberships': 'Memberships',
  '/classes': 'Classes',
  '/schedule': 'Schedule',
  '/workout-plans': 'Workout Plans',
  '/nutrition': 'Nutrition',
  '/progress': 'Progress',
  '/profile': 'Profile',
  '/settings': 'Settings'
};

export default function Header() {
  const location = useLocation();
  const title = routeTitles[location.pathname] || 'Dashboard';

  return (
    <header className="top-header">
      <h1 className="header-title">{title}</h1>
      <div className="user-profile">
        <button style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer' }}>
          <Bell size={20} />
        </button>
        <div className="avatar">
          <User size={18} />
        </div>
      </div>
    </header>
  );
}
