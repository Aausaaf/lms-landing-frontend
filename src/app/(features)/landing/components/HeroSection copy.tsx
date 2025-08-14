"use client";
import { useState, useEffect } from "react";
import { useNavigation } from "@/components/navigation";
import { heroData } from "../constants/data";

export default function HeroSection() {
    const { navigate } = useNavigation();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroData.carousel.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroData.carousel.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroData.carousel.length) % heroData.carousel.length);
    };

    return (
        <section className="relative  bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    }}
                ></div>
            </div>

            <div className="relative max-w-[1500px] mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    {/* Content Section */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 dark:text-white leading-tight">
                                Master Your Dreams with <span className="text-orange-500 dark:text-orange-400">Expert Guidance</span>
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">{heroData.subtitle}</p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => navigate("/course-list")}
                                className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
                                aria-label="Browse available courses"
                            >
                                {heroData.buttons.primary}
                            </button>
                            <button
                                className="border border-orange-500 text-orange-500 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-900/20 font-medium px-8 py-4 rounded-lg transition-all duration-200"
                                aria-label="Start free trial"
                            >
                                {heroData.buttons.secondary}
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap gap-6 pt-4">
                            {heroData.trustIndicators.map((indicator, index) => (
                                <div key={index} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>{indicator}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Carousel Section */}
                    <div className="relative">
                        <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
                            {/* Carousel Container */}
                            <div className="relative h-96 overflow-hidden">
                                {heroData.carousel.map((slide, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                                            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
                                        }`}
                                    >
                                        <img src={slide.image || "/placeholder.svg"} alt={slide.alt} className="w-full h-full object-cover" loading={index === 0 ? "eager" : "lazy"} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                                <h3 className="text-xl font-medium mb-2">{slide.title}</h3>
                                                <p className="text-sm opacity-90">{slide.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 p-2 rounded-full transition-all duration-200"
                                aria-label="Previous slide"
                            >
                                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 p-2 rounded-full transition-all duration-200"
                                aria-label="Next slide"
                            >
                                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Dots Indicator */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                {heroData.carousel.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentSlide ? "bg-orange-500" : "bg-white/60"}`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
