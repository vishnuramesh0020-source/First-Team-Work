import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Dumbbell,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const scheduleData = {
  Monday: [
    {
      time: "06:00 AM - 07:00 AM",
      title: "Morning Strength",
      trainer: "Rahul Kumar",
      type: "Strength",
      seats: 8,
    },
    {
      time: "08:00 AM - 09:00 AM",
      title: "Power Yoga",
      trainer: "Priya Sharma",
      type: "Yoga",
      seats: 12,
    },
    {
      time: "06:00 PM - 07:00 PM",
      title: "HIIT Training",
      trainer: "Arjun Reddy",
      type: "HIIT",
      seats: 5,
    },
  ],

  Tuesday: [
    {
      time: "06:00 AM - 07:00 AM",
      title: "Cardio Blast",
      trainer: "Vikram Singh",
      type: "Cardio",
      seats: 10,
    },
    {
      time: "07:00 AM - 08:00 AM",
      title: "Upper Body Workout",
      trainer: "Rahul Kumar",
      type: "Strength",
      seats: 6,
    },
    {
      time: "06:00 PM - 07:00 PM",
      title: "CrossFit",
      trainer: "Arjun Reddy",
      type: "CrossFit",
      seats: 4,
    },
  ],

  Wednesday: [
    {
      time: "06:00 AM - 07:00 AM",
      title: "Leg Day",
      trainer: "Rahul Kumar",
      type: "Strength",
      seats: 7,
    },
    {
      time: "08:00 AM - 09:00 AM",
      title: "Yoga Flow",
      trainer: "Priya Sharma",
      type: "Yoga",
      seats: 14,
    },
    {
      time: "06:00 PM - 07:00 PM",
      title: "HIIT Training",
      trainer: "Arjun Reddy",
      type: "HIIT",
      seats: 3,
    },
  ],

  Thursday: [
    {
      time: "06:00 AM - 07:00 AM",
      title: "Full Body Workout",
      trainer: "Vikram Singh",
      type: "Strength",
      seats: 8,
    },
    {
      time: "07:00 AM - 08:00 AM",
      title: "Core Training",
      trainer: "Rahul Kumar",
      type: "Core",
      seats: 10,
    },
    {
      time: "06:00 PM - 07:00 PM",
      title: "Spin Class",
      trainer: "Priya Sharma",
      type: "Cardio",
      seats: 6,
    },
  ],

  Friday: [
    {
      time: "06:00 AM - 07:00 AM",
      title: "Chest & Triceps",
      trainer: "Rahul Kumar",
      type: "Strength",
      seats: 5,
    },
    {
      time: "08:00 AM - 09:00 AM",
      title: "Power Yoga",
      trainer: "Priya Sharma",
      type: "Yoga",
      seats: 12,
    },
    {
      time: "06:00 PM - 07:00 PM",
      title: "CrossFit",
      trainer: "Arjun Reddy",
      type: "CrossFit",
      seats: 4,
    },
  ],

  Saturday: [
    {
      time: "07:00 AM - 08:00 AM",
      title: "Weekend Workout",
      trainer: "Vikram Singh",
      type: "Strength",
      seats: 9,
    },
    {
      time: "09:00 AM - 10:00 AM",
      title: "Yoga & Stretching",
      trainer: "Priya Sharma",
      type: "Yoga",
      seats: 15,
    },
  ],

  Sunday: [
    {
      time: "08:00 AM - 09:00 AM",
      title: "Recovery & Mobility",
      trainer: "Priya Sharma",
      type: "Recovery",
      seats: 12,
    },
  ],
};

