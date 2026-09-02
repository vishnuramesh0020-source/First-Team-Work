import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  CreditCard,
  Flame,
  Calendar,
  Dumbbell,
  Apple,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Award,
  Activity
} from 'lucide-react';

export default function Home() {
  const stats = [
    { label: 'Active Members', value: '1,250+', icon: Users },
    { label: 'Weekly Classes', value: '45+', icon: Flame },
    { label: 'Pro Trainers', value: '15', icon: Award },
    { label: 'Gym Equipment', value: '100% Modern', icon: Activity }
  ];

  const quickLinks = [
    {
      title: 'Expert Trainers',
      desc: 'Meet our certified fitness coaches and trainers',
      path: '/trainers',
      icon: Users
    },
    {
      title: 'Membership Plans',
      desc: 'Flexible pricing and exclusive gym access pass',
      path: '/memberships',
      icon: CreditCard
    },
    {
      title: 'Group Classes',
      desc: 'Crossfit, Yoga, HIIT, Cardio, and Strength training',
      path: '/classes',
      icon: Flame
    },
    {
      title: 'Class Schedule',
      desc: 'View weekly schedules and book your session',
      path: '/schedule',
      icon: Calendar
    },
    {
      title: 'Workout Plans',
      desc: 'Custom fitness routines designed for your goals',
      path: '/workout-plans',
      icon: Dumbbell
    },
    {
      title: 'Nutrition & Diet',
      desc: 'Personalized meal plans and macro tracking',
      path: '/nutrition',
      icon: Apple
    }
  ];

  return (
    <div className="page-content">
      {/* Hero Card */}
      <div className="hero-card">
        <div className="hero-content">
          <span className="hero-badge">Welcome to Pulse Gym</span>
          <h1 className="hero-title">TRANSFORM YOUR BODY & MIND</h1>
          <p className="hero-subtitle">
            Push past your limits with state-of-the-art equipment, personalized workout plans, and elite certified trainers.
          </p>
          <div className="hero-buttons">
            <Link to="/classes" className="btn-primary">
              Explore Classes <ArrowRight size={18} />
            </Link>
            <Link to="/memberships" className="btn-secondary">
              View Memberships
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="stat-card">
              <div className="stat-icon-wrapper">
                <Icon size={24} />
              </div>
              <div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Feature Quick Navigation Section */}
      <h2 className="section-heading">Quick Access</h2>
      <div className="features-grid">
        {quickLinks.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.path} to={item.path} className="feature-card">
              <div className="feature-card-header">
                <div className="stat-icon-wrapper">
                  <Icon size={22} />
                </div>
                <ArrowRight size={18} style={{ color: '#9ca3af' }} />
              </div>
              <div>
                <h3 className="feature-card-title">{item.title}</h3>
                <p className="feature-card-desc">{item.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
