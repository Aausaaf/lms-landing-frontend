"use client";
import React, { useState, useEffect } from "react";
import Breadcrumb from "./components/Breadcrumb";
import InstructorHero from "./components/InstructorHero";
import InstructorStats from "./components/InstructorStats";
import InstructorTabs from "./components/InstructorTabs";
import AboutTab from "./components/AboutTab";
import CoursesTab from "./components/CoursesTab";
import AchievementsTab from "./components/AchievementsTab";
import FeedbackTab from "./components/FeedbackTab";
import { Layout } from "@/app/layout/layout";

const InstructorProfiles = () => {
    const [isFollowing, setIsFollowing] = useState(false);

    // Mock instructor data
    const instructor = {
        id: 1,
        name: "Dr. Priya Sharma",
        title: "Senior Mathematics & Physics Educator",
        shortBio: "Expert educator with 12+ years of experience in teaching competitive exam preparation for JEE, NEET, and Class 10-12 students.",
        photo: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2940&auto=format&fit=crop",
        isVerified: true,
        credentials: ["Ph.D. Mathematics", "IIT Delhi Alumni", "12+ Years Experience"],
        socialLinks: [
            { platform: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com" },
            { platform: "Twitter", icon: "Twitter", url: "https://twitter.com" },
            { platform: "YouTube", icon: "Youtube", url: "https://youtube.com" },
        ],
        fullBio: `Dr. Priya Sharma is a distinguished educator with over 12 years of experience in teaching mathematics and physics to students preparing for competitive exams. She holds a Ph.D. in Mathematics from IIT Delhi and has been instrumental in helping thousands of students achieve their academic goals.\n\nHer teaching methodology focuses on building strong conceptual foundations while ensuring students develop problem-solving skills essential for competitive examinations. She has consistently maintained a success rate of over 85% for her students in JEE and NEET examinations.`,
        education: [
            {
                degree: "Ph.D. in Mathematics",
                institution: "Indian Institute of Technology, Delhi",
                year: "2008-2012",
                specialization: "Applied Mathematics & Computational Methods",
            },
            {
                degree: "M.Sc. Mathematics",
                institution: "Delhi University",
                year: "2006-2008",
                specialization: "Pure Mathematics",
            },
            {
                degree: "B.Sc. Mathematics (Hons)",
                institution: "St. Stephen's College, Delhi",
                year: "2003-2006",
            },
        ],
        teachingPhilosophy:
            "I believe that every student has the potential to excel in mathematics and physics. My approach is to make complex concepts simple and relatable, ensuring that students not only understand the subject but also develop a genuine interest in it.",
        expertise: ["JEE Mathematics", "NEET Physics", "Class 10-12 CBSE", "Competitive Exam Strategy", "Problem Solving Techniques", "Conceptual Learning"],
        languages: ["English", "Hindi", "Punjabi"],
    };

    const stats = {
        experience: "12+ Years",
        totalStudents: 15420,
        coursesCreated: 8,
        averageRating: 4.8,
        satisfactionRate: 96,
        achievementsCount: 12,
    };

    const courses = [
        {
            id: 1,
            title: "Complete JEE Mathematics Mastery Course",
            description: "Comprehensive course covering all JEE Mathematics topics with 500+ practice problems and detailed solutions.",
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=225&fit=crop",
            duration: "45h 30m",
            rating: 4.9,
            reviewCount: 1250,
            enrolledStudents: 8500,
            price: 2999,
            originalPrice: 4999,
            totalLessons: 120,
            isNew: false,
        },
        {
            id: 2,
            title: "NEET Physics Complete Preparation",
            description: "Master NEET Physics with conceptual clarity, numerical problem solving, and exam strategies.",
            thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=225&fit=crop",
            duration: "38h 15m",
            rating: 4.7,
            reviewCount: 890,
            enrolledStudents: 6200,
            price: 2499,
            originalPrice: 3999,
            totalLessons: 95,
            isNew: true,
        },
        {
            id: 3,
            title: "Class 12 Mathematics Board Exam Prep",
            description: "Complete Class 12 CBSE Mathematics preparation with board exam pattern and previous year questions.",
            thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=225&fit=crop",
            duration: "25h 45m",
            rating: 4.8,
            reviewCount: 650,
            enrolledStudents: 4800,
            price: 1999,
            originalPrice: 2999,
            totalLessons: 75,
            isNew: false,
        },
    ];

    const achievements = [
        {
            title: "Excellence in Online Education Award",
            issuer: "National Education Council",
            description: "Recognized for outstanding contribution to online education and student success in competitive examinations.",
            date: "March 2024",
            type: "award",
            isVerified: true,
            certificateUrl: "https://example.com/certificate1",
        },
        {
            title: "Certified Google for Education Trainer",
            issuer: "Google for Education",
            description: "Certified to train educators on Google Workspace for Education tools and digital teaching methodologies.",
            date: "January 2024",
            type: "certification",
            isVerified: true,
            credentialId: "GFE-2024-001234",
            expiryDate: "January 2027",
        },
        {
            title: "10,000+ Students Milestone",
            issuer: "EduCourse Pro Platform",
            description: "Successfully taught and mentored over 10,000 students across various courses and programs.",
            date: "December 2023",
            type: "milestone",
            isVerified: true,
        },
        {
            title: "Best Faculty Award - Mathematics",
            issuer: "Indian Coaching Institute Association",
            description: "Awarded for exceptional teaching performance and student results in JEE Mathematics preparation.",
            date: "August 2023",
            type: "award",
            isVerified: true,
        },
    ];

    const feedback = [
        {
            studentName: "Arjun Patel",
            studentPhoto: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5,
            comment:
                "Dr. Sharma's teaching methodology is exceptional. Her way of explaining complex mathematical concepts made JEE preparation much easier for me. I scored 98 percentile in JEE Mains thanks to her guidance.",
            date: "2024-07-15",
            courseName: "Complete JEE Mathematics Mastery Course",
            isVerified: true,
            helpfulCount: 24,
        },
        {
            studentName: "Sneha Gupta",
            studentPhoto: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5,
            comment: "The NEET Physics course was a game-changer for me. Dr. Sharma's conceptual approach and problem-solving techniques helped me clear NEET with a great score. Highly recommended!",
            date: "2024-07-10",
            courseName: "NEET Physics Complete Preparation",
            isVerified: true,
            helpfulCount: 18,
        },
        {
            studentName: "Rohit Kumar",
            studentPhoto: "https://randomuser.me/api/portraits/men/56.jpg",
            rating: 4,
            comment: "Great teacher with excellent knowledge. The course content is comprehensive and well-structured. Only suggestion would be to add more practice tests.",
            date: "2024-07-08",
            courseName: "Class 12 Mathematics Board Exam Prep",
            isVerified: true,
            helpfulCount: 12,
        },
        {
            studentName: "Priya Singh",
            studentPhoto: "https://randomuser.me/api/portraits/women/68.jpg",
            rating: 5,
            comment: "Dr. Sharma is not just a teacher but a mentor. Her support and guidance throughout my preparation journey was invaluable. The way she breaks down complex problems is amazing.",
            date: "2024-07-05",
            courseName: "Complete JEE Mathematics Mastery Course",
            isVerified: true,
            helpfulCount: 31,
        },
        {
            studentName: "Vikash Sharma",
            studentPhoto: "https://randomuser.me/api/portraits/men/72.jpg",
            rating: 5,
            comment: "Excellent teaching quality and very responsive to student queries. The course materials are top-notch and the practice problems are very helpful for exam preparation.",
            date: "2024-07-02",
            courseName: "NEET Physics Complete Preparation",
            isVerified: true,
            helpfulCount: 15,
        },
    ];

    const overallRating = {
        average: 4.8,
        totalReviews: 2850,
    };

    const handleFollow = () => {
        setIsFollowing(!isFollowing);
    };

    const handleMessage = () => {
        // Handle message functionality
        console.log("Message instructor");
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <div className="min-h-screen bg-background">
                <main className="">
                    {/* Instructor Hero Section */}
                    <InstructorHero instructor={instructor} onFollow={handleFollow} onMessage={handleMessage} isFollowing={isFollowing} />

                    <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <Breadcrumb />

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-8">
                                <InstructorTabs>
                                    <AboutTab tabId="about" instructor={instructor} />
                                    <CoursesTab tabId="courses" courses={courses} />
                                    <AchievementsTab tabId="achievements" achievements={achievements} />
                                    <FeedbackTab tabId="feedback" feedback={feedback} overallRating={overallRating} />
                                </InstructorTabs>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-4">
                                <div className="sticky top-24 space-y-6">
                                    <InstructorStats stats={stats} />

                                    {/* Quick Contact Card */}
                                    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                                        <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Get in Touch</h3>
                                        <div className="space-y-3">
                                            <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                                                <span>Send Message</span>
                                            </button>
                                            <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
                                                <span>Schedule Call</span>
                                            </button>
                                        </div>

                                        <div className="mt-4 pt-4 border-t border-border text-center">
                                            <p className="text-xs text-muted-foreground">Response time: Usually within 2 hours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    );
};

export default InstructorProfiles;
