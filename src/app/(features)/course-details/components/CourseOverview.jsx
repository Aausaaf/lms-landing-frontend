import React from "react";
import Icon from "./AppIcon";

const CourseOverview = ({ course }) => {
    return (
        <section id="overview" className="py-16 bg-white">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto space-y-12">
                    {/* Course Description */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
                                <Icon name="Info" size={20} />
                            </div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900">About This Course</h2>
                        </div>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed text-lg">{course.description}</p>
                        </div>
                    </div>

                    {/* Learning Outcomes */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
                                <Icon name="Target" size={20} />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-gray-900">What You'll Learn</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {course.learningOutcomes.map((outcome, index) => (
                                <div key={index} className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
                                    <Icon name="CheckCircle" size={20} className="text-orange-500 mt-0.5 flex-shrink-0" />
                                    <p className="text-gray-700 font-medium">{outcome}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Prerequisites */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
                                <Icon name="BookOpen" size={20} />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-gray-900">Prerequisites</h3>
                        </div>
                        <div className="space-y-3">
                            {course.prerequisites.map((prerequisite, index) => (
                                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border">
                                    <Icon name="Circle" size={8} className="text-orange-500 mt-2 flex-shrink-0" />
                                    <p className="text-gray-700">{prerequisite}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Target Audience */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
                                <Icon name="Users" size={20} />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-gray-900">Who This Course Is For</h3>
                        </div>
                        <div className="space-y-3">
                            {course.targetAudience.map((audience, index) => (
                                <div key={index} className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
                                    <Icon name="User" size={20} className="text-orange-500 mt-0.5 flex-shrink-0" />
                                    <p className="text-gray-700 font-medium">{audience}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Course Features */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
                                <Icon name="Award" size={20} />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-gray-900">Course Features</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {course.features.map((feature, index) => (
                                <div key={index} className="text-center p-6 bg-white rounded-lg border border-orange-200 hover:shadow-lg transition-shadow">
                                    <Icon name={feature.icon} size={32} className="text-orange-500 mx-auto mb-4" />
                                    <h4 className="font-heading font-semibold text-gray-900 mb-2">{feature.title}</h4>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseOverview;
