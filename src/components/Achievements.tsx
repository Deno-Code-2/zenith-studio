
"use client"

import React from "react"
import { motion } from "framer-motion"
import { AnimatedGradient } from "@/components/AnimatedGradient"

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
      className="relative overflow-hidden h-full bg-white rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
      <motion.div
        className="relative z-10 p-3 sm:p-5 md:p-8 text-foreground dark:text-muted"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h3 
          className="text-sm sm:text-base md:text-lg font-syne" 
          variants={item}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-2xl sm:text-4xl md:text-5xl font-medium mb-4 font-syne"
          variants={item}
        >
          {value}
        </motion.p>
        {subtitle && (
          <motion.p 
            className="text-sm opacity-80 font-plus-jakarta" 
            variants={item}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  )
}

const AnimatedGradientDemo: React.FC = () => {
  return (
    <div className="w-full bg-background h-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 grow h-full">
          <div className="md:col-span-2">
            <BentoCard
              title="Total Revenue"
              value="$1,234,567"
              subtitle="15% increase from last month"
              colors={["#3B82F6", "#60A5FA", "#93C5FD"]}
              delay={0.2}
            />
          </div>
          <BentoCard
            title="New Users"
            value={1234}
            subtitle="Daily signups"
            colors={["#60A5FA", "#34D399", "#93C5FD"]}
            delay={0.4}
          />
          <BentoCard
            title="Conversion Rate"
            value="3.45%"
            subtitle="0.5% increase from last week"
            colors={["#F59E0B", "#A78BFA", "#FCD34D"]}
            delay={0.6}
          />
          <div className="md:col-span-2">
            <BentoCard
              title="Active Projects"
              value={42}
              subtitle="8 completed this month"
              colors={["#3B82F6", "#A78BFA", "#FBCFE8"]}
              delay={0.8}
            />
          </div>
          <div className="md:col-span-3">
            <BentoCard
              title="Customer Satisfaction"
              value="4.8/5"
              subtitle="Based on 1,000+ reviews from verified customers across all product categories"
              colors={["#EC4899", "#F472B6", "#3B82F6"]}
              delay={1}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedGradientDemo
