"use client";

import { useEffect } from "react";
import TrustBar from "./components/TrustBar";
import HeroSection from "./components/HeroSection";
import ProblemStatement from "./components/ProblemStatement";
import CategoriesShowcase from "./components/CategoriesShowcase";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import InstructorProfiles from "./components/InstructorProfiles";
import SuccessStories from "./components/SuccessStories";
import Testimonials from "./components/Testimonials";
import TrustBadges from "./components/TrustBadges";
import FAQ from "./components/FAQ";
import ContactSupport from "./components/ContactSupport";
import { ArrowUp, MessageCircle, MessageCircleMore, MessagesSquare } from "lucide-react";

/**
 * Landing Page Component
 *
 * A comprehensive landing page for EduPrime - an online learning platform
 * Features: Hero carousel, course showcase, instructor profiles, testimonials, FAQ
 *
 * SEO Optimized with:
 * - Semantic HTML structure
 * - Proper heading hierarchy
 * - Alt text for images
 * - ARIA labels and accessibility features
 * - Clean component architecture
 * - Performance optimized images
 */
export default function LandingPage() {
    // Set page title and meta description for SEO
    useEffect(() => {
        document.title = "EduPrime - Master Your Dreams with Expert Guidance | Online Learning Platform";

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Join 50,000+ students who achieved exam success at 70% less cost. Expert instructors, lifetime access, 24/7 support. GATE, IAS, JEE preparation courses available."
            );
        }
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Trust Bar - Social proof and urgency */}
            <TrustBar />
            {/* Main Content Sections */}
            <main>
                {/* Hero Section with Carousel */}
                <HeroSection />

                {/* Problem Statement - Pain points */}
                <ProblemStatement />

                {/* Categories Showcase - Course categories */}
                <CategoriesShowcase />

                {/* Featured Courses - Top courses */}
                <FeaturedCourses />

                {/* Why Choose Us - Value propositions */}
                <WhyChooseUs />

                {/* Instructor Profiles - Expert credibility */}
                <InstructorProfiles />

                {/* Success Stories - Social proof */}
                <SuccessStories />

                {/* Testimonials - Customer feedback */}
                <Testimonials />

                {/* Trust Badges - Credibility indicators */}
                <TrustBadges />

                {/* FAQ - Common questions */}
                <FAQ />

                {/* Contact Support - Help and assistance */}
                <ContactSupport />
            </main>
            {/* Floating Action Buttons */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
                {/* WhatsApp */}
                <button
                    className="w-14 h-14 rounded-full 
               bg-green-200/50 hover:bg-green-200/70 
               dark:bg-green-900/50 dark:hover:bg-green-900/70
               shadow-lg hover:shadow-green-500/30 
               hover:scale-110 flex items-center justify-center 
               transition-all duration-300"
                    aria-label="Contact us on WhatsApp"
                >
                    <MessageCircleMore size={26} className="text-green-500 dark:text-green-400" aria-hidden="true" />
                </button>

                {/* Live Chat */}
                <button
                    className="w-14 h-14 rounded-full 
               bg-orange-200/50 hover:bg-orange-200/70 
               dark:bg-orange-900/50 dark:hover:bg-orange-900/70
               shadow-lg hover:shadow-orange-500/30 
               hover:scale-110 flex items-center justify-center 
               transition-all duration-300"
                    aria-label="Start live chat"
                >
                    <MessagesSquare size={26} className="text-orange-500 dark:text-orange-400" aria-hidden="true" />
                </button>

                {/* Scroll to Top */}
                <button
                    className="w-14 h-14 rounded-full 
               bg-purple-200/50 hover:bg-purple-200/70 
               dark:bg-purple-900/50 dark:hover:bg-purple-900/70
               shadow-lg hover:shadow-purple-500/30 
               hover:scale-110 flex items-center justify-center 
               transition-all duration-300"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={26} className="text-purple-500 dark:text-purple-400" aria-hidden="true" />
                </button>
            </div>
        </div>
    );
}
