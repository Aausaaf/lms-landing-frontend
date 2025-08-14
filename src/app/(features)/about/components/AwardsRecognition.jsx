"use client";
import { useState, useEffect, useRef } from "react";
import { aboutUsData } from "../constants/data";

export default function AwardsRecognition() {
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

    return (
        <section ref={sectionRef} className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-gray-800 dark:via-gray-900 dark:to-orange-900/10">
            <div className="max-w-7xl mx-auto px-4">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Awards & Recognition</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Honored to be recognized by industry leaders and organizations</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {aboutUsData.awards.map((award, index) => {
                        const IconComponent = award.icon;
                        return (
                            <div
                                key={index}
                                className={`group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-orange-100 dark:border-orange-800/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10 ${
                                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                </div>
                                {/* <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                  {award.year}
                </div> */}
                                <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white mb-2">{award.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{award.organization}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
