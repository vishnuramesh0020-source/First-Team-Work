import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Users,
  CreditCard,
  Flame,
  Calendar,
  Dumbbell,
  Apple,
  TrendingUp,
  User,
  Settings,
  Zap
} from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Trainers', path: '/trainers', icon: Users },
  { name: 'Memberships', path: '/memberships', icon: CreditCard },
  { name: 'Classes', path: '/classes', icon: Flame },
  { name: 'Schedule', path: '/schedule', icon: Calendar },
  { name: 'Workout Plans', path: '/workout-plans', icon: Dumbbell },
  { name: 'Nutrition', path: '/nutrition', icon: Apple },
  { name: 'Progress', path: '/progress', icon: TrendingUp },
  { name: 'Profile', path: '/profile', icon: User },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">
          <Zap size={24} />
        </div>
        <span className="logo-text">PULSE GYM</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-item ${isActive ? 'active' : ''}`
              }
              end={item.path === '/'}
            >
              <Icon className="nav-icon" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