const days = Object.keys(scheduleData);

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState("Monday");

  const currentIndex = days.indexOf(selectedDay);

  const previousDay = () => {
    const index =
      currentIndex === 0 ? days.length - 1 : currentIndex - 1;

    setSelectedDay(days[index]);
  };

  const nextDay = () => {
    const index =
      currentIndex === days.length - 1 ? 0 : currentIndex + 1;

    setSelectedDay(days[index]);
  };

  const handleBooking = (title) => {
    alert(`${title} session selected successfully!`);
  };

  const totalSeats = scheduleData[selectedDay].reduce(
    (total, session) => total + session.seats,
    0
  );

  return (
    <div style={styles.page}>

      {/* Header */}
      <div style={styles.header}>
        <div>
          <div style={styles.breadcrumb}>
            <Calendar size={16} />
            <span>Gym Management</span>
            <span>/</span>
            <span>Schedule</span>
          </div>

          <h1 style={styles.title}>Gym Schedule</h1>

          <p style={styles.subtitle}>
            Manage your weekly workouts and training sessions.
          </p>
        </div>

        {/* Day Controls */}
        <div style={styles.dayControls}>
          <button
            onClick={previousDay}
            style={styles.arrowButton}
          >
            <ChevronLeft size={20} />
          </button>

          <div style={styles.currentDay}>
            {selectedDay}
          </div>

          <button
            onClick={nextDay}
            style={styles.arrowButton}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Days */}
      <div style={styles.dayContainer}>
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            style={{
              ...styles.dayButton,
              ...(selectedDay === day
                ? styles.activeDay
                : styles.inactiveDay),
            }}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Summary */}
      <div style={styles.summaryGrid}>

        <div style={styles.summaryCard}>
          <div>
            <p style={styles.summaryLabel}>Today's Sessions</p>
            <h2 style={styles.summaryValue}>
              {scheduleData[selectedDay].length}
            </h2>
          </div>

          <div style={styles.iconBox}>
            <Calendar size={22} />
          </div>
        </div>

        <div style={styles.summaryCard}>
          <div>
            <p style={styles.summaryLabel}>Available Seats</p>
            <h2 style={styles.summaryValue}>
              {totalSeats}
            </h2>
          </div>

          <div style={styles.iconBox}>
            <Users size={22} />
          </div>
        </div>

        <div style={styles.summaryCard}>
          <div>
            <p style={styles.summaryLabel}>Training Day</p>
            <h2 style={styles.dayValue}>
              {selectedDay}
            </h2>
          </div>

          <div style={styles.iconBox}>
            <Dumbbell size={22} />
          </div>
        </div>

      </div>

      {/* Schedule Cards */}
      <div style={styles.cardGrid}>

        {scheduleData[selectedDay].map((session, index) => (
          <div
            key={`${selectedDay}-${session.title}-${index}`}
            style={styles.card}
          >

            {/* Time */}
            <div style={styles.time}>
              <Clock size={17} />
              <span>{session.time}</span>
            </div>

            {/* Icon */}
            <div style={styles.workoutIcon}>
              <Dumbbell size={24} color="#ffffff" />
            </div>

            {/* Title */}
            <h2 style={styles.cardTitle}>
              {session.title}
            </h2>

            {/* Type */}
            <span style={styles.typeBadge}>
              {session.type}
            </span>

            {/* Trainer */}
            <div style={styles.trainer}>
              <div style={styles.userIcon}>
                <User size={19} />
              </div>

              <div>
                <p style={styles.trainerLabel}>
                  Trainer
                </p>

                <p style={styles.trainerName}>
                  {session.trainer}
                </p>
              </div>
            </div>

            {/* Bottom */}
            <div style={styles.cardBottom}>

              <div style={styles.seatRow}>
                <div style={styles.seatLabel}>
                  <Users size={16} />
                  <span>Seats Available</span>
                </div>

                <span
                  style={{
                    ...styles.seatCount,
                    color:
                      session.seats <= 5
                        ? "#ef4444"
                        : "#16a34a",
                  }}
                >
                  {session.seats} left
                </span>
              </div>

              <button
                onClick={() => handleBooking(session.title)}
                style={styles.bookButton}
              >
                Book Session
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f7fa",
    padding: "32px",
    boxSizing: "border-box",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "28px",
    gap: "20px",
  },

  breadcrumb: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#64748b",
    fontSize: "14px",
    marginBottom: "8px",
  },

  title: {
    margin: 0,
    fontSize: "30px",
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    margin: "6px 0 0",
    color: "#64748b",
    fontSize: "14px",
  },

  dayControls: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  arrowButton: {
    width: "42px",
    height: "42px",
    borderRadius: "9px",
    border: "1px solid #e2e8f0",
    background: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#475569",
  },

  currentDay: {
    minWidth: "120px",
    padding: "12px 18px",
    textAlign: "center",
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "9px",
    fontWeight: "600",
    color: "#334155",
    fontSize: "14px",
  },

  dayContainer: {
    display: "flex",
    gap: "8px",
    padding: "8px",
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    marginBottom: "24px",
    overflowX: "auto",
  },

  dayButton: {
    border: "none",
    borderRadius: "8px",
    padding: "12px 20px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "0.2s",
  },

  activeDay: {
    background: "#111827",
    color: "#ffffff",
  },

  inactiveDay: {
    background: "transparent",
    color: "#64748b",
  },

  summaryGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
    marginBottom: "24px",
  },

  summaryCard: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 6px rgba(15, 23, 42, 0.04)",
  },

  summaryLabel: {
    margin: 0,
    color: "#64748b",
    fontSize: "13px",
  },

  summaryValue: {
    margin: "5px 0 0",
    fontSize: "26px",
    fontWeight: "700",
    color: "#111827",
  },

  dayValue: {
    margin: "5px 0 0",
    fontSize: "20px",
    fontWeight: "700",
    color: "#111827",
  },

  iconBox: {
    width: "45px",
    height: "45px",
    borderRadius: "10px",
    background: "#f1f5f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#334155",
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "14px",
    padding: "22px",
    boxShadow: "0 3px 10px rgba(15, 23, 42, 0.05)",
    transition: "0.2s",
  },

  time: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#64748b",
    fontSize: "13px",
    fontWeight: "500",
    marginBottom: "18px",
  },

  workoutIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "11px",
    background: "#111827",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
  },

  cardTitle: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "700",
    color: "#111827",
  },

  typeBadge: {
    display: "inline-block",
    marginTop: "9px",
    padding: "5px 10px",
    borderRadius: "20px",
    background: "#f1f5f9",
    color: "#475569",
    fontSize: "12px",
    fontWeight: "600",
  },

  trainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "22px",
  },

  userIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#f1f5f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#475569",
  },

  trainerLabel: {
    margin: 0,
    fontSize: "11px",
    color: "#94a3b8",
  },

  trainerName: {
    margin: "2px 0 0",
    fontSize: "14px",
    fontWeight: "600",
    color: "#334155",
  },

  cardBottom: {
    borderTop: "1px solid #f1f5f9",
    marginTop: "20px",
    paddingTop: "16px",
  },

  seatRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "14px",
  },

  seatLabel: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    color: "#64748b",
    fontSize: "13px",
  },

  seatCount: {
    fontSize: "13px",
    fontWeight: "700",
  },

  bookButton: {
    width: "100%",
    border: "none",
    borderRadius: "8px",
    padding: "12px",
    background: "#111827",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

