import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 7000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.3,
        animationDuration: Math.random() * 5 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 6;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 30,
        delay: Math.random() * 20,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Purple Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full animate-pulse" />

      {/* Cyan Glow */}
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full animate-pulse" />

      {/* Blue Glow */}
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            boxShadow:
              "0 0 6px rgba(255,255,255,0.8), 0 0 12px rgba(168,85,247,0.5), 0 0 18px rgba(6,182,212,0.4)",
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute animate-meteor"
          style={{
            width: `${meteor.size * 60}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
            background:
              "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,1), rgba(168,85,247,1))",
            borderRadius: "999px",
            boxShadow: "0 0 12px rgba(168,85,247,0.8)",
          }}
        />
      ))}
    </div>
  );
};