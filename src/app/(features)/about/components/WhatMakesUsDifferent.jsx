"use client"
import { useState, useEffect, useRef } from "react"
import { Award, Globe, Users, Trophy } from "lucide-react"
import { aboutUsData } from "../constants/data"

export default function WhatMakesUsDifferent() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-300 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            <span>{aboutUsData.differentiators.title}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {aboutUsData.differentiators.subtitle.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-orange-500">
              {aboutUsData.differentiators.subtitle.split(" ").slice(2).join(" ")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the unique advantages that set us apart in the world of online education
          </p>
        </div>

        <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={aboutUsData.differentiators.heroImage || "/placeholder.svg"}
            alt="Students learning together"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutUsData.differentiators.features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-orange-100 dark:border-orange-800/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${hoveredIndex === index ? "ring-2 ring-orange-500" : ""} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">{feature.description}</p>

                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 shadow-2xl shadow-orange-500/25">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Globe className="w-8 h-8 text-white" />
              <Users className="w-8 h-8 text-white" />
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Join 50,000+ Learners Worldwide</h3>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Experience the difference that quality education and innovative technology can make in your learning
              journey
            </p>
            <button className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Start Learning Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
