import React from "react";
import { Check, Zap, Crown, Shield, ArrowRight } from "lucide-react";

export default function Memberships() {
  const plans = [
    {
      id: "basic",
      name: "Basic Pass",
      price: "$29",
      period: "/month",
      icon: Shield,
      popular: false,
      description: "Perfect for beginners starting their fitness journey.",
      features: [
        "Access to gym floor & weights",
        "Locker room & shower access",
        "Free Wi-Fi & water station",
        "1 Free personal trainer session",
      ],
      buttonText: "Get Started",
    },
    {
      id: "pro",
      name: "Pro Athlete",
      price: "$59",
      period: "/month",
      icon: Zap,
      popular: true,
      description: "Our most popular plan for dedicated gym-goers.",
      features: [
        "All Basic Pass features",
        "Unlimited group classes (HIIT, Yoga)",
        "Full sauna & recovery zone access",
        "Custom workout & nutrition guide",
        "2 monthly personal trainer sessions",
      ],
      buttonText: "Join Pro Plan",
    },
    {
      id: "vip",
      name: "VIP Elite",
      price: "$99",
      period: "/month",
      icon: Crown,
      popular: false,
      description: "Ultimate experience with unlimited 1-on-1 coaching.",
      features: [
        "All Pro Athlete features",
        "Unlimited 1-on-1 Personal Training",
        "Free protein shakes & supplements",
        "24/7 VIP Gym VIP Locker Access",
        "Bring a friend free (2x/month)",
      ],
      buttonText: "Become VIP",
    },
  ];

  return (
    <div className="page-content">
      {/* Page Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2
          style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "10px" }}
        >
          Membership Plans
        </h2>
        <p
          style={{
            color: "#9ca3af",
            maxWidth: "600px",
            margin: "0 auto",
            fontSize: "1rem",
          }}
        >
          Choose the right plan to achieve your fitness goals. Cancel or upgrade
          anytime with no hidden fees.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          alignItems: "stretch",
        }}
      >
        {plans.map((plan) => {
          const Icon = plan.icon;
          return (
            <div
              key={plan.id}
              style={{
                backgroundColor: "#181b24",
                border: plan.popular
                  ? "2px solid #ff3b30"
                  : "1px solid #2a2e3d",
                borderRadius: "20px",
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                boxShadow: plan.popular
                  ? "0 10px 30px rgba(255, 59, 48, 0.2)"
                  : "none",
              }}
            >
              {plan.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background:
                      "linear-gradient(135deg, #ff3b30 0%, #ff9500 100%)",
                    color: "#fff",
                    padding: "4px 16px",
                    borderRadius: "20px",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(255, 59, 48, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ff3b30",
                    marginBottom: "16px",
                  }}
                >
                  <Icon size={24} />
                </div>

                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  {plan.name}
                </h3>
                <p
                  style={{
                    color: "#9ca3af",
                    fontSize: "0.85rem",
                    marginBottom: "20px",
                  }}
                >
                  {plan.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    marginBottom: "24px",
                  }}
                >
                  <span style={{ fontSize: "2.5rem", fontWeight: 800 }}>
                    {plan.price}
                  </span>
                  <span
                    style={{
                      color: "#9ca3af",
                      marginLeft: "4px",
                      fontSize: "0.9rem",
                    }}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 28px 0",
                  }}
                >
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "12px",
                        fontSize: "0.9rem",
                        color: "#d1d5db",
                      }}
                    >
                      <Check
                        size={18}
                        style={{ color: "#ff3b30", flexShrink: 0 }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "none",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  background: plan.popular
                    ? "linear-gradient(135deg, #ff3b30 0%, #ff9500 100%)"
                    : "rgba(255, 255, 255, 0.08)",
                  color: "#fff",
                  transition: "opacity 0.2s",
                }}
              >
                {plan.buttonText} <ArrowRight size={18} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
