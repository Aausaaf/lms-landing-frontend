"use client";
import { useState, useEffect } from "react";
import { heroData } from "../constants/data";

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroData.carousel.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    // Animation on mount
    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Mouse parallax effect
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroData.carousel.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroData.carousel.length) % heroData.carousel.length);
    };

    return (
        <section
            className="relative  bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900/20 overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Floating Orbs */}
                {/* <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 dark:bg-orange-800/30 rounded-full blur-xl animate-pulse opacity-60"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-orange-300 dark:bg-orange-700/40 rounded-full blur-lg animate-bounce opacity-40" style={{ animationDelay: "2s" }}></div>
                <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-orange-400 dark:bg-orange-600/30 rounded-full blur-md animate-pulse opacity-50" style={{ animationDelay: "1s" }}></div> */}

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-5 dark:opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)`,
                    }}
                ></div>
            </div>

            <div className="relative max-w-[1480px] mx-auto px-2 py-20">
                <div className="grid lg:grid-cols-2 gap-4 items-center ">
                    {/* Content Section */}
                    <div className={`space-y-10 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}>
                        {/* Stats Badge */}
                        <div className="inline-flex items-center space-x-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full px-6 py-3 border border-orange-200 dark:border-orange-800">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{heroData.stats.students} Students</span>
                            </div>
                            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
                            <div className="flex items-center space-x-2">
                                <span className="text-sm font-medium text-orange-600 dark:text-orange-400">{heroData.stats.passRate} Pass Rate</span>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                                <span className="block">Master Your</span>
                                <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent  mt-2">Dreams</span>
                                <span className="block text-4xl md:text-4xl lg:text-5xl font-medium mt-2">with Expert Guidance</span>
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">{heroData.subtitle}</p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25">
                                <span className="relative z-10 flex items-center justify-center space-x-2">
                                    <span>{heroData.buttons.primary}</span>
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>

                            <button className="group relative border-2 border-orange-500 text-orange-600 dark:text-orange-400 font-semibold px-10 py-5 rounded-2xl transition-all duration-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:scale-105 hover:shadow-lg">
                                <span className="flex items-center justify-center space-x-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>{heroData.buttons.secondary}</span>
                                </span>
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                            {heroData.trustIndicators.map((indicator, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-orange-100 dark:border-orange-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{indicator}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced Carousel Section */}
                    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}>
                        <div className="relative">
                            {/* Glowing Border Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur opacity-30 animate-pulse"></div>

                            <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/50 dark:border-gray-700/50 shadow-2xl">
                                {/* Carousel Container */}
                                <div className="relative h-[500px] overflow-hidden">
                                    {heroData.carousel.map((slide, index) => (
                                        <div
                                            key={index}
                                            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                                                index === currentSlide
                                                    ? "translate-x-0 opacity-100 scale-100"
                                                    : index < currentSlide
                                                    ? "-translate-x-full opacity-0 scale-95"
                                                    : "translate-x-full opacity-0 scale-95"
                                            }`}
                                        >
                                            <div className="relative h-full">
                                                <img src={slide.image || "/placeholder.svg"} alt={slide.alt} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                                                    <div className="absolute bottom-8 left-8 right-8 text-white space-y-3">
                                                        <h3 className="text-2xl font-bold mb-3">{slide.title}</h3>
                                                        <p className="text-base opacity-90 leading-relaxed">{slide.description}</p>
                                                        <div className="flex items-center space-x-2 pt-2">
                                                            <div className="w-8 h-1 bg-orange-500 rounded-full"></div>
                                                            <div className="w-4 h-1 bg-orange-300 rounded-full"></div>
                                                            <div className="w-2 h-1 bg-orange-200 rounded-full"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Enhanced Navigation */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 p-4 rounded-full transition-all duration-300 group border border-white/30"
                                >
                                    <svg className="w-6 h-6 text-white transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 p-4 rounded-full transition-all duration-300 group border border-white/30"
                                >
                                    <svg className="w-6 h-6 text-white transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                {/* Enhanced Progress Indicators */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
                                    {heroData.carousel.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`transition-all duration-300 rounded-full ${index === currentSlide ? "w-10 h-3 bg-orange-500" : "w-3 h-3 bg-white/60 hover:bg-white/80"}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="flex flex-col items-center space-y-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Scroll to explore</span>
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div> */}
        </section>
    );
}
