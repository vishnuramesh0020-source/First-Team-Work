import React, { useState, useMemo } from 'react';
import {
  Users,
  Search,
  Star,
  Award,
  Calendar,
  Clock,
  CheckCircle2,
  X,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  Sparkles,
  PhoneCall
} from 'lucide-react';

const TRAINERS_DATA = [
  {
    id: 'alex-mercer',
    name: 'Alex "The Titan" Mercer',
    role: 'Head Strength & Powerlifting Coach',
    category: 'Strength & Power',
    experience: '10+ Yrs Exp',
    rating: 4.9,
    reviewsCount: 184,
    rate: 65,
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=700&q=80',
    specialties: ['Powerlifting', 'Hypertrophy', 'Olympic Lifting', 'Injury Rehab'],
    certifications: ['CSCS (Strength & Conditioning)', 'NASM-CPT', 'USAW Level 2'],
    bio: 'Former collegiate strength coach specializing in heavy compound lifts, biomechanics optimization, and building unbreakable functional power.',
    fullBio: 'Alex has coached over 500+ athletes ranging from everyday lifters to competitive powerlifters. His methodology focuses on strict technique, progressive overload principles, and customized periodization routines that prevent injury while maximizing total strength output.',
    clientSuccess: '99% Strength PR Achievement Rate',
    totalClients: '450+ Trainees',
    availableSlots: ['Today, 3:00 PM', 'Today, 5:30 PM', 'Tomorrow, 9:00 AM', 'Tomorrow, 4:00 PM']
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Elite HIIT & Functional Performance Coach',
    category: 'HIIT & CrossFit',
    experience: '7 Yrs Exp',
    rating: 5.0,
    reviewsCount: 210,
    rate: 55,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=700&q=80',
    specialties: ['HIIT & MetCon', 'CrossFit', 'Endurance', 'Athletic Agility'],
    certifications: ['CrossFit Level 3 Trainer', 'ACE-CPT', 'TRX Master Trainer'],
    bio: 'High-octane conditioning coach focused on metabolic conditioning, cardio endurance, rapid body recomposition, and functional stamina.',
    fullBio: 'Elena brings unmatched energy to every session. Having competed internationally in functional fitness, she designs dynamic, heart-pumping routines that push members past mental limits while keeping movements safe and dialed-in.',
    clientSuccess: 'Average 12 lbs Fat Loss in 8 Weeks',
    totalClients: '380+ Trainees',
    availableSlots: ['Today, 4:00 PM', 'Tomorrow, 8:00 AM', 'Tomorrow, 11:30 AM', 'Friday, 5:00 PM']
  },
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Boxing & Combat Conditioning Coach',
    category: 'Boxing & Combat',
    experience: '8 Yrs Exp',
    rating: 4.8,
    reviewsCount: 142,
    rate: 60,
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=80',
    specialties: ['Boxing Technique', 'Pad Work & Sparring', 'Core & Rotational Power', 'Explosive Footwork'],
    certifications: ['USA Boxing Certified Coach', 'NASM-PES (Performance Enhancement)', 'First Aid / CPR Pro'],
    bio: 'Golden Gloves champion teaching authentic fight science, explosive pad drills, agile defensive movement, and bulletproof core conditioning.',
    fullBio: 'Marcus blends technical combat precision with high-intensity conditioning. Whether you want to step into the ring or simply torch 800+ calories hitting focus mitts, his sessions build razor-sharp reflexes and mental toughness.',
    clientSuccess: 'Over 1,200 Mitt Hours Coached',
    totalClients: '290+ Trainees',
    availableSlots: ['Today, 6:00 PM', 'Tomorrow, 10:00 AM', 'Tomorrow, 4:30 PM', 'Saturday, 10:00 AM']
  },
  {
    id: 'maya-lin',
    name: 'Maya Lin',
    role: 'Yoga Master & Joint Mobility Specialist',
    category: 'Yoga & Mobility',
    experience: '9 Yrs Exp',
    rating: 4.9,
    reviewsCount: 195,
    rate: 50,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80',
    specialties: ['Vinyasa & Yin Yoga', 'Joint Decompression', 'Postural Restoration', 'Breathwork & Flow'],
    certifications: ['E-RYT 500 (Yoga Alliance)', 'FRC (Functional Range Conditioning)', 'Mat Pilates Certified'],
    bio: 'Dedicated to eliminating chronic stiffness, restoring joint mobility, correcting spinal alignment, and fostering deep mind-body mindfulness.',
    fullBio: 'Maya works closely with desk workers, athletes, and lifters to unlock tight hips, relieve lower back compression, and dramatically increase active range of motion. Her classes combine deep somatic stretches with restorative breathing patterns.',
    clientSuccess: '100% Client Mobility Improvement',
    totalClients: '520+ Trainees',
    availableSlots: ['Today, 2:00 PM', 'Tomorrow, 7:30 AM', 'Tomorrow, 1:00 PM', 'Friday, 8:30 AM']
  },
  {
    id: 'darius-knight',
    name: 'Darius Knight',
    role: 'Physique & Bodybuilding Specialist',
    category: 'Physique & Bodybuilding',
    experience: '12 Yrs Exp',
    rating: 4.9,
    reviewsCount: 230,
    rate: 70,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
    specialties: ['Hypertrophy Mechanics', 'Contest Prep', 'Symmetry & Posing', 'Targeted Muscle Growth'],
    certifications: ['ISSA Master Trainer', 'Precision Nutrition L2', 'NASM-CES (Corrective Exercise)'],
    bio: 'Pro natural physique competitor who specializes in muscle hypertrophy mechanics, biomechanics, and aesthetic physique sculpting.',
    fullBio: 'Darius teaches members how to eliminate momentum and maximize mechanical tension on target muscle fibers. His meticulous approach to angles, tempo, and mind-muscle connection turns plateaus into rapid muscle growth.',
    clientSuccess: '18 Regional Bodybuilding Trophy Winners',
    totalClients: '600+ Trainees',
    availableSlots: ['Today, 4:30 PM', 'Tomorrow, 12:00 PM', 'Tomorrow, 6:00 PM', 'Saturday, 11:30 AM']
  },
  {
    id: 'sophia-chen',
    name: 'Sophia Chen',
    role: 'Certified Dietitian & Weight Loss Strategist',
    category: 'Nutrition',
    experience: '6 Yrs Exp',
    rating: 4.9,
    reviewsCount: 168,
    rate: 50,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80',
    specialties: ['Custom Meal Plans', 'Metabolic Health', 'Fat Loss Protocols', 'Habit Engineering'],
    certifications: ['RD (Registered Dietitian)', 'ACE Health Coach', 'ISSN-SNS (Sports Nutrition)'],
    bio: 'Evidence-based nutrition coach combining metabolic science with sustainable habit building to produce permanent fat loss.',
    fullBio: 'Sophia rejects crash dieting in favor of flexible, macronutrient-aligned meal frameworks that fit real-world schedules and restaurant dining. She provides accountability, biofeedback analysis, and energy-optimizing food strategies.',
    clientSuccess: 'Average 94% Long-Term Weight Maintenance',
    totalClients: '310+ Trainees',
    availableSlots: ['Today, 1:30 PM', 'Today, 5:00 PM', 'Tomorrow, 3:00 PM', 'Friday, 2:00 PM']
  }
];

