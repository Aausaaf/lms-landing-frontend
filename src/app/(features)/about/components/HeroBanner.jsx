"use client"
import { useState, useEffect } from "react"
import { aboutUsData } from "../constants/data"

export default function HeroBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setMousePosition({ x, y })
  }

  return (
    <section
      className="relative min-h-[70vh] bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900/20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
          >
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="block">{aboutUsData.hero.title.split(" ").slice(0, 2).join(" ")}</span>
                <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent mt-2">
                  {aboutUsData.hero.title.split(" ").slice(2).join(" ")}
                </span>
              </h1>
              <p className="text-xl text-orange-600 dark:text-orange-400 font-medium">{aboutUsData.hero.subtitle}</p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{aboutUsData.hero.description}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(aboutUsData.hero.stats).map(([key, value], index) => (
                <div
                  key={key}
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 text-center border border-orange-100 dark:border-orange-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur opacity-30 animate-pulse"></div>
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/50 dark:border-gray-700/50 shadow-2xl">
                <img
                  src={aboutUsData.hero.backgroundImage || "/placeholder.svg"}
                  alt="About Us"
                  className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
