"use client";
import { useState, useEffect, useRef } from "react";
import { Heart, Users, BookOpen, Coffee, Home, Clock, Briefcase, Gift, Handshake, Lightbulb, Scale } from "lucide-react";
import { aboutUsData } from "../constants/data";

export default function CompanyCulture() {
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

    const getWorkEnvironmentIcon = (feature) => {
        if (feature.includes("remote")) return Home;
        if (feature.includes("learning")) return BookOpen;
        if (feature.includes("team")) return Users;
        if (feature.includes("balance")) return Clock;
        if (feature.includes("projects")) return Briefcase;
        if (feature.includes("benefits")) return Gift;
        return Coffee;
    };

    return (
        <section ref={sectionRef} className="min-h-[90vh] flex items-center bg-gray-50 dark:bg-gray-900 py-12">
            <div className="max-w-6xl mx-auto  w-full">
                {/* Header */}
                <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-sm">
                        <Heart className="w-4 h-4" />
                        <span>Our Culture</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        What Makes Us <span className="text-orange-500">Different</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">Our culture is built on shared values that drive innovation and create meaningful impact</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-14">
                    {/* Cultural Values Section */}
                    <div className={`transition-all duration-800 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Our Cultural Values</h3>

                        <div className="space-y-4">
                            {aboutUsData.culture.values.map((value, index) => {
                                const IconComponent = value.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                                                <IconComponent className="w-6 h-6 text-orange-500" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{value.title}</h4>
                                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Work Environment Section */}
                    <div className={`transition-all duration-800 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Work Environment</h3>

                            <div className="mb-6 rounded-xl overflow-hidden">
                                <img src={aboutUsData.culture.image} alt="Team collaboration" className="w-full h-40 object-cover" />
                            </div>

                            <div className="space-y-2">
                                {aboutUsData.culture.workEnvironment.features.map((feature, index) => {
                                    const IconComponent = getWorkEnvironmentIcon(feature);
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                                        >
                                            <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                                                <IconComponent className="w-4 h-4 text-orange-500" />
                                            </div>
                                            <span className="text-gray-700 dark:text-gray-200 font-medium">{feature}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
