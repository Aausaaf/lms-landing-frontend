"use client"
import { useState, useEffect, useRef } from "react"
import { aboutUsData } from "../constants/data"

export default function VisionMission() {
  const [isVisible, setIsVisible] = useState(false)
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
      className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-gray-800 dark:via-gray-900 dark:to-orange-900/10"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-orange-100 dark:border-orange-800/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <aboutUsData.visionMission.vision.icon className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {aboutUsData.visionMission.vision.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                {aboutUsData.visionMission.vision.content}
              </p>
            </div>
          </div>

          {/* Mission */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-orange-100 dark:border-orange-800/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <aboutUsData.visionMission.mission.icon className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {aboutUsData.visionMission.mission.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                {aboutUsData.visionMission.mission.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
