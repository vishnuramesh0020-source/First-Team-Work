import React, { useState, useMemo, useEffect } from 'react';
import {
  Dumbbell,
  Flame,
  Clock,
  Calendar,
  Zap,
  CheckCircle2,
  TrendingUp,
  Search,
  Filter,
  ChevronRight,
  Play,
  RotateCcw,
  Plus,
  Bookmark,
  Award,
  Activity,
  Layers,
  Sparkles,
  Info,
  X,
  Target,
  ArrowUpRight
} from 'lucide-react';

const WORKOUT_PLANS = [
  {
    id: 'ppl-hypertrophy',
    title: 'Push Pull Legs (PPL) Hypertrophy',
    category: 'Muscle Building',
    level: 'Intermediate',
    daysPerWeek: '6 Days/Week',
    duration: '60-75 min',
    calories: '450-600 kcal',
    description: 'The golden standard split for balanced hypertrophy, maximizing muscle protein synthesis frequency.',
    tags: ['Chest', 'Back', 'Legs', 'Shoulders', 'Arms'],
    rating: 4.9,
    completions: '3.2k',
    exercises: [
      { name: 'Barbell Bench Press', sets: '4 Sets', reps: '8-10 Reps', rest: '90s', target: 'Chest & Triceps' },
      { name: 'Incline Dumbbell Press', sets: '3 Sets', reps: '10-12 Reps', rest: '75s', target: 'Upper Chest' },
      { name: 'Standing Overhead Press', sets: '4 Sets', reps: '8-10 Reps', rest: '90s', target: 'Front Deltoids' },
      { name: 'Dumbbell Lateral Raises', sets: '4 Sets', reps: '12-15 Reps', rest: '60s', target: 'Side Deltoids' },
      { name: 'Rope Triceps Pushdown', sets: '3 Sets', reps: '12-15 Reps', rest: '60s', target: 'Triceps Lateral Head' }
    ]
  },
  {
    id: 'upper-lower-power',
    title: 'Upper / Lower Power & Strength',
    category: 'Strength & Power',
    level: 'Advanced',
    daysPerWeek: '4 Days/Week',
    duration: '60 min',
    calories: '500-650 kcal',
    description: 'Heavy compound periodization focusing on maximum motor unit recruitment and progressive overload.',
    tags: ['Compound', 'Deadlift', 'Squat', 'Bench Press'],
    rating: 4.8,
    completions: '2.8k',
    exercises: [
      { name: 'Barbell Back Squat', sets: '5 Sets', reps: '5 Reps', rest: '120s', target: 'Quads & Glutes' },
      { name: 'Romanian Deadlift', sets: '4 Sets', reps: '6-8 Reps', rest: '90s', target: 'Hamstrings & Posterior' },
      { name: 'Leg Press (Heavy)', sets: '3 Sets', reps: '8-10 Reps', rest: '90s', target: 'Quads' },
      { name: 'Bulgarian Split Squats', sets: '3 Sets', reps: '10 Reps/leg', rest: '60s', target: 'Unilateral Glutes' },
      { name: 'Standing Calf Raises', sets: '4 Sets', reps: '15 Reps', rest: '45s', target: 'Calves' }
    ]
  },
  {
    id: 'hiit-fat-shred',
    title: 'HIIT Cardio & Metabolic Shred',
    category: 'Fat Loss',
    level: 'All Levels',
    daysPerWeek: '3-4 Days/Week',
    duration: '35-45 min',
    calories: '600-750 kcal',
    description: 'High intensity interval training intervals designed for maximum EPOC afterburn and rapid conditioning.',
    tags: ['HIIT', 'Fat Loss', 'Core', 'Endurance'],
    rating: 4.9,
    completions: '4.1k',
    exercises: [
      { name: 'Kettlebell Swings', sets: '4 Sets', reps: '40s On / 20s Off', rest: '45s', target: 'Posterior & Heart Rate' },
      { name: 'Battle Rope Slams', sets: '4 Sets', reps: '30s On / 30s Off', rest: '45s', target: 'Shoulders & Cardio' },
      { name: 'Box Jump Burpees', sets: '3 Sets', reps: '12 Reps', rest: '60s', target: 'Explosive Full Body' },
      { name: 'Medicine Ball Slams', sets: '4 Sets', reps: '15 Reps', rest: '45s', target: 'Core & Lats' },
      { name: 'Assault Bike Sprint', sets: '5 Sets', reps: '20s Sprint / 40s Cruise', rest: '60s', target: 'Max V02 Conditioning' }
    ]
  },
  {
    id: 'fullbody-beginner',
    title: 'Full Body Functional Foundation',
    category: 'Muscle Building',
    level: 'Beginner',
    daysPerWeek: '3 Days/Week',
    duration: '45-50 min',
    calories: '350-450 kcal',
    description: 'Learn pristine foundational movement patterns with balanced total-body structural development.',
    tags: ['Beginner', 'Full Body', 'Form Mastery', 'Core'],
    rating: 5.0,
    completions: '5.6k',
    exercises: [
      { name: 'Goblet Squats', sets: '3 Sets', reps: '10-12 Reps', rest: '60s', target: 'Legs & Core Stability' },
      { name: 'Dumbbell Flat Bench Press', sets: '3 Sets', reps: '10-12 Reps', rest: '60s', target: 'Chest' },
      { name: 'Lat Pulldown (Neutral Grip)', sets: '3 Sets', reps: '10-12 Reps', rest: '60s', target: 'Upper Back & Lats' },
      { name: 'Dumbbell Seated Shoulder Press', sets: '3 Sets', reps: '10-12 Reps', rest: '60s', target: 'Shoulders' },
      { name: 'Plank Hold', sets: '3 Sets', reps: '45-60s Hold', rest: '45s', target: 'Core Anti-Extension' }
    ]
  },
  {
    id: 'shredded-abs-core',
    title: 'Core Architecture & Abs Engine',
    category: 'Fat Loss',
    level: 'Intermediate',
    daysPerWeek: '3 Days/Week',
    duration: '25-30 min',
    calories: '250-350 kcal',
    description: 'Comprehensive core sculpting targeting rectus abdominis, transversus abdominis, and serratus.',
    tags: ['Abs', 'Obliques', 'Core Stability', 'Lower Back'],
    rating: 4.7,
    completions: '2.1k',
    exercises: [
      { name: 'Hanging Leg Raises', sets: '4 Sets', reps: '12-15 Reps', rest: '45s', target: 'Lower Abdominals' },
      { name: 'Cable Woodchoppers', sets: '3 Sets', reps: '12 Reps/Side', rest: '45s', target: 'Obliques & Rotation' },
      { name: 'Ab Wheel Rollouts', sets: '3 Sets', reps: '10-12 Reps', rest: '60s', target: 'Transverse Abdominis' },
      { name: 'Decline Bench Weighted Crunches', sets: '3 Sets', reps: '15 Reps', rest: '45s', target: 'Upper Rectus' }
    ]
  },
  {
    id: 'mobility-joint-bulletproofing',
    title: 'Full Body Mobility & Joint Longevity',
    category: 'Mobility',
    level: 'All Levels',
    daysPerWeek: '2-3 Days/Week',
    duration: '30 min',
    calories: '150-200 kcal',
    description: 'Improve hip internal/external rotation, thoracic spine extension, and shoulder joint integrity.',
    tags: ['Mobility', 'Flexibility', 'Recovery', 'Posture'],
    rating: 4.9,
    completions: '1.9k',
    exercises: [
      { name: 'World’s Greatest Stretch', sets: '3 Sets', reps: '6 Reps/Side', rest: '30s', target: 'Hips & Thoracic Spine' },
      { name: '90/90 Hip Switches', sets: '3 Sets', reps: '10 Reps', rest: '30s', target: 'Hip Capsules' },
      { name: 'Wall Slides with Lift-Off', sets: '3 Sets', reps: '10 Reps', rest: '30s', target: 'Scapular Upward Rotation' },
      { name: 'Couch Stretch (Quad/Psoas)', sets: '3 Sets', reps: '45s/Side', rest: '30s', target: 'Hip Flexors' }
    ]
  }
];

