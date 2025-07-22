"use client";
import React, { useState, useEffect } from "react";
import Breadcrumb from "./components/Breadcrumb";
import SearchAndFilters from "./components/SearchAndFilters";
import ModuleCard from "./components/ModuleCard";
import Icon from "./components/AppIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Layout } from "@/app/layout/layout";

const CourseCurriculumBrowser = () => {
    const [expandedModules, setExpandedModules] = useState(new Set([1]));
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilters, setActiveFilters] = useState(["all"]);

    // Mock course data
    const courseData = {
        id: "react-mastery-2025",
        title: "Complete React Mastery Course 2025",
        description: "Master React from fundamentals to advanced concepts with hands-on projects and real-world applications.",
        totalDuration: "12 hours 45 minutes",
        modules: [
            {
                id: 1,
                moduleNumber: 1,
                title: "React Fundamentals & Setup",
                description: "Learn the core concepts of React including components, JSX, and development environment setup. Perfect for beginners starting their React journey.",
                duration: "2h 30m",
                isEnrolled: true,
                lessons: [
                    {
                        id: 101,
                        title: "Introduction to React and Modern JavaScript",
                        description: "Understanding React ecosystem, ES6+ features, and why React is the most popular frontend library.",
                        duration: "15 min",
                        type: "videos",
                        isFree: true,
                        isEnrolled: true,
                        completed: true,
                        views: "12.5K",
                        difficulty: "beginner",
                        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop",
                        notes: "Great introduction to React concepts and modern JavaScript features.",
                    },
                    {
                        id: 102,
                        title: "Setting Up Development Environment",
                        description: "Installing Node.js, npm, and creating your first React application using Create React App and Vite.",
                        duration: "20 min",
                        type: "videos",
                        isFree: true,
                        isEnrolled: true,
                        completed: true,
                        views: "10.2K",
                        difficulty: "beginner",
                        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop",
                    },
                    {
                        id: 103,
                        title: "Understanding JSX and Components",
                        description: "Deep dive into JSX syntax, component creation, and the virtual DOM concept.",
                        duration: "25 min",
                        type: "videos",
                        isFree: false,
                        isEnrolled: true,
                        completed: false,
                        views: "8.7K",
                        difficulty: "beginner",
                        thumbnail: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=225&fit=crop",
                    },
                    {
                        id: 104,
                        title: "Props and Component Communication",
                        description: "Learn how to pass data between components using props and best practices for component design.",
                        duration: "30 min",
                        type: "videos",
                        isFree: false,
                        isEnrolled: true,
                        completed: false,
                        views: "7.3K",
                        difficulty: "beginner",
                        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
                    },
                    {
                        id: 105,
                        title: "Knowledge Check: React Basics",
                        description: "Test your understanding of React fundamentals with interactive questions and coding challenges.",
                        duration: "10 min",
                        type: "quizzes",
                        isFree: false,
                        isEnrolled: true,
                        completed: false,
                        views: "5.1K",
                        difficulty: "beginner",
                    },
                ],
            },
            {
                id: 2,
                moduleNumber: 2,
                title: "State Management & Hooks",
                description: "Master React state management using hooks like useState, useEffect, and custom hooks for building interactive applications.",
                duration: "3h 15m",
                isEnrolled: true,
                lessons: [
                    {
                        id: 201,
                        title: "Introduction to React State",
                        description: "Understanding state vs props, when to use state, and the useState hook fundamentals.",
                        duration: "22 min",
                        type: "videos",
                        isFree: false,
                        isEnrolled: true,
                        completed: false,
                        views: "9.8K",
                        difficulty: "intermediate",
                        thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=225&fit=crop",
                    },
                    {
                        id: 202,
                        title: "useEffect Hook and Side Effects",
                        description: "Managing side effects, API calls, and cleanup functions with the useEffect hook.",
                        duration: "35 min",
                        type: "videos",
                        isFree: false,
                        isEnrolled: true,
                        completed: false,
                        views: "8.2K",
                        difficulty: "intermediate",
                        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop",
                    },
                    {
                        id: 203,
                        title: "Custom Hooks and Reusability",
                        description: "Creating custom hooks to share logic between components and improve code organization.",
                        duration: "28 min",
                        type: "videos",
                        isFree: false,
                        isEnrolled: true,
                        completed: false,
                        views: "6.9K",
                        difficulty: "intermediate",
                        thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=225&fit=crop",
                    },
                    {
                        id: 204,
                        title: "State Management Best Practices",
                        description: "Learn when to lift state up, state normalization, and avoiding common pitfalls.",
                        duration: "25 min",
                        type: "videos",
                        isFree: false,
                        isEnrolled: true,
                        completed: false,
                        views: "5.4K",
                        difficulty: "intermediate",
                        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop",
                    },
                    {
                        id: 205,
                        title: "Building a Todo App with Hooks",
                        description: "Hands-on project: Create a fully functional todo application using React hooks.",
                        duration: "45 min",
                        type: "assignments",
                        isFree: false,
                        isEnrolled: true,
                        completed: false,
                        views: "4.7K",
                        difficulty: "intermediate",
                    },
                ],
            },
            {
                id: 3,
                moduleNumber: 3,
                title: "Advanced React Patterns",
                description: "Explore advanced React patterns including Context API, Higher-Order Components, and performance optimization techniques.",
                duration: "2h 45m",
                isEnrolled: true,
                lessons: [
                    {
                        id: 301,
                        title: "Context API for Global State",
                        description: "Managing global application state using React Context API and useContext hook.",
                        duration: "30 min",
                        type: "videos",
                        isFree: false,
                        isEnrolled: true,
                        completed: false,
                        views: "7.1K",
                        difficulty: "advanced",
                        thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=225&fit=crop",
                    },
                    {
                        id: 302,
                        title: "Higher-Order Components (HOCs)",
                        description: "Understanding and implementing Higher-Order Components for code reuse and logic sharing.",
                        duration: "25 min",
                        type: "videos",
                        isFree: false,
                        isEnrolled: true,
                        completed: false,
                        views: "5.8K",
                        difficulty: "advanced",
                        thumbnail: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?w=400&h=225&fit=crop",
                    },
                    {
                        id: 303,
                        title: "React.memo and Performance Optimization",
                        description: "Optimizing React applications using React.memo, useMemo, and useCallback hooks.",
                        duration: "35 min",
                        type: "videos",
                        isFree: false,
                        isEnrolled: true,
                        completed: false,
                        views: "6.3K",
                        difficulty: "advanced",
                        thumbnail: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=225&fit=crop",
                    },
                    {
                        id: 304,
                        title: "Error Boundaries and Error Handling",
                        description: "Implementing error boundaries to gracefully handle errors in React applications.",
                        duration: "20 min",
                        type: "videos",
                        isFree: false,
                        isEnrolled: true,
                        completed: false,
                        views: "4.2K",
                        difficulty: "advanced",
                        thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop",
                    },
                    {
                        id: 305,
                        title: "Advanced Patterns Quiz",
                        description: "Test your knowledge of advanced React patterns and optimization techniques.",
                        duration: "15 min",
                        type: "quizzes",
                        isFree: false,
                        isEnrolled: true,
                        completed: false,
                        views: "3.9K",
                        difficulty: "advanced",
                    },
                ],
            },
            {
                id: 4,
                moduleNumber: 4,
                title: "React Router & Navigation",
                description: "Master client-side routing with React Router, including nested routes, protected routes, and navigation patterns.",
                duration: "2h 20m",
                isEnrolled: false,
                lessons: [
                    {
                        id: 401,
                        title: "Introduction to React Router",
                        description: "Setting up React Router and understanding client-side routing concepts.",
                        duration: "18 min",
                        type: "videos",
                        isFree: true,
                        isEnrolled: false,
                        completed: false,
                        views: "8.5K",
                        difficulty: "intermediate",
                        thumbnail: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=225&fit=crop",
                    },
                    {
                        id: 402,
                        title: "Dynamic Routes and Parameters",
                        description: "Creating dynamic routes with parameters and query strings for flexible navigation.",
                        duration: "25 min",
                        type: "videos",
                        isFree: false,
                        isEnrolled: false,
                        completed: false,
                        views: "6.7K",
                        difficulty: "intermediate",
                        thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=225&fit=crop",
                    },
                    {
                        id: 403,
                        title: "Nested Routes and Layouts",
                        description: "Implementing nested routing structures and shared layouts for complex applications.",
                        duration: "30 min",
                        type: "videos",
                        isFree: false,
                        isEnrolled: false,
                        completed: false,
                        views: "5.3K",
                        difficulty: "intermediate",
                        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
                    },
                    {
                        id: 404,
                        title: "Protected Routes and Authentication",
                        description: "Implementing route protection and authentication flows in React applications.",
                        duration: "27 min",
                        type: "videos",
                        isFree: false,
                        isEnrolled: false,
                        completed: false,
                        views: "4.8K",
                        difficulty: "advanced",
                        thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=225&fit=crop",
                    },
                    {
                        id: 405,
                        title: "Navigation Project",
                        description: "Build a multi-page application with complex routing and navigation patterns.",
                        duration: "40 min",
                        type: "assignments",
                        isFree: false,
                        isEnrolled: false,
                        completed: false,
                        views: "3.1K",
                        difficulty: "advanced",
                    },
                ],
            },
            {
                id: 5,
                moduleNumber: 5,
                title: "Testing & Deployment",
                description: "Learn testing strategies for React applications and deployment best practices for production environments.",
                duration: "1h 55m",
                isEnrolled: false,
                lessons: [
                    {
                        id: 501,
                        title: "Introduction to React Testing",
                        description: "Overview of testing strategies, tools, and best practices for React applications.",
                        duration: "15 min",
                        type: "videos",
                        isFree: true,
                        isEnrolled: false,
                        completed: false,
                        views: "5.9K",
                        difficulty: "intermediate",
                        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop",
                    },
                    {
                        id: 502,
                        title: "Unit Testing with Jest and React Testing Library",
                        description: "Writing comprehensive unit tests for React components using modern testing tools.",
                        duration: "35 min",
                        type: "videos",
                        isFree: false,
                        isEnrolled: false,
                        completed: false,
                        views: "4.2K",
                        difficulty: "intermediate",
                        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
                    },
                    {
                        id: 503,
                        title: "Integration Testing and E2E Testing",
                        description: "Implementing integration tests and end-to-end testing strategies for React apps.",
                        duration: "25 min",
                        type: "videos",
                        isFree: false,
                        isEnrolled: false,
                        completed: false,
                        views: "3.7K",
                        difficulty: "advanced",
                        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop",
                    },
                    {
                        id: 504,
                        title: "Deployment Strategies and CI/CD",
                        description: "Deploying React applications to various platforms and setting up continuous integration.",
                        duration: "30 min",
                        type: "videos",
                        isFree: false,
                        isEnrolled: false,
                        completed: false,
                        views: "4.5K",
                        difficulty: "advanced",
                        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop",
                    },
                    {
                        id: 505,
                        title: "Final Project Resources",
                        description: "Downloadable resources, cheat sheets, and project templates for your React journey.",
                        duration: "10 min",
                        type: "resources",
                        isFree: false,
                        isEnrolled: false,
                        completed: false,
                        views: "2.8K",
                        difficulty: "beginner",
                    },
                ],
            },
        ],
    };

    const handleModuleToggle = (moduleId) => {
        const newExpanded = new Set(expandedModules);
        if (newExpanded.has(moduleId)) {
            newExpanded.delete(moduleId);
        } else {
            newExpanded.add(moduleId);
        }
        setExpandedModules(newExpanded);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleFilterChange = (filterId) => {
        if (filterId === "all") {
            setActiveFilters(["all"]);
        } else {
            const newFilters = activeFilters.includes("all")
                ? [filterId]
                : activeFilters.includes(filterId)
                ? activeFilters.filter((f) => f !== filterId)
                : [...activeFilters.filter((f) => f !== "all"), filterId];

            setActiveFilters(newFilters.length === 0 ? ["all"] : newFilters);
        }
    };

    const handleQuickAction = (action) => {
        switch (action) {
            case "continue":
                // Find next incomplete lesson
                console.log("Continue learning from last position");
                break;
            case "restart":
                console.log("Restart course from beginning");
                break;
            case "download":
                console.log("Download course materials");
                break;
            default:
                break;
        }
    };

    // Remove mobile padding since no mobile progress sheet
    useEffect(() => {
        document.body.style.paddingBottom = "0px";
        return () => {
            document.body.style.paddingBottom = "0px";
        };
    }, []);

    return (
        <Layout>
            <div className="min-h-screen bg-background pb-20">
                <main className="">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        {/* Breadcrumb */}
                        <Breadcrumb />

                        {/* Quick Actions Bar */}
                        <div className="mb-8 p-4 bg-white rounded-xl shadow-sm border border-orange-200">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center space-x-4">
                                    <h3 className="font-heading font-semibold text-foreground">Quick Actions</h3>
                                    <div className="flex items-center space-x-2">
                                        <Button
                                            variant="default"
                                            size="sm"
                                            iconName="Play"
                                            iconPosition="left"
                                            onClick={() => handleQuickAction("continue")}
                                            className="bg-orange-500 hover:bg-orange-600 text-white"
                                        >
                                            Start Learning
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            iconName="Download"
                                            iconPosition="left"
                                            onClick={() => handleQuickAction("download")}
                                            className="border-orange-500 text-orange-500 hover:bg-orange-50"
                                        >
                                            Download Materials
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                    <Icon name="Target" size={16} className="text-orange-500" />
                                    <span>Beginner to Advanced Level</span>
                                </div>
                            </div>
                        </div>

                        {/* Search and Filters */}
                        <SearchAndFilters onSearch={handleSearch} onFilterChange={handleFilterChange} activeFilters={activeFilters} />

                        {/* Main Content - Full Width Layout */}
                        <div className="w-full">
                            {/* Expand/Collapse All */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center space-x-4">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        iconName="ChevronDown"
                                        iconPosition="left"
                                        onClick={() => setExpandedModules(new Set(courseData.modules.map((m) => m.id)))}
                                        className="border-orange-500 text-orange-500 hover:bg-orange-50"
                                    >
                                        Expand All
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        iconName="ChevronUp"
                                        iconPosition="left"
                                        onClick={() => setExpandedModules(new Set())}
                                        className="border-orange-500 text-orange-500 hover:bg-orange-50"
                                    >
                                        Collapse All
                                    </Button>
                                </div>

                                <div className="text-sm text-muted-foreground">{searchTerm && <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Results for "{searchTerm}"</span>}</div>
                            </div>

                            {/* Module Cards */}
                            <div className="space-y-6">
                                {courseData.modules.map((module) => (
                                    <ModuleCard
                                        key={module.id}
                                        module={module}
                                        isExpanded={expandedModules.has(module.id)}
                                        onToggle={() => handleModuleToggle(module.id)}
                                        searchTerm={searchTerm}
                                        activeFilters={activeFilters}
                                    />
                                ))}
                            </div>

                            {/* Course Completion CTA with Orange Theme */}
                            <div className="mt-12 p-8 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 rounded-2xl text-white relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/10"></div>
                                <div className="relative z-10 text-center">
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                                            <Icon name="Trophy" size={48} className="text-white" />
                                        </div>
                                    </div>
                                    <h3 className="text-3xl font-heading font-bold mb-3">Ready to Master React?</h3>
                                    <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
                                        Join thousands of students who have successfully completed this course and advanced their React development skills. Start your journey today!
                                    </p>
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                        <Button
                                            variant="default"
                                            size="lg"
                                            iconName="ShoppingCart"
                                            iconPosition="left"
                                            onClick={() => (window.location.href = "/course-enrollment-payment")}
                                            className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-3"
                                        >
                                            Enroll Now - ₹2,999
                                        </Button>
                                        <Link href="/course-details">
                                            <Button variant="outline" size="lg" iconName="ArrowLeft" iconPosition="left" className="border-white text-white hover:bg-white/10 px-8 py-3">
                                                Back to Course Details
                                            </Button>
                                        </Link>
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

export default CourseCurriculumBrowser;
