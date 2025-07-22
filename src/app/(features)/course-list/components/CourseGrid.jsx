"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";

export default function CourseGrid() {
    const [sortBy, setSortBy] = useState("relevance");
    const [resultsCount] = useState(165);

    const courses = [
        {
            id: 1,
            title: "GATE 2025 Complete Course",
            description: "Comprehensive preparation for all engineering branches with live classes and doubt support",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2940&auto=format&fit=crop",
            category: "engineering",
            price: 12999,
            originalPrice: 24999,
            discount: 48,
            rating: 4.8,
            students: 5240,
            duration: "120+ hours",
            successRate: "92%",
            difficulty: "intermediate",
            language: "english",
            badge: "Bestseller",
            badgeColor: "bg-orange-600",
            instructors: [
                {
                    name: "Dr. Rajesh Kumar",
                    avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                    experience: "IIT Alumni • 15+ years exp",
                },
            ],
            multipleInstructors: 4,
        },
        {
            id: 2,
            title: "IAS Foundation 2025",
            description: "Complete UPSC preparation with current affairs, mock tests, and essay writing",
            image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            category: "civil-services",
            price: 18999,
            originalPrice: 35999,
            discount: 47,
            rating: 4.9,
            students: 3180,
            duration: "200+ hours",
            successRate: "78%",
            difficulty: "advanced",
            language: "english",
            badge: "New Launch",
            badgeColor: "bg-green-600",
            instructors: [
                {
                    name: "Prof. Anita Sharma",
                    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                    experience: "JNU Alumni • 12+ years experience",
                },
            ],
        },
        {
            id: 3,
            title: "Class 12 Physics Mastery",
            description: "Complete CBSE Physics with JEE/NEET preparation and practical sessions",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2940&auto=format&fit=crop",
            category: "school",
            price: 8999,
            originalPrice: 15999,
            discount: 44,
            rating: 4.7,
            students: 8450,
            duration: "80+ hours",
            successRate: "95%",
            difficulty: "intermediate",
            language: "both",
            badge: "Popular",
            badgeColor: "bg-orange-600",
            instructors: [
                {
                    name: "Dr. Vikram Singh",
                    avatar: "https://source.unsplash.com/40x40/?man,teacher",
                    experience: "IIT Alumni • 18+ years exp",
                },
            ],
            multipleInstructors: 1,
        },
        {
            id: 4,
            title: "NEET 2025 Biology Complete",
            description: "Comprehensive biology preparation for NEET with practical experiments and mock tests",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2940&auto=format&fit=crop",
            category: "medical",
            price: 15999,
            originalPrice: 28999,
            discount: 45,
            rating: 4.8,
            students: 4230,
            duration: "180+ hours",
            successRate: "88%",
            difficulty: "advanced",
            language: "english",
            badge: "Expert Choice",
            badgeColor: "bg-purple-600",
            instructors: [
                {
                    name: "Dr. Priya Nair",
                    avatar: "https://source.unsplash.com/40x40/?woman,scientist",
                    experience: "AIIMS Alumni • 16+ years experience",
                },
            ],
        },
        {
            id: 5,
            title: "Banking Exam Complete Course",
            description: "Complete preparation for SBI, IBPS, and other banking exams with quantitative aptitude",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2940&auto=format&fit=crop",
            category: "banking",
            price: 7999,
            originalPrice: 12999,
            discount: 38,
            rating: 4.6,
            students: 6890,
            duration: "60+ hours",
            successRate: "76%",
            difficulty: "beginner",
            language: "hindi",
            badge: "Hindi Medium",
            badgeColor: "bg-indigo-600",
            instructors: [
                {
                    name: "Prof. Suresh Kumar",
                    avatar: "https://source.unsplash.com/40x40/?man,professor",
                    experience: "Banking Expert • 14+ years exp",
                },
            ],
            multipleInstructors: 2,
        },
        {
            id: 6,
            title: "Class 10 Mathematics Foundation",
            description: "Complete CBSE Mathematics with board exam preparation and concept clarity",
            image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            category: "school",
            price: 5999,
            originalPrice: 9999,
            discount: 40,
            rating: 4.9,
            students: 12340,
            duration: "45+ hours",
            successRate: "97%",
            difficulty: "beginner",
            language: "english",
            badge: "Foundation",
            badgeColor: "bg-orange-600",
            instructors: [
                {
                    name: "Prof. Ramesh Gupta",
                    avatar: "https://source.unsplash.com/40x40/?teacher,blackboard",
                    experience: "Math Expert • 22+ years experience",
                },
            ],
        },
    ];

    const sortOptions = [
        { value: "relevance", label: "Relevance" },
        { value: "popularity", label: "Popularity" },
        { value: "rating", label: "Highest Rated" },
        { value: "price-low", label: "Price: Low to High" },
        { value: "price-high", label: "Price: High to Low" },
        { value: "newest", label: "Newest" },
    ];

    return (
        <div>
            {/* Filter Bar */}
            <div className="flex items-center justify-between mb-8">
                <div className="text-gray-600">
                    <span className="font-semibold text-gray-900">{resultsCount}</span> courses found
                </div>

                <div className="flex items-center space-x-4">
                    <label className="text-sm text-gray-600 font-medium">Sort by:</label>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                    >
                        {sortOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Course Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
}
