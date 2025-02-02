import React from "react"
import { motion } from "framer-motion"
import AnimatedGradient from "./AnimatedGradient"

interface BentoCardProps {
  title: string
  value: string | number
  subtitle?: string
  colors: string[]
  delay: number
}

const BentoCard: React.FC<BentoCardProps> = ({
  title,
  value,
  subtitle,
  colors,
  delay,
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay + 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      className="relative overflow-hidden h-full bg-black rounded-xl border border-custom-orange/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
      <motion.div
        className="relative z-10 p-3 sm:p-5 md:p-8 text-white"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h3 className="text-sm sm:text-base md:text-lg font-syne" variants={item}>
          {title}
        </motion.h3>
        <motion.p
          className="text-2xl sm:text-4xl md:text-5xl font-medium mb-4 font-syne text-custom-orange"
          variants={item}
        >
          {value}
        </motion.p>
        {subtitle && (
          <motion.p className="text-sm opacity-80 font-jakarta" variants={item}>
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  )
}

const Achievements = () => {
  return (
    <section className="w-full bg-black py-20 px-8">
      <div className="container mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white font-syne mb-6">
          Our <span className="text-custom-orange">Achievements</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto font-jakarta">
          Transforming visions into digital reality with proven success and innovation
        </p>
      </div>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
        <div className="md:col-span-2">
          <BentoCard
            title="Projects Completed"
            value="500+"
            subtitle="Delivering excellence across industries"
            colors={["#E46534", "#000000", "#1a1a1a"]}
            delay={0.2}
          />
        </div>
        <BentoCard
          title="Client Satisfaction"
          value="98%"
          subtitle="Based on client feedback"
          colors={["#000000", "#E46534", "#1a1a1a"]}
          delay={0.4}
        />
        <BentoCard
          title="Team Growth"
          value="200%"
          subtitle="Year over year expansion"
          colors={["#1a1a1a", "#E46534", "#000000"]}
          delay={0.6}
        />
        <div className="md:col-span-2">
          <BentoCard
            title="Global Reach"
            value="25+"
            subtitle="Countries served worldwide"
            colors={["#E46534", "#1a1a1a", "#000000"]}
            delay={0.8}
          />
        </div>
      </div>
    </section>
  )
}

export default Achievements