const CATEGORIES = [
  'All',
  'Strength & Power',
  'HIIT & CrossFit',
  'Boxing & Combat',
  'Yoga & Mobility',
  'Physique & Bodybuilding',
  'Nutrition'
];

export default function Trainers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Modals and interactions state
  const [bookingTrainer, setBookingTrainer] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [sessionType, setSessionType] = useState('1-on-1 Personal Training');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [bookingNotes, setBookingNotes] = useState('');
  
  const [viewingTrainer, setViewingTrainer] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Hover states for interactive elements
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [hoveredSlot, setHoveredSlot] = useState(null);

  // Filter logic
  const filteredTrainers = useMemo(() => {
    return TRAINERS_DATA.filter((trainer) => {
      const matchesCategory =
        selectedCategory === 'All' || trainer.category === selectedCategory;
      
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        trainer.name.toLowerCase().includes(query) ||
        trainer.role.toLowerCase().includes(query) ||
        trainer.bio.toLowerCase().includes(query) ||
        trainer.specialties.some((s) => s.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleOpenBooking = (trainer) => {
    setBookingTrainer(trainer);
    setSelectedSlot(trainer.availableSlots[0] || '');
    setSessionType('1-on-1 Personal Training');
    setClientName('');
    setClientEmail('');
    setBookingNotes('');
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!clientName || !clientEmail) {
      alert('Please provide your name and email to confirm the booking.');
      return;
    }

    const confirmedTrainer = bookingTrainer;
    const confirmedSlot = selectedSlot;
    setBookingTrainer(null);

    setToastMessage(`Session booked with ${confirmedTrainer.name} for ${confirmedSlot}!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <div style={{ padding: '32px', maxWidth: '1300px', width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            backgroundColor: '#10b981',
            color: '#ffffff',
            padding: '14px 20px',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(16, 185, 129, 0.35)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontWeight: '600',
            fontSize: '0.95rem',
            zIndex: 2000
          }}
        >
          <CheckCircle2 size={20} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Section */}
      <div style={{ marginBottom: '28px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
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
          <Sparkles size={14} /> Certified Fitness Experts
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
          MEET OUR ELITE COACHES
        </h1>
        <p
          style={{
            color: '#9ca3af',
            fontSize: '1rem',
            maxWidth: '680px',
            lineHeight: 1.6
          }}
        >
          Work 1-on-1 with nationally certified trainers dedicated to unlocking your peak strength, endurance, mobility, and physique goals.
        </p>
      </div>

      {/* Stats Highlights */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '32px'
        }}
      >
        {[
          { label: 'Certified Coaches', val: '15+', icon: Users },
          { label: 'Goal Success Rate', val: '98%', icon: TrendingUp },
          { label: 'Avg Member Rating', val: '4.9 / 5.0', icon: Star },
          { label: 'Training Hours Logged', val: '12,000+', icon: Clock }
        ].map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              style={{
                backgroundColor: '#181b24',
                border: '1px solid #2a2e3d',
                borderRadius: '14px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 59, 48, 0.1)',
                  color: '#ff3b30',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <IconComponent size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: '800', color: '#ffffff', lineHeight: 1.2 }}>
                  {item.val}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#9ca3af', fontWeight: '500' }}>
                  {item.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filter and Search Bar */}
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
            placeholder="Search coach by name, specialty, or discipline (e.g. Powerlifting, Boxing, Yoga)..."
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
              title="Clear search"
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: '#9ca3af',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  border: isActive ? '1px solid transparent' : '1px solid #2a2e3d',
                  background: isActive
                    ? 'linear-gradient(135deg, #ff3b30 0%, #ff9500 100%)'
                    : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? '#ffffff' : '#9ca3af',
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 2px 10px rgba(255, 59, 48, 0.35)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Trainers Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}
      >
        {filteredTrainers.length > 0 ? (
          filteredTrainers.map((trainer) => {
            const isHovered = hoveredCardId === trainer.id;
            return (
              <div
                key={trainer.id}
                onMouseEnter={() => setHoveredCardId(trainer.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                style={{
                  backgroundColor: '#181b24',
                  border: isHovered ? '1px solid #3f475a' : '1px solid #2a2e3d',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: isHovered ? '0 12px 30px rgba(0, 0, 0, 0.4)' : 'none',
                  transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                {/* Image Header */}
                <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden', backgroundColor: '#11131a' }}>
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(24, 27, 36, 1) 0%, rgba(24, 27, 36, 0.2) 50%, transparent 100%)'
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      backgroundColor: 'rgba(15, 17, 23, 0.85)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: '#e5e7eb'
                    }}
                  >
                    {trainer.experience}
                  </span>
                  <span
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      backgroundColor: 'rgba(255, 59, 48, 0.95)',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: '800',
                      color: '#ffffff',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    ${trainer.rate}/session
                  </span>
                </div>

                {/* Trainer Body */}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff', lineHeight: 1.2, margin: 0 }}>
                      {trainer.name}
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        backgroundColor: 'rgba(255, 149, 0, 0.12)',
                        border: '1px solid rgba(255, 149, 0, 0.25)',
                        color: '#ff9500',
                        padding: '2px 8px',
                        borderRadius: '6px',
                        fontSize: '0.78rem',
                        fontWeight: '700',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <Star size={13} fill="#ff9500" />
                      <span>{trainer.rating} ({trainer.reviewsCount})</span>
                    </div>
                  </div>

                  <div style={{ color: '#ff9500', fontSize: '0.85rem', fontWeight: '600', marginBottom: '12px' }}>
                    {trainer.role}
                  </div>

                  <p
                    style={{
                      color: '#9ca3af',
                      fontSize: '0.88rem',
                      lineHeight: 1.5,
                      marginBottom: '16px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {trainer.bio}
                  </p>

                  {/* Specialties Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                    {trainer.specialties.slice(0, 3).map((spec, idx) => (
                      <span
                        key={idx}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid #2a2e3d',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          fontSize: '0.72rem',
                          color: '#d1d5db',
                          fontWeight: '500'
                        }}
                      >
                        {spec}
                      </span>
                    ))}
                    {trainer.specialties.length > 3 && (
                      <span
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid #2a2e3d',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          fontSize: '0.72rem',
                          color: '#d1d5db',
                          fontWeight: '500'
                        }}
                      >
                        +{trainer.specialties.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Certifications Row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.75rem',
                      color: '#9ca3af',
                      marginBottom: '18px',
                      paddingBottom: '14px',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <ShieldCheck size={15} color="#ff3b30" style={{ flexShrink: 0 }} />
                    <span>{trainer.certifications[0]}</span>
                  </div>

                  {/* Next available slot */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.78rem',
                      color: '#34d399',
                      fontWeight: '600',
                      marginBottom: '16px'
                    }}
                  >
                    <span
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        backgroundColor: '#34d399',
                        boxShadow: '0 0 8px #34d399'
                      }}
                    />
                    <span>Next slot: {trainer.availableSlots[0]}</span>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: 'auto' }}>
                    <button
                      onClick={() => setViewingTrainer(trainer)}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid #2a2e3d',
                        color: '#ffffff',
                        padding: '10px',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      View Bio
                    </button>
                    <button
                      onClick={() => handleOpenBooking(trainer)}
                      style={{
                        background: 'linear-gradient(135deg, #ff3b30 0%, #ff9500 100%)',
                        border: 'none',
                        color: '#ffffff',
                        padding: '10px',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        boxShadow: '0 3px 10px rgba(255, 59, 48, 0.3)'
                      }}
                    >
                      <Calendar size={15} /> Book Slot
                    </button>
                  </div>
                </div>
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
              padding: '48px 24px',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                backgroundColor: 'rgba(255, 59, 48, 0.1)',
                color: '#ff3b30',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}
            >
              <Users size={28} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px', color: '#fff' }}>
              No trainers found
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '20px' }}>
              We couldn't find any coaches matching your current search and filter criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '10px',
                border: '1px solid #2a2e3d',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Bottom CTA Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(255, 59, 48, 0.12) 0%, rgba(255, 149, 0, 0.08) 100%), #181b24',
          border: '1px solid rgba(255, 59, 48, 0.25)',
          borderRadius: '18px',
          padding: '32px 36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          flexWrap: 'wrap'
        }}
      >
        <div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '6px', color: '#ffffff' }}>
            Unsure Which Trainer Fits Your Goals?
          </h3>
          <p style={{ color: '#9ca3af', fontSize: '0.92rem', maxWidth: '550px', margin: 0, lineHeight: 1.5 }}>
            Take our complimentary 10-minute fitness assessment or speak with our Head of Training to get matched with the optimal coach for your lifestyle.
          </p>
        </div>
        <button
          onClick={() => {
            if (filteredTrainers.length > 0) {
              handleOpenBooking(filteredTrainers[0]);
            }
          }}
          style={{
            background: 'linear-gradient(135deg, #ff3b30 0%, #ff9500 100%)',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '10px',
            border: 'none',
            fontSize: '0.95rem',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(255, 59, 48, 0.4)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <PhoneCall size={16} /> Request Free Match
        </button>
      </div>

      {/* Booking Modal */}
      {bookingTrainer && (
        <div
          onClick={() => setBookingTrainer(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(6px)',
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
              border: '1px solid #2f3547',
              borderRadius: '20px',
              width: '100%',
              maxWidth: '540px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
              position: 'relative'
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '20px 24px',
                borderBottom: '1px solid #2a2e3d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff', margin: 0 }}>
                Book a Training Session
              </h3>
              <button
                onClick={() => setBookingTrainer(null)}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: 'none',
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  color: '#9ca3af',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleConfirmBooking}>
              <div style={{ padding: '24px' }}>
                {/* Trainer summary */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '24px',
                    padding: '16px',
                    backgroundColor: '#12141c',
                    borderRadius: '14px',
                    border: '1px solid #2a2e3d'
                  }}
                >
                  <img
                    src={bookingTrainer.image}
                    alt={bookingTrainer.name}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '12px',
                      objectFit: 'cover',
                      border: '2px solid #ff3b30'
                    }}
                  />
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', margin: '0 0 2px 0' }}>
                      {bookingTrainer.name}
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: '#ff9500', fontWeight: '600', margin: 0 }}>
                      {bookingTrainer.role}
                    </p>
                    <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginTop: '4px' }}>
                      ${bookingTrainer.rate} / 60-minute session
                    </div>
                  </div>
                </div>

                {/* Session Type */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#d1d5db', marginBottom: '8px' }}>
                    Select Session Type
                  </label>
                  <select
                    value={sessionType}
                    onChange={(e) => setSessionType(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: '#11131a',
                      border: '1px solid #2a2e3d',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="1-on-1 Personal Training">1-on-1 Personal Training (60 min)</option>
                    <option value="Technique & Form Evaluation">Technique & Form Evaluation (45 min)</option>
                    <option value="Nutrition & Goal Setting Consultation">Nutrition & Goal Setting Consultation (45 min)</option>
                    <option value="Competition / Prep Strategy">Competition / Prep Strategy (60 min)</option>
                  </select>
                </div>

                {/* Slot Selection */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#d1d5db', marginBottom: '8px' }}>
                    Select Available Slot
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '8px' }}>
                    {bookingTrainer.availableSlots.map((slot) => {
                      const isSelected = selectedSlot === slot;
                      return (
                        <div
                          key={slot}
                          onClick={() => setSelectedSlot(slot)}
                          style={{
                            padding: '10px 12px',
                            backgroundColor: isSelected ? 'transparent' : '#11131a',
                            background: isSelected ? 'linear-gradient(135deg, #ff3b30 0%, #ff9500 100%)' : '#11131a',
                            border: isSelected ? '1px solid transparent' : '1px solid #2a2e3d',
                            borderRadius: '8px',
                            fontSize: '0.82rem',
                            fontWeight: '600',
                            color: isSelected ? '#ffffff' : '#d1d5db',
                            textAlign: 'center',
                            cursor: 'pointer',
                            boxShadow: isSelected ? '0 2px 8px rgba(255, 59, 48, 0.4)' : 'none',
                            transition: 'all 0.2s'
                          }}
                        >
                          {slot}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Member Info */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#d1d5db', marginBottom: '8px' }}>
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: '#11131a',
                      border: '1px solid #2a2e3d',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#d1d5db', marginBottom: '8px' }}>
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: '#11131a',
                      border: '1px solid #2a2e3d',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#d1d5db', marginBottom: '8px' }}>
                    Training Goals / Special Notes (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Focus on squat form, recovering from knee tweak..."
                    value={bookingNotes}
                    onChange={(e) => setBookingNotes(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: '#11131a',
                      border: '1px solid #2a2e3d',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Total Cost Summary */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px',
                    backgroundColor: '#11131a',
                    borderRadius: '10px',
                    marginTop: '16px',
                    fontSize: '0.95rem'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, color: '#fff' }}>Total Investment</div>
                    <div style={{ fontSize: '0.78rem', color: '#9ca3af' }}>Pay at front desk or card on file</div>
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#34d399' }}>
                    ${bookingTrainer.rate}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div
                style={{
                  padding: '18px 24px',
                  borderTop: '1px solid #2a2e3d',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '12px'
                }}
              >
                <button
                  type="button"
                  onClick={() => setBookingTrainer(null)}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: '1px solid #2a2e3d',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #ff3b30 0%, #ff9500 100%)',
                    color: '#ffffff',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 3px 12px rgba(255, 59, 48, 0.4)'
                  }}
                >
                  Confirm Booking <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Trainer Full Bio & Details Modal */}
      {viewingTrainer && (
        <div
          onClick={() => setViewingTrainer(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(6px)',
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
              border: '1px solid #2f3547',
              borderRadius: '20px',
              width: '100%',
              maxWidth: '540px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
              position: 'relative'
            }}
          >
            <div
              style={{
                padding: '20px 24px',
                borderBottom: '1px solid #2a2e3d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff', margin: 0 }}>
                Trainer Profile
              </h3>
              <button
                onClick={() => setViewingTrainer(null)}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: 'none',
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  color: '#9ca3af',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ padding: '24px' }}>
              <img
                src={viewingTrainer.image}
                alt={viewingTrainer.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '14px',
                  marginBottom: '20px'
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff', margin: '0 0 2px 0' }}>
                    {viewingTrainer.name}
                  </h3>
                  <div style={{ color: '#ff9500', fontWeight: '600', fontSize: '0.9rem' }}>
                    {viewingTrainer.role}
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    backgroundColor: 'rgba(255, 149, 0, 0.12)',
                    border: '1px solid rgba(255, 149, 0, 0.25)',
                    color: '#ff9500',
                    padding: '2px 8px',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: '700'
                  }}
                >
                  <Star size={13} fill="#ff9500" />
                  <span>{viewingTrainer.rating} ({viewingTrainer.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Metric Highlights */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', margin: '16px 0 20px 0' }}>
                <div style={{ backgroundColor: '#12141c', border: '1px solid #2a2e3d', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#fff' }}>{viewingTrainer.experience}</div>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '2px' }}>Experience</div>
                </div>
                <div style={{ backgroundColor: '#12141c', border: '1px solid #2a2e3d', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#fff' }}>{viewingTrainer.totalClients}</div>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '2px' }}>Trained</div>
                </div>
                <div style={{ backgroundColor: '#12141c', border: '1px solid #2a2e3d', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#fff' }}>${viewingTrainer.rate}</div>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '2px' }}>Per Session</div>
                </div>
              </div>

              <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#fff', margin: '16px 0 8px 0' }}>
                Biography & Coaching Philosophy
              </div>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
                {viewingTrainer.fullBio}
              </p>

              <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#fff', margin: '16px 0 8px 0' }}>
                Certifications & Accreditations
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {viewingTrainer.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'rgba(255, 59, 48, 0.1)',
                      border: '1px solid rgba(255, 59, 48, 0.25)',
                      color: '#ff5e54',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      padding: '4px 10px',
                      borderRadius: '6px'
                    }}
                  >
                    <ShieldCheck size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px' }} />
                    {cert}
                  </div>
                ))}
              </div>

              <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#fff', margin: '16px 0 8px 0' }}>
                Track Record & Highlight
              </div>
              <div
                style={{
                  padding: '12px 14px',
                  backgroundColor: '#11131a',
                  borderRadius: '8px',
                  border: '1px solid #2a2e3d',
                  color: '#34d399',
                  fontSize: '0.88rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Award size={18} color="#34d399" />
                <span>{viewingTrainer.clientSuccess}</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div
              style={{
                padding: '18px 24px',
                borderTop: '1px solid #2a2e3d',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '12px'
              }}
            >
              <button
                onClick={() => setViewingTrainer(null)}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  border: '1px solid #2a2e3d',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
              <button
                onClick={() => {
                  const trainer = viewingTrainer;
                  setViewingTrainer(null);
                  handleOpenBooking(trainer);
                }}
                style={{
                  background: 'linear-gradient(135deg, #ff3b30 0%, #ff9500 100%)',
                  color: '#ffffff',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 3px 12px rgba(255, 59, 48, 0.4)'
                }}
              >
                <Calendar size={16} /> Book With {viewingTrainer.name.split(' ')[0]}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