const EXERCISE_LIBRARY = [
  { name: 'Barbell Deadlift', category: 'Back & Hamstrings', difficulty: 'Advanced', equipment: 'Barbell' },
  { name: 'Incline Dumbbell Press', category: 'Upper Chest', difficulty: 'Intermediate', equipment: 'Dumbbells & Bench' },
  { name: 'Barbell Back Squat', category: 'Quads & Glutes', difficulty: 'Advanced', equipment: 'Barbell & Squat Rack' },
  { name: 'Lat Pulldown', category: 'Back & Lats', difficulty: 'Beginner', equipment: 'Cable Machine' },
  { name: 'Dumbbell Lateral Raise', category: 'Shoulders', difficulty: 'Beginner', equipment: 'Dumbbells' },
  { name: 'Hanging Leg Raise', category: 'Core & Abs', difficulty: 'Intermediate', equipment: 'Pullup Bar' },
  { name: 'Romanian Deadlift', category: 'Hamstrings', difficulty: 'Intermediate', equipment: 'Barbell / Dumbbells' },
  { name: 'Overhead Tricep Extension', category: 'Triceps', difficulty: 'Beginner', equipment: 'Cable / Dumbbell' }
];

export default function Workout() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Interactive Modal & Session state
  const [activePlan, setActivePlan] = useState(null);
  const [savedPlans, setSavedPlans] = useState(['ppl-hypertrophy']);
  const [checkedSets, setCheckedSets] = useState({});
  const [activeTab, setActiveTab] = useState('plans'); // 'plans' | 'generator' | 'library'
  
  // Rest Timer state
  const [timerSeconds, setTimerSeconds] = useState(60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [initialTimer, setInitialTimer] = useState(60);

  // Custom Routine Generator state
  const [genTarget, setGenTarget] = useState('Chest');
  const [genLevel, setGenLevel] = useState('Intermediate');
  const [genEquipment, setGenEquipment] = useState('Barbell & Dumbbells');
  const [generatedRoutine, setGeneratedRoutine] = useState(null);

  // Timer interval handling
  useEffect(() => {
    let interval = null;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerSeconds]);

  const toggleBookmark = (id, e) => {
    e.stopPropagation();
    setSavedPlans((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleToggleSet = (exerciseIdx, setIdx) => {
    const key = `${exerciseIdx}-${setIdx}`;
    setCheckedSets((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const startTimer = (seconds) => {
    setInitialTimer(seconds);
    setTimerSeconds(seconds);
    setTimerRunning(true);
  };

  const resetTimer = () => {
    setTimerSeconds(initialTimer);
    setTimerRunning(false);
  };

  // Filtered workout plans
  const filteredPlans = useMemo(() => {
    return WORKOUT_PLANS.filter((plan) => {
      const matchCat = selectedCategory === 'All' || plan.category === selectedCategory;
      const matchLevel = selectedLevel === 'All' || plan.level === selectedLevel;
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        plan.title.toLowerCase().includes(query) ||
        plan.description.toLowerCase().includes(query) ||
        plan.tags.some((t) => t.toLowerCase().includes(query)) ||
        plan.exercises.some((e) => e.name.toLowerCase().includes(query));

      return matchCat && matchLevel && matchSearch;
    });
  }, [selectedCategory, selectedLevel, searchQuery]);

  const handleGenerate = (e) => {
    e.preventDefault();
    const suggestions = [
      { name: `${genTarget} Compound Movement`, sets: '4 Sets', reps: '8-10 Reps', rest: '90s', target: `${genTarget} Primary` },
      { name: `Incline ${genTarget} Builder`, sets: '3 Sets', reps: '10-12 Reps', rest: '75s', target: `${genTarget} Secondary` },
      { name: `Isolation Cable / DB Squeeze`, sets: '3 Sets', reps: '12-15 Reps', rest: '60s', target: `${genTarget} Peak Contraction` },
      { name: `Burnout Finisher`, sets: '3 Sets', reps: '15-20 Reps', rest: '45s', target: `${genTarget} Metabolic Stress` }
    ];

    setGeneratedRoutine({
      title: `${genLevel} ${genTarget} Specialization`,
      equipment: genEquipment,
      duration: '45 Minutes',
      calories: '380 kcal',
      exercises: suggestions
    });
  };

  return (
    <div
      style={{
        padding: '32px',
        maxWidth: '1300px',
        width: '100%',
        margin: '0 auto',
        boxSizing: 'border-box',
        color: '#f3f4f6',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
    >
      {/* Top Banner & Header */}
      <div style={{ marginBottom: '28px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            backgroundColor: 'rgba(255, 59, 48, 0.12)',
            color: '#ff5e54',
            border: '1px solid rgba(255, 59, 48, 0.25)',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            marginBottom: '12px'
          }}
        >
          <Sparkles size={14} /> Science-Based Training Programs
        </div>
        <h1
          style={{
            fontSize: '2.4rem',
            fontWeight: '800',
            letterSpacing: '-0.5px',
            marginBottom: '8px',
            color: '#ffffff'
          }}
        >
          WORKOUT PLANS & ROUTINES
        </h1>
        <p
          style={{
            color: '#9ca3af',
            fontSize: '1rem',
            maxWidth: '680px',
            lineHeight: 1.6
          }}
        >
          Explore periodized training regimens, interactive set trackers, rest countdowns, and automated custom routine generators.
        </p>
      </div>

      {/* Overview Stat Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          marginBottom: '32px'
        }}
      >
        {[
          { label: 'Curated Routines', value: '18+ Programs', icon: Dumbbell, color: '#ff3b30' },
          { label: 'Avg Session Burn', value: '480 kcal', icon: Flame, color: '#ff9500' },
          { label: 'Saved Favorites', value: `${savedPlans.length} Active`, icon: Bookmark, color: '#38bdf8' },
          { label: 'Weekly Volume', value: '98.5% Adherence', icon: Activity, color: '#34d399' }
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              style={{
                backgroundColor: '#181b24',
                border: '1px solid #2a2e3d',
                borderRadius: '16px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                transition: 'transform 0.2s',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: stat.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Icon size={22} />
              </div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: '500' }}>
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Mode Navigation Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '12px',
          borderBottom: '1px solid #2a2e3d',
          paddingBottom: '16px',
          marginBottom: '28px',
          overflowX: 'auto'
        }}
      >
        {[
          { id: 'plans', label: 'Workout Programs', icon: Layers },
          { id: 'generator', label: 'Quick Routine Builder', icon: Sparkles },
          { id: 'library', label: 'Exercise Index', icon: Target }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '10px',
                border: 'none',
                fontSize: '0.92rem',
                fontWeight: '700',
                cursor: 'pointer',
                background: isActive
                  ? 'linear-gradient(135deg, #ff3b30 0%, #ff9500 100%)'
                  : 'rgba(255, 255, 255, 0.04)',
                color: isActive ? '#ffffff' : '#9ca3af',
                boxShadow: isActive ? '0 4px 15px rgba(255, 59, 48, 0.35)' : 'none',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              <Icon size={17} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* TAB 1: WORKOUT PROGRAMS */}
      {activeTab === 'plans' && (
        <>
          {/* Filter & Search Bar */}
          <div
            style={{
              backgroundColor: '#181b24',
              border: '1px solid #2a2e3d',
              borderRadius: '16px',
              padding: '18px 20px',
              marginBottom: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            {/* Search Input */}
            <div style={{ position: 'relative', width: '100%' }}>
              <Search
                size={18}
                style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#6b7280',
                  pointerEvents: 'none'
                }}
              />
              <input
                type="text"
                placeholder="Search plans by muscle group (Chest, Quads, Back), exercise, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 42px',
                  backgroundColor: '#11131a',
                  border: '1px solid #2a2e3d',
                  borderRadius: '10px',
                  color: '#f3f4f6',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#9ca3af',
                    cursor: 'pointer',
                    padding: '4px'
                  }}
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              {/* Category Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['All', 'Muscle Building', 'Strength & Power', 'Fat Loss', 'Mobility'].map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '8px',
                        fontSize: '0.82rem',
                        fontWeight: '600',
                        border: isActive ? '1px solid transparent' : '1px solid #2a2e3d',
                        background: isActive
                          ? 'rgba(255, 59, 48, 0.2)'
                          : 'rgba(255, 255, 255, 0.04)',
                        color: isActive ? '#ff5e54' : '#9ca3af',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Level Selector */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: '600' }}>
                  Level:
                </span>
                {['All', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => {
                  const isActive = selectedLevel === lvl;
                  return (
                    <button
                      key={lvl}
                      onClick={() => setSelectedLevel(lvl)}
                      style={{
                        padding: '5px 12px',
                        borderRadius: '6px',
                        fontSize: '0.78rem',
                        fontWeight: '600',
                        border: 'none',
                        background: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.06)',
                        color: isActive ? '#0f1117' : '#9ca3af',
                        cursor: 'pointer',
                        transition: 'all 0.15s'
                      }}
                    >
                      {lvl}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Workout Plans Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '24px',
              marginBottom: '40px'
            }}
          >
            {filteredPlans.length > 0 ? (
              filteredPlans.map((plan) => {
                const isBookmarked = savedPlans.includes(plan.id);
                return (
                  <div
                    key={plan.id}
                    style={{
                      backgroundColor: '#181b24',
                      border: '1px solid #2a2e3d',
                      borderRadius: '18px',
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
                      transition: 'transform 0.2s, border-color 0.2s'
                    }}
                  >
                    <div>
                      {/* Top Header Tags */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '14px'
                        }}
                      >
                        <span
                          style={{
                            padding: '4px 10px',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            backgroundColor:
                              plan.level === 'Beginner'
                                ? 'rgba(52, 211, 153, 0.15)'
                                : plan.level === 'Intermediate'
                                ? 'rgba(255, 149, 0, 0.15)'
                                : 'rgba(255, 59, 48, 0.15)',
                            color:
                              plan.level === 'Beginner'
                                ? '#34d399'
                                : plan.level === 'Intermediate'
                                ? '#ff9500'
                                : '#ff5e54'
                          }}
                        >
                          {plan.level}
                        </span>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '0.78rem', color: '#9ca3af', fontWeight: '500' }}>
                            {plan.completions} active
                          </span>
                          <button
                            onClick={(e) => toggleBookmark(plan.id, e)}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: isBookmarked ? '#ff9500' : '#6b7280',
                              cursor: 'pointer',
                              padding: '4px',
                              display: 'flex',
                              alignItems: 'center'
                            }}
                          >
                            <Bookmark size={18} fill={isBookmarked ? '#ff9500' : 'none'} />
                          </button>
                        </div>
                      </div>

                      {/* Plan Title & Category */}
                      <h3
                        style={{
                          fontSize: '1.3rem',
                          fontWeight: '800',
                          marginBottom: '6px',
                          color: '#ffffff',
                          lineHeight: 1.3
                        }}
                      >
                        {plan.title}
                      </h3>
                      <p
                        style={{
                          color: '#9ca3af',
                          fontSize: '0.88rem',
                          lineHeight: 1.5,
                          marginBottom: '18px'
                        }}
                      >
                        {plan.description}
                      </p>

                      {/* Highlights Pill Info */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: '10px',
                          backgroundColor: '#11131a',
                          padding: '12px 14px',
                          borderRadius: '12px',
                          marginBottom: '18px'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#d1d5db' }}>
                          <Calendar size={15} color="#ff3b30" />
                          <span>{plan.daysPerWeek}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#d1d5db' }}>
                          <Clock size={15} color="#ff9500" />
                          <span>{plan.duration}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#d1d5db' }}>
                          <Flame size={15} color="#ef4444" />
                          <span>{plan.calories}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#d1d5db' }}>
                          <Layers size={15} color="#38bdf8" />
                          <span>{plan.exercises.length} Exercises</span>
                        </div>
                      </div>

                      {/* Exercise Peek List */}
                      <div style={{ marginBottom: '20px' }}>
                        <div style={{ fontSize: '0.78rem', color: '#6b7280', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>
                          Primary Focus Exercises:
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {plan.exercises.slice(0, 3).map((ex, i) => (
                            <div
                              key={i}
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                fontSize: '0.82rem',
                                color: '#9ca3af'
                              }}
                            >
                              <span style={{ color: '#e5e7eb', fontWeight: '500' }}>• {ex.name}</span>
                              <span style={{ color: '#6b7280' }}>{ex.sets}</span>
                            </div>
                          ))}
                          {plan.exercises.length > 3 && (
                            <div style={{ fontSize: '0.75rem', color: '#ff9500', fontWeight: '600', marginTop: '2px' }}>
                              +{plan.exercises.length - 3} more movements
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => setActivePlan(plan)}
                      style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '10px',
                        border: 'none',
                        fontWeight: '700',
                        fontSize: '0.92rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        background: 'linear-gradient(135deg, #ff3b30 0%, #ff9500 100%)',
                        color: '#ffffff',
                        boxShadow: '0 4px 12px rgba(255, 59, 48, 0.35)',
                        transition: 'opacity 0.2s'
                      }}
                    >
                      <Play size={16} fill="#ffffff" /> Open Interactive Tracker
                    </button>
                  </div>
                );
              })
            ) : (
              <div
                style={{
                  gridColumn: '1 / -1',
                  backgroundColor: '#181b24',
                  border: '1px dashed #2a2e3d',
                  borderRadius: '16px',
                  padding: '48px',
                  textAlign: 'center'
                }}
              >
                <Dumbbell size={36} color="#ff3b30" style={{ marginBottom: '12px' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>
                  No workout plans match your filter
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '16px' }}>
                  Try adjusting your search keywords or resetting your level selection.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedLevel('All');
                    setSearchQuery('');
                  }}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#fff',
                    border: '1px solid #2a2e3d',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {/* TAB 2: QUICK ROUTINE BUILDER */}
      {activeTab === 'generator' && (
        <div
          style={{
            backgroundColor: '#181b24',
            border: '1px solid #2a2e3d',
            borderRadius: '20px',
            padding: '32px',
            maxWidth: '850px',
            margin: '0 auto 40px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #ff3b30 0%, #ff9500 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px',
                color: '#fff'
              }}
            >
              <Sparkles size={24} />
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#fff', marginBottom: '6px' }}>
              Custom Routine Generator
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '0.92rem', maxWidth: '500px', margin: '0 auto' }}>
              Select your targeted muscle group and equipment to instantly build a personalized workout structure.
            </p>
          </div>

          <form onSubmit={handleGenerate} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Muscle Group */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#d1d5db', marginBottom: '8px' }}>
                Primary Muscle Focus
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Chest', 'Back & Lats', 'Quads & Glutes', 'Hamstrings', 'Shoulders', 'Arms', 'Core & Abs'].map((muscle) => (
                  <button
                    type="button"
                    key={muscle}
                    onClick={() => setGenTarget(muscle)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      border: genTarget === muscle ? '1px solid #ff3b30' : '1px solid #2a2e3d',
                      backgroundColor: genTarget === muscle ? 'rgba(255, 59, 48, 0.15)' : '#11131a',
                      color: genTarget === muscle ? '#ff5e54' : '#9ca3af',
                      cursor: 'pointer'
                    }}
                  >
                    {muscle}
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Level & Equipment Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#d1d5db', marginBottom: '8px' }}>
                  Experience Level
                </label>
                <select
                  value={genLevel}
                  onChange={(e) => setGenLevel(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    backgroundColor: '#11131a',
                    border: '1px solid #2a2e3d',
                    color: '#f3f4f6',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                >
                  <option value="Beginner">Beginner (1-2 Years)</option>
                  <option value="Intermediate">Intermediate (2-4 Years)</option>
                  <option value="Advanced">Advanced (4+ Years)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#d1d5db', marginBottom: '8px' }}>
                  Available Equipment
                </label>
                <select
                  value={genEquipment}
                  onChange={(e) => setGenEquipment(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    backgroundColor: '#11131a',
                    border: '1px solid #2a2e3d',
                    color: '#f3f4f6',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                >
                  <option value="Full Commercial Gym">Full Commercial Gym</option>
                  <option value="Barbell & Dumbbells">Barbell & Dumbbells</option>
                  <option value="Dumbbells Only">Dumbbells Only</option>
                  <option value="Bodyweight / Calisthenics">Bodyweight & Pullup Bar</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              style={{
                marginTop: '10px',
                padding: '14px',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(135deg, #ff3b30 0%, #ff9500 100%)',
                color: '#ffffff',
                fontWeight: '800',
                fontSize: '0.95rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 15px rgba(255, 59, 48, 0.4)'
              }}
            >
              <Sparkles size={18} /> Generate Custom Workout Structure
            </button>
          </form>

          {/* Generated Result Card */}
          {generatedRoutine && (
            <div
              style={{
                marginTop: '32px',
                padding: '24px',
                backgroundColor: '#11131a',
                borderRadius: '16px',
                border: '1px solid #ff3b30'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff', margin: 0 }}>
                    {generatedRoutine.title}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginTop: '4px' }}>
                    {generatedRoutine.equipment} • {generatedRoutine.duration} • {generatedRoutine.calories}
                  </div>
                </div>
                <button
                  onClick={() => {
                    setActivePlan({
                      title: generatedRoutine.title,
                      description: `Custom generated workout for ${genTarget} using ${genEquipment}.`,
                      level: genLevel,
                      duration: generatedRoutine.duration,
                      calories: generatedRoutine.calories,
                      exercises: generatedRoutine.exercises
                    });
                  }}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    backgroundColor: '#ff3b30',
                    color: '#fff',
                    border: 'none',
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Play size={14} fill="#fff" /> Start This Routine
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {generatedRoutine.exercises.map((ex, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '12px 16px',
                      backgroundColor: '#181b24',
                      borderRadius: '10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      border: '1px solid #2a2e3d'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: '700', color: '#f3f4f6', fontSize: '0.9rem' }}>
                        {idx + 1}. {ex.name}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#9ca3af' }}>{ex.target}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: '700', color: '#ff9500', fontSize: '0.85rem' }}>
                        {ex.sets} × {ex.reps}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Rest: {ex.rest}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: EXERCISE INDEX */}
      {activeTab === 'library' && (
        <div
          style={{
            backgroundColor: '#181b24',
            border: '1px solid #2a2e3d',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '40px'
          }}
        >
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>
              Movement Library & Exercise Directory
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '0.88rem' }}>
              Quick reference for target anatomy and required training equipment.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '16px'
            }}
          >
            {EXERCISE_LIBRARY.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#11131a',
                  border: '1px solid #2a2e3d',
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span
                      style={{
                        padding: '2px 8px',
                        borderRadius: '6px',
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        backgroundColor: 'rgba(255, 149, 0, 0.15)',
                        color: '#ff9500'
                      }}
                    >
                      {item.difficulty}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>{item.equipment}</span>
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>
                    {item.name}
                  </h4>
                  <div style={{ fontSize: '0.82rem', color: '#9ca3af' }}>{item.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* INTERACTIVE WORKOUT MODAL / LIVE TRACKER */}
      {activePlan && (
        <div
          onClick={() => setActivePlan(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.82)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#181b24',
              border: '1px solid #3b4254',
              borderRadius: '24px',
              maxWidth: '750px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '32px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
              position: 'relative',
              boxSizing: 'border-box'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePlan(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: '#9ca3af',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div style={{ marginBottom: '24px' }}>
              <div
                style={{
                  display: 'inline-block',
                  padding: '4px 10px',
                  backgroundColor: 'rgba(255, 59, 48, 0.15)',
                  color: '#ff5e54',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  marginBottom: '8px'
                }}
              >
                LIVE SESSION TRACKER
              </div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#fff', marginBottom: '6px' }}>
                {activePlan.title}
              </h2>
              <p style={{ color: '#9ca3af', fontSize: '0.88rem', margin: 0 }}>
                {activePlan.description}
              </p>
            </div>

            {/* Live Rest Timer Widget */}
            <div
              style={{
                backgroundColor: '#11131a',
                border: '1px solid #2a2e3d',
                borderRadius: '16px',
                padding: '16px 20px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 149, 0, 0.15)',
                    color: '#ff9500',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Clock size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#9ca3af', fontWeight: '600' }}>REST INTERVAL</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: timerRunning ? '#ff9500' : '#ffffff' }}>
                    {Math.floor(timerSeconds / 60)}:{(timerSeconds % 60).toString().padStart(2, '0')}
                  </div>
                </div>
              </div>

              {/* Timer Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {[30, 60, 90].map((sec) => (
                  <button
                    key={sec}
                    onClick={() => startTimer(sec)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: '700',
                      border: '1px solid #2a2e3d',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#d1d5db',
                      cursor: 'pointer'
                    }}
                  >
                    {sec}s
                  </button>
                ))}
                <button
                  onClick={() => setTimerRunning(!timerRunning)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    border: 'none',
                    backgroundColor: timerRunning ? '#ef4444' : '#10b981',
                    color: '#ffffff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {timerRunning ? 'Pause' : 'Start'}
                </button>
                <button
                  onClick={resetTimer}
                  title="Reset Timer"
                  style={{
                    padding: '6px 10px',
                    borderRadius: '6px',
                    border: '1px solid #2a2e3d',
                    backgroundColor: 'transparent',
                    color: '#9ca3af',
                    cursor: 'pointer'
                  }}
                >
                  <RotateCcw size={14} />
                </button>
              </div>
            </div>

            {/* Exercises List with Interactive Checkboxes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              {activePlan.exercises.map((exercise, exIdx) => (
                <div
                  key={exIdx}
                  style={{
                    backgroundColor: '#11131a',
                    border: '1px solid #2a2e3d',
                    borderRadius: '14px',
                    padding: '16px 20px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <div>
                      <div style={{ fontSize: '1rem', fontWeight: '800', color: '#ffffff' }}>
                        {exIdx + 1}. {exercise.name}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#ff9500', fontWeight: '600' }}>
                        Target: {exercise.target}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#f3f4f6' }}>
                        {exercise.sets} • {exercise.reps}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                        Rest: {exercise.rest}
                      </div>
                    </div>
                  </div>

                  {/* Interactive Set Checklist */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                    {[1, 2, 3, 4].slice(0, parseInt(exercise.sets) || 3).map((setNum) => {
                      const isDone = !!checkedSets[`${exIdx}-${setNum}`];
                      return (
                        <button
                          key={setNum}
                          onClick={() => handleToggleSet(exIdx, setNum)}
                          style={{
                            padding: '6px 12px',
                            borderRadius: '8px',
                            fontSize: '0.78rem',
                            fontWeight: '600',
                            border: isDone ? '1px solid #10b981' : '1px solid #2a2e3d',
                            backgroundColor: isDone ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                            color: isDone ? '#34d399' : '#9ca3af',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            transition: 'all 0.15s'
                          }}
                        >
                          <CheckCircle2 size={14} color={isDone ? '#34d399' : '#6b7280'} />
                          Set {setNum} {isDone ? '✓' : ''}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Complete Workout CTA */}
            <button
              onClick={() => {
                alert(`Great workout! You completed ${activePlan.title}.`);
                setActivePlan(null);
                setCheckedSets({});
              }}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#ffffff',
                fontWeight: '800',
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 15px rgba(16, 185, 129, 0.35)'
              }}
            >
              <CheckCircle2 size={20} /> Finish & Log Session
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
