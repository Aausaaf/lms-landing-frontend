import React, { useState, useEffect } from "react";
import Icon from "./AppIcon";
import { Button } from "@/components/ui/button";

const CourseNavigation = ({ activeSection, onSectionChange }) => {
    const navigationItems = [
        { id: "overview", label: "Overview", icon: "FileText" },
        { id: "curriculum", label: "Curriculum", icon: "BookOpen" },
        { id: "instructors", label: "Instructors", icon: "Users" },
        { id: "reviews", label: "Reviews", icon: "Star" },
        { id: "faq", label: "FAQ", icon: "HelpCircle" },
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 100;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: "smooth",
            });
        }
        onSectionChange(sectionId);
    };

    return (
        <div className="sticky top-[4.5rem] z-40 bg-white/95 backdrop-blur-sm border-b border-orange-200 shadow-sm">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    <nav className="flex space-x-8">
                        {navigationItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeSection === item.id ? "bg-orange-500 text-white shadow-lg transform scale-105" : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                                }`}
                            >
                                <Icon name={item.icon} size={16} />
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </nav>
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="text-sm text-gray-600">Share this course:</div>
                        <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" iconName="Share" className="text-orange-500 hover:bg-orange-50">
                                Share
                            </Button>
                            <Button variant="ghost" size="sm" iconName="Heart" className="text-orange-500 hover:bg-orange-50">
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseNavigation;
