import React, { useEffect, useState } from 'react'

export default function StarBackground({ isDark }) {
  const [stars, setStars] = useState([])
  const [meteors, setMeteors] = useState([])

  useEffect(() => {
    const generateStars = () => {
      const starArray = []
      for (let i = 0; i < 50; i++) {
        starArray.push({
          id: `star-${i}`,
          top: Math.random() * 100,
          left: Math.random() * 100,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
        })
      }
      setStars(starArray)
    }

    const generateMeteors = () => {
      const meteorArray = []
      for (let i = 0; i < 10; i++) {
        meteorArray.push({
          id: `meteor-${i}`,
          top: Math.random() * 100,
          left: Math.random() * 100,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 5 + 3,
          delay: Math.random() * 5,
        })
      }
      setMeteors(meteorArray)
    }

    generateStars()
    generateMeteors()
  }, [])

  if (!isDark) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-glow"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            opacity: Math.random() * 0.7 + 0.3,
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            top: `${meteor.top}%`,
            left: `${meteor.left}%`,
            width: `${meteor.size * 30}px`,
            height: `${meteor.size}px`,
            animationDuration: `${meteor.duration}s`,
            animationDelay: `${meteor.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
