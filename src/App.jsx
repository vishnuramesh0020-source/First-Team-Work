import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";
import PlaceholderPage from "./pages/PlaceholderPage";

import {
  Users,
  CreditCard,
  Flame,
  Calendar,
  Dumbbell,
  Apple,
  TrendingUp,
  User,
  Settings,
} from "lucide-react";
import Classes from "./pages/Classes";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-wrapper">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/trainers"
                element={
                  <PlaceholderPage
                    title="Trainers"
                    icon={Users}
                    description="View certified gym coaches, bio, and personal training slots."
                  />
                }
              />
              <Route
                path="/memberships"
                element={
                  <PlaceholderPage
                    title="Memberships"
                    icon={CreditCard}
                    description="Explore monthly, quarterly, and annual gym membership packages."
                  />
                }
              />
              <Route path="/classes" element={<Classes />} />
              <Route
                path="/schedule"
                element={
                  <PlaceholderPage
                    title="Schedule"
                    icon={Calendar}
                    description="Weekly timetable for gym trainers and class bookings."
                  />
                }
              />
              <Route
                path="/workout-plans"
                element={
                  <PlaceholderPage
                    title="Workout Plans"
                    icon={Dumbbell}
                    description="Custom workout splits, strength programs, and cardio routines."
                  />
                }
              />
              <Route
                path="/nutrition"
                element={
                  <PlaceholderPage
                    title="Nutrition"
                    icon={Apple}
                    description="Macro calculators, meal plans, and diet tracking for fitness goals."
                  />
                }
              />
              <Route
                path="/progress"
                element={
                  <PlaceholderPage
                    title="Progress"
                    icon={TrendingUp}
                    description="Track body weight, body fat %, workout logs, and strength gains."
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <PlaceholderPage
                    title="Profile"
                    icon={User}
                    description="Manage member details, active subscription, and attendance record."
                  />
                }
              />
              <Route
                path="/settings"
                element={
                  <PlaceholderPage
                    title="Settings"
                    icon={Settings}
                    description="Configure app notifications, dark mode, and account preferences."
                  />
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
