"use client";
import React, { useState } from "react";
import Icon from "./AppIcon";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CourseCurriculum = ({ curriculum, onPreviewClick }) => {
    const [activeModuleIndex, setActiveModuleIndex] = useState(0);

    const getTotalDuration = () => {
        return curriculum.reduce((total, module) => {
            return (
                total +
                module.lessons.reduce((moduleTotal, lesson) => {
                    return moduleTotal + lesson.duration;
                }, 0)
            );
        }, 0);
    };

    const getTotalLessons = () => {
        return curriculum.reduce((total, module) => total + module.lessons.length, 0);
    };

    const formatDuration = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
    };

    const getModuleDuration = (module) => {
        return module.lessons.reduce((total, lesson) => total + lesson.duration, 0);
    };

    return (
        <section id="curriculum" className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    {/* Enhanced Header */}
                    <div className="text-center space-y-6">
                        <div className="inline-flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            <Icon name="BookOpen" size={16} />
                            <span>COMPREHENSIVE CURRICULUM</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900">What You'll Learn</h2>
                        <div className="flex items-center justify-center space-x-8 text-sm">
                            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                                <Icon name="BookOpen" size={16} className="text-orange-500" />
                                <span className="font-semibold text-gray-900">{curriculum.length}</span>
                                <span className="text-gray-600">modules</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                                <Icon name="Play" size={16} className="text-orange-500" />
                                <span className="font-semibold text-gray-900">{getTotalLessons()}</span>
                                <span className="text-gray-600">lessons</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                                <Icon name="Clock" size={16} className="text-orange-500" />
                                <span className="font-semibold text-gray-900">{formatDuration(getTotalDuration())}</span>
                                <span className="text-gray-600">total</span>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Link href="/course-curriculum-browser">
                                <Button variant="outline" iconName="ExternalLink" iconPosition="right" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                                    View Full Curriculum
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Modern Sidebar Layout */}
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-orange-200 overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[500px]">
                                {/* Sidebar - Module List */}
                                <div className="lg:col-span-1 bg-gradient-to-br from-orange-500 to-orange-600 p-6">
                                    <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                                        <Icon name="List" size={20} />
                                        <span>Course Modules</span>
                                    </h3>
                                    <div className="space-y-3">
                                        {curriculum.map((module, moduleIndex) => (
                                            <button
                                                key={moduleIndex}
                                                onClick={() => setActiveModuleIndex(moduleIndex)}
                                                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                                                    activeModuleIndex === moduleIndex ? "bg-white text-orange-600 shadow-lg transform scale-105" : "bg-white/10 text-white hover:bg-white/20"
                                                }`}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <div
                                                        className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                                                            activeModuleIndex === moduleIndex ? "bg-orange-500 text-white" : "bg-white/20 text-white"
                                                        }`}
                                                    >
                                                        {moduleIndex + 1}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-semibold text-sm leading-tight">{module.title}</h4>
                                                        <p className="text-xs opacity-80 mt-1">
                                                            {module.lessons.length} lessons • {formatDuration(getModuleDuration(module))}
                                                        </p>
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Main Content - Module Details */}
                                <div className="lg:col-span-2 p-6">
                                    <div className="space-y-6">
                                        {/* Module Header */}
                                        <div className="border-b border-orange-200 pb-4">
                                            <div className="flex items-center space-x-3 mb-2">
                                                <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">{activeModuleIndex + 1}</div>
                                                <h3 className="text-2xl font-bold text-gray-900">{curriculum[activeModuleIndex]?.title}</h3>
                                            </div>
                                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                                                <div className="flex items-center space-x-1">
                                                    <Icon name="Play" size={14} className="text-orange-500" />
                                                    <span>{curriculum[activeModuleIndex]?.lessons.length} lessons</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Icon name="Clock" size={14} className="text-orange-500" />
                                                    <span>{formatDuration(getModuleDuration(curriculum[activeModuleIndex]))}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Lessons List */}
                                        <div className="space-y-3">
                                            {curriculum[activeModuleIndex]?.lessons.map((lesson, lessonIndex) => (
                                                <div
                                                    key={lessonIndex}
                                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors duration-200 border border-gray-200 hover:border-orange-200"
                                                >
                                                    <div className="flex items-center space-x-4">
                                                        <div
                                                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                                                lesson.type === "video"
                                                                    ? "bg-blue-100 text-blue-600"
                                                                    : lesson.type === "quiz"
                                                                    ? "bg-green-100 text-green-600"
                                                                    : "bg-gray-100 text-gray-600"
                                                            }`}
                                                        >
                                                            <Icon name={lesson.type === "video" ? "Play" : lesson.type === "quiz" ? "HelpCircle" : "FileText"} size={18} />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="font-semibold text-gray-900 text-sm mb-1">{lesson.title}</div>
                                                            <div className="flex items-center space-x-3 text-xs text-gray-600">
                                                                <span className="capitalize font-medium">{lesson.type}</span>
                                                                <span>•</span>
                                                                <span>{formatDuration(lesson.duration)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-3">
                                                        {lesson.isFree && <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">FREE</span>}
                                                        {lesson.isFree ? (
                                                            <Button
                                                                variant="default"
                                                                size="sm"
                                                                iconName="Play"
                                                                onClick={() => onPreviewClick(lesson)}
                                                                className="bg-orange-500 hover:bg-orange-600 text-white"
                                                            >
                                                                Preview
                                                            </Button>
                                                        ) : (
                                                            <div className="flex items-center space-x-2 text-gray-400">
                                                                <Icon name="Lock" size={16} />
                                                                <span className="text-xs">Locked</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Downloadable Resources */}
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-2xl p-8 shadow-xl">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
                                    <Icon name="Download" size={20} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Downloadable Resources</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: "Complete Course Notes PDF", size: "2.5 MB", type: "pdf", description: "Comprehensive notes covering all topics" },
                                    { title: "Practice Worksheets", size: "1.8 MB", type: "pdf", description: "50+ practice problems with solutions" },
                                    { title: "Formula Cheat Sheet", size: "0.9 MB", type: "pdf", description: "Quick reference for all formulas" },
                                    { title: "Sample Code Files", size: "3.2 MB", type: "zip", description: "Working code examples and templates" },
                                ].map((resource, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors duration-200 border border-orange-200 hover:shadow-md"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div
                                                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                                    resource.type === "pdf" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"
                                                }`}
                                            >
                                                <Icon name={resource.type === "pdf" ? "FileText" : "Archive"} size={20} />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900 text-sm">{resource.title}</div>
                                                <div className="text-xs text-gray-600 mb-1">{resource.description}</div>
                                                <div className="text-xs text-gray-500">{resource.size}</div>
                                            </div>
                                        </div>
                                        <Button variant="default" size="sm" iconName="Download" className="bg-orange-500 hover:bg-orange-600 text-white">
                                            Download
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseCurriculum;
