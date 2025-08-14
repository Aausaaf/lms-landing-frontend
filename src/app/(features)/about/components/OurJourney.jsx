"use client";
import { useState, useEffect, useRef } from "react";
import { Calendar, Trophy, Users, Globe, Zap, Target, TrendingUp } from "lucide-react";
import { aboutUsData } from "../constants/data";

export default function OurJourney() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const getJourneyIcon = (milestone) => {
        const iconMap = {
            "Company Founded": Calendar,
            "Platform Launch": Zap,
            "5K Students": Users,
            "Global Reach": Globe,
            "AI Integration": Target,
            "50K Students": Trophy,
            "Ongoing Growth": TrendingUp,
        };
        return iconMap[milestone] || Calendar;
    };

    return (
        <section ref={sectionRef} className="min-h-[70vh] flex items-center bg-gray-50 dark:bg-gray-900 py-12">
            <div className="max-w-5xl mx-auto px-6 w-full">
                {/* Header */}
                <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-3 shadow-sm">
                        <Calendar className="w-4 h-4" />
                        <span>Our Journey</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
                        Milestones That <span className="text-orange-500">Shaped Us</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">From a small team with big dreams to a global platform transforming education worldwide</p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>

                    <div className="space-y-8">
                        {aboutUsData.journey.map((item, index) => {
                            const IconComponent = getJourneyIcon(item.milestone);
                            return (
                                <div
                                    key={index}
                                    className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"} transition-all duration-800 ${
                                        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                    }`}
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white dark:bg-gray-800 border-3 border-orange-200 dark:border-orange-800 rounded-full shadow-sm z-10 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-4 h-4 text-orange-500" />
                                    </div>

                                    {/* Content card */}
                                    <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
                                            {/* Year and milestone badges */}
                                            <div className="flex items-center space-x-3 mb-3">
                                                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">{item.year}</span>
                                                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full text-xs font-medium">
                                                    {item.milestone}
                                                </span>
                                            </div>

                                            {/* Title and description */}
                                            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
