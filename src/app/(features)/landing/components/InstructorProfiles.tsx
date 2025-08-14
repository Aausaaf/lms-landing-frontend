"use client";

import { useNavigation } from "@/components/navigation";
import { instructorsData } from "../constants/data";
import Image from "next/image";

export default function InstructorProfiles() {
    const { navigate } = useNavigation();

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900" id="instructors">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-6">{instructorsData.title}</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">{instructorsData.subtitle}</p>
                </div>

                {/* Instructors Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {instructorsData.instructors.map((instructor) => (
                        <div
                            key={instructor.id}
                            className="bg-white shadow-sm dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-8 text-center group hover:border-orange-200 dark:hover:border-orange-700 transition-all duration-300"
                        >
                            {/* Instructor Image */}
                            <div className="relative w-fit m-auto mb-6">
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={instructor.image || "/placeholder.svg"}
                                    alt={instructor.name}
                                    className="w-24 h-24 rounded-full object-cover mx-auto"
                                    loading="lazy"
                                />
                            </div>

                            <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">{instructor.name}</h3>
                            <p className="text-orange-600 dark:text-orange-400 font-medium mb-2">{instructor.specialization}</p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">{instructor.education}</p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                                <div>
                                    <div className="text-2xl font-medium text-orange-600 dark:text-orange-400">{instructor.stats.students}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Students Taught</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-medium text-green-600 dark:text-green-400">{instructor.stats.successRate}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Success Rate</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-medium text-yellow-600 dark:text-yellow-400">{instructor.stats.rating}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Rating</div>
                                </div>
                            </div>

                            {/* Expertise */}
                            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                                {instructor.expertise.map((skill, index) => (
                                    <div key={index} className="flex items-center ">
                                        <svg className="w-4 h-4 text-green-500 dark:text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => navigate("/instructor-profiles")}
                                className="w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
                                aria-label={`View ${instructor.name}'s profile`}
                            >
                                View Profile
                            </button>
                        </div>
                    ))}
                </div>

                {/* View All Instructors */}
                <div className="text-center mt-12">
                    <button className="bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 border border-orange-600 dark:border-orange-400 font-medium text-lg px-8 py-4 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
                        Meet All 200+ Instructors
                    </button>
                </div>
            </div>
        </section>
    );
}
