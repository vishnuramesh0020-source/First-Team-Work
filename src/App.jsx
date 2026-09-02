import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Classes from './pages/Classes';
import Home from './pages/Home';
import PlaceholderPage from './pages/PlaceholderPage';
import Schedule from './pages/Schedule';
import Trainers from './pages/Trainers';
import Workout from './pages/workout';



import {
  Apple,
  CreditCard,
  Dumbbell,
  Settings,
  TrendingUp,
  User
} from "lucide-react";
import Memberships from "./pages/Memberships";

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
                element={<Trainers />}
              />
              <Route path="/memberships" element={<Memberships />} />
              <Route
                path="/classes"
                element={
                  <Classes
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
                  <Schedule />
                }
              />
              <Route
                path="/workout-plans"
                element={<Workout />}
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
