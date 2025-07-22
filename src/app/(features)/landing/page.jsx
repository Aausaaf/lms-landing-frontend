"use client"

import TrustBar from "./components/TrustBar"
import HeroSection from "./components/HeroSection"
import ProblemStatement from "./components/ProblemStatement"
import CategoriesShowcase from "./components/CategoriesShowcase"
import FeaturedCourses from "./components/FeaturedCourses"
import WhyChooseUs from "./components/WhyChooseUs"
import InstructorProfiles from "./components/InstructorProfiles"
import SuccessStories from "./components/SuccessStories"
import Testimonials from "./components/Testimonials"
import TrustBadges from "./components/TrustBadges"
import FAQ from "./components/FAQ"
import ContactSupport from "./components/ContactSupport"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <TrustBar />
      <HeroSection />
      <ProblemStatement />
      <CategoriesShowcase />
      <FeaturedCourses />
      <WhyChooseUs />
      <InstructorProfiles />
      <SuccessStories />
      <Testimonials />
      <TrustBadges />
      <FAQ />
      <ContactSupport />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 space-y-3">
        {/* WhatsApp */}
        <button className="w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center">
          <span className="text-white text-2xl">💬</span>
        </button>

        {/* Live Chat */}
        <button className="w-14 h-14 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 flex items-center justify-center">
          <span className="text-white text-2xl">💭</span>
        </button>

        {/* Scroll to Top */}
        <button
          className="w-14 h-14 bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 hover:scale-110 flex items-center justify-center"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-white text-2xl">⬆️</span>
        </button>
      </div>
    </div>
  )
}
