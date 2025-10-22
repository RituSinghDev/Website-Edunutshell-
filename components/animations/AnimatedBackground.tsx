'use client'

import { motion } from 'framer-motion'

const AnimatedBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-neon-blue/30 to-neon-teal/30 rounded-full blur-3xl"
            />

            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -30, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-neon-purple/30 to-pink-500/30 rounded-full blur-3xl"
            />

            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, -20, 0],
                    y: [0, -40, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-neon-blue/20 rounded-full blur-3xl"
            />

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: 'easeInOut',
                    }}
                    className="absolute w-1 h-1 bg-neon-blue/60 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,191,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,191,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

            {/* Animated Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
                <motion.path
                    d="M0,100 Q250,50 500,100 T1000,100"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                />
                <motion.path
                    d="M0,200 Q250,250 500,200 T1000,200"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
                />
                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00bfff" stopOpacity="0" />
                        <stop offset="50%" stopColor="#00bfff" stopOpacity="1" />
                        <stop offset="100%" stopColor="#00bfff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

export default AnimatedBackground
