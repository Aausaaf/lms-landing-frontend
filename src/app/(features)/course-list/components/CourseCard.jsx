"use client";

import { useState } from "react";
import { Heart, Users, Clock, Target, Star } from "lucide-react";
import { useNavigation } from "@/components/navigation";

export default function CourseCard({ course }) {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const { navigate } = useNavigation();

    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            {/* Course Image */}
            <div className="relative">
                <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />

                {/* Badge */}
                <div className={`absolute top-4 left-4 ${course.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>{course.badge}</div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    {course.rating}
                </div>

                {/* Wishlist Button */}
                <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                    <Heart className={`w-5 h-5 transition-colors ${isWishlisted ? "text-red-500 fill-current" : "text-gray-600 hover:text-red-500"}`} />
                </button>
            </div>

            {/* Course Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

                {/* Instructor Info */}
                <div className="mb-4">
                    <div className="flex items-center">
                        {course.multipleInstructors ? (
                            <div className="flex -space-x-2 mr-3">
                                <img src={course.instructors[0].avatar || "/placeholder.svg"} alt={course.instructors[0].name} className="w-8 h-8 rounded-full object-cover border-2 border-white" />
                                <div className="w-8 h-8 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center border-2 border-white font-medium">
                                    +{course.multipleInstructors}
                                </div>
                            </div>
                        ) : (
                            <img src={course.instructors[0].avatar || "/placeholder.svg"} alt={course.instructors[0].name} className="w-8 h-8 rounded-full object-cover mr-3" />
                        )}
                        <div>
                            <div className="text-sm font-medium text-gray-900">
                                {course.instructors[0].name}
                                {course.multipleInstructors && ` & ${course.multipleInstructors} others`}
                            </div>
                            <div className="text-xs text-gray-500">{course.instructors[0].experience}</div>
                        </div>
                    </div>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm text-gray-600">
                    <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                    </div>
                    <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                        <Target className="h-4 w-4 mr-1" />
                        {course.successRate}
                    </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <span className="text-2xl font-bold text-orange-600">₹{course.price.toLocaleString()}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">₹{course.originalPrice.toLocaleString()}</span>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">{course.discount}% OFF</span>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                    <button onClick={() => navigate("/course-details")} className="w-full bg-orange-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-orange-700 transition-colors">
                        Enroll Now
                    </button>
                    <button className="w-full text-orange-600 border border-orange-600 font-semibold py-3 px-4 rounded-xl hover:bg-orange-50 transition-colors">Preview Course</button>
                </div>
            </div>
        </div>
    );
}
