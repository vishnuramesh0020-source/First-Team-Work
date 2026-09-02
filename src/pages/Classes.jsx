// import "./Classes.css";

const classes = [
  {
    id: 1,
    name: "Strength Training",
    coach: "Mike Johnson",
    duration: "45 min",
    level: "Intermediate",
    time: "06:00 AM",
    description:
      "Build strength and improve your overall fitness with guided weight training.",
  },
  {
    id: 2,
    name: "Yoga",
    coach: "Sarah Wilson",
    duration: "60 min",
    level: "Beginner",
    time: "07:30 AM",
    description:
      "Improve flexibility, balance, breathing, and mental relaxation.",
  },
  {
    id: 3,
    name: "HIIT",
    coach: "Alex Brown",
    duration: "30 min",
    level: "Advanced",
    time: "06:00 PM",
    description:
      "High-intensity workouts designed to burn calories and improve endurance.",
  },
  {
    id: 4,
    name: "Cardio Blast",
    coach: "Emma Davis",
    duration: "45 min",
    level: "Intermediate",
    time: "07:00 PM",
    description:
      "Boost your stamina and cardiovascular fitness with energetic workouts.",
  },
  {
    id: 5,
    name: "Zumba",
    coach: "Jessica Lee",
    duration: "45 min",
    level: "Beginner",
    time: "05:30 PM",
    description:
      "Have fun while burning calories with energetic dance-based workouts.",
  },
  {
    id: 6,
    name: "Personal Training",
    coach: "David Miller",
    duration: "60 min",
    level: "All Levels",
    time: "08:00 AM",
    description:
      "Get personalized training and workout plans based on your fitness goals.",
  },
];

function Classes() {
  return (
    <div className="classes-page">
      <div className="classes-header">
        <h1>Our Classes</h1>
        <p>
          Choose from a variety of fitness classes designed to help you achieve
          your goals.
        </p>
      </div>

      <div className="classes-container">
        {classes.map((item) => (
          <div className="class-card" key={item.id}>
            <div className="class-card-content">
              <h2>{item.name}</h2>

              <p className="class-description">{item.description}</p>

              <div className="class-info">
                <p>
                  <strong>Coach:</strong> {item.coach}
                </p>

                <p>
                  <strong>Duration:</strong> {item.duration}
                </p>

                <p>
                  <strong>Level:</strong> {item.level}
                </p>

                <p>
                  <strong>Time:</strong> {item.time}
                </p>
              </div>

              <button className="join-button">Join Class</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Classes;
