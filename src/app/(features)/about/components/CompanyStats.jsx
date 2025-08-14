"use client"
import { useState, useEffect, useRef } from "react"
import { aboutUsData } from "../constants/data"

export default function CompanyStats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({})
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          startCounters()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const startCounters = () => {
    aboutUsData.stats.forEach((stat, index) => {
      const target = Number.parseInt(stat.number.replace(/[^\d]/g, ""))
      let current = 0
      const increment = target / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounters((prev) => ({
          ...prev,
          [index]: Math.floor(current),
        }))
      }, 30)
    })
  }

  return (
    <section ref={sectionRef} className="py-20 bg-orange-500 dark:bg-orange-600">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-orange-100 max-w-2xl mx-auto">
            See how we're making a difference in education worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutUsData.stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className={`text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-500 hover:scale-105 hover:bg-white/20 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number.includes("%") || stat.number.includes("/")
                    ? stat.number
                    : `${counters[index] || 0}${stat.number.replace(/\d/g, "")}`}
                </div>
                <div className="text-lg font-medium text-orange-100 mb-2">{stat.label}</div>
                <div className="text-sm text-orange-200">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
