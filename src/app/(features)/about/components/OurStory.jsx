"use client"
import { useState, useEffect, useRef } from "react"
import { aboutUsData } from "../constants/data"

export default function OurStory() {
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
    <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={aboutUsData.story.image || "/placeholder.svg"}
                  alt="Our Story"
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {aboutUsData.story.title}
              </h2>
              <p className="text-lg text-orange-600 dark:text-orange-400 font-medium">{aboutUsData.story.subtitle}</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{aboutUsData.story.content}</p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {aboutUsData.story.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
