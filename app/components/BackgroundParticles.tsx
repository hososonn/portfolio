"use client";

import { motion } from "framer-motion";

export default function BackgroundParticles() {
  const emojis = ["🎵", "🎶", "🎸", "🎤", "🎧", "🥁", "🎹"];
  const colors = [
    "bg-zinc-400/20",
    "bg-zinc-500/20",
    "bg-zinc-600/25",
    "bg-slate-400/20",
    "bg-slate-500/20",
    "bg-gray-400/20",
  ];

  const particles = [...Array(15)].map((_, i) => {
    const colorIndex = Math.floor(Math.random() * colors.length);
    const emojiIndex = Math.floor(Math.random() * emojis.length);
    const size = Math.random() * 40 + 30;
    return {
      id: i,
      size: size,
      emoji: emojis[emojiIndex],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      xMove: (Math.random() - 0.5) * 150,
      yMove: -Math.random() * 120 - 80,
      rotate: Math.random() * 180,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 8,
      color: colors[colorIndex],
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${particle.color} flex items-center justify-center shadow-lg`}
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, particle.yMove, particle.yMove * 1.1],
            x: [0, particle.xMove, particle.xMove * 1.05],
            rotate: [0, particle.rotate, particle.rotate * 1.2],
            opacity: [0, 0.4, 0.3, 0],
            scale: [0, 1, 0.95, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        >
          <span className="text-3xl md:text-4xl" style={{ fontSize: `${particle.size * 0.5}px` }}>
            {particle.emoji}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
