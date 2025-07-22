"use client";
import React, { useState, useEffect } from "react";
import CourseHero from "./components/CourseHero";
import CourseNavigation from "./components/CourseNavigation";
import CourseOverview from "./components/CourseOverview";
import CourseCurriculum from "./components/CourseCurriculum";
import CourseInstructors from "./components/CourseInstructors";
import CourseReviews from "./components/CourseReviews";
import CourseFAQ from "./components/CourseFAQ";
import PreviewModal from "./components/PreviewModal";
import { useNavigation } from "@/components/navigation";
import { Layout } from "@/app/layout/layout";

const CourseDetailsPage = () => {
    const { navigate } = useNavigation();
    const [activeSection, setActiveSection] = useState("overview");
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [selectedLesson, setSelectedLesson] = useState(null);

    // Mock course data
    const courseData = {
        title: "Complete Mathematics Mastery for Class 12 & JEE",
        subtitle: "Master calculus, algebra, and geometry with expert guidance and comprehensive practice materials",
        rating: 4.8,
        reviews: 2666,
        students: 15420,
        duration: "12 hours",
        price: 2999,
        originalPrice: 4999,
        discount: 40,
        tags: ["Mathematics", "JEE Preparation", "Class 12", "Calculus", "Algebra"],
        thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
        previewDuration: "3:45",
        instructor: {
            name: "Dr. Rajesh Kumar",
            title: "Mathematics Professor & JEE Expert",
            avatar: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?w=400&h=400&fit=crop",
        },
        description: `This comprehensive mathematics course is designed specifically for Class 12 students and JEE aspirants. 
    You'll master fundamental concepts in calculus, algebra, coordinate geometry, and trigonometry through structured lessons, 
    practical examples, and extensive problem-solving sessions. Our expert instructors break down complex mathematical concepts 
    into digestible segments, ensuring you build a strong foundation for both board exams and competitive entrance tests.`,
        learningOutcomes: [
            "Master differential and integral calculus concepts",
            "Solve complex algebraic equations and inequalities",
            "Understand coordinate geometry and analytical methods",
            "Apply trigonometric identities and formulas",
            "Develop problem-solving strategies for JEE-level questions",
            "Build confidence in mathematical reasoning and proofs",
            "Practice with 500+ solved examples and exercises",
            "Learn time management techniques for competitive exams",
        ],
        prerequisites: ["Basic understanding of Class 11 mathematics", "Familiarity with algebraic operations", "Access to calculator and graphing tools", "Commitment to practice regularly"],
        targetAudience: [
            "Class 12 students preparing for board examinations",
            "JEE Main and Advanced aspirants",
            "Students seeking to strengthen mathematical foundations",
            "Anyone interested in advanced mathematics concepts",
        ],
        features: [
            {
                icon: "Clock",
                title: "12 Hours Content",
                description: "Comprehensive video lessons",
            },
            {
                icon: "Download",
                title: "Downloadable Resources",
                description: "PDFs, notes, and worksheets",
            },
            {
                icon: "Award",
                title: "Certificate",
                description: "Upon course completion",
            },
            {
                icon: "Smartphone",
                title: "Mobile Access",
                description: "Learn on any device",
            },
            {
                icon: "Users",
                title: "Community",
                description: "Student discussion forum",
            },
            {
                icon: "LifeBuoy",
                title: "Support",
                description: "24/7 instructor support",
            },
        ],
    };

    const curriculumData = [
        {
            title: "Differential Calculus Fundamentals",
            lessons: [
                {
                    title: "Introduction to Limits and Continuity",
                    type: "video",
                    duration: 45,
                    isFree: true,
                    lessonNumber: 1,
                    totalLessons: 24,
                },
                {
                    title: "Derivative Rules and Techniques",
                    type: "video",
                    duration: 38,
                    isFree: false,
                },
                {
                    title: "Applications of Derivatives",
                    type: "video",
                    duration: 42,
                    isFree: false,
                },
                {
                    title: "Practice Quiz: Differentiation",
                    type: "quiz",
                    duration: 15,
                    isFree: false,
                },
            ],
        },
        {
            title: "Integral Calculus Mastery",
            lessons: [
                {
                    title: "Indefinite Integration Methods",
                    type: "video",
                    duration: 40,
                    isFree: true,
                    lessonNumber: 5,
                    totalLessons: 24,
                },
                {
                    title: "Definite Integration and Applications",
                    type: "video",
                    duration: 35,
                    isFree: false,
                },
                {
                    title: "Area Under Curves",
                    type: "video",
                    duration: 30,
                    isFree: false,
                },
            ],
        },
        {
            title: "Coordinate Geometry",
            lessons: [
                {
                    title: "Straight Lines and Circles",
                    type: "video",
                    duration: 33,
                    isFree: false,
                },
                {
                    title: "Conic Sections: Parabola and Ellipse",
                    type: "video",
                    duration: 41,
                    isFree: false,
                },
                {
                    title: "Hyperbola and Applications",
                    type: "video",
                    duration: 37,
                    isFree: false,
                },
            ],
        },
    ];

    const instructorsData = [
        {
            name: "Dr. Rajesh Kumar",
            title: "Lead Mathematics Instructor",
            avatar: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?w=400&h=400&fit=crop",
            bio: "PhD in Mathematics from IIT Delhi with 15+ years of teaching experience. Specialized in JEE preparation and advanced calculus.",
            experience: 15,
            students: 25000,
            rating: 4.9,
            reviews: 1250,
            achievements: ["Published 20+ research papers in international journals", "Former IIT Delhi faculty member", "JEE Advanced topper mentor for 8 consecutive years"],
            social: {
                linkedin: "https://linkedin.com/in/rajeshkumar",
                twitter: "https://twitter.com/rajeshkumar",
                website: "https://rajeshkumar.edu",
            },
        },
        {
            name: "Prof. Priya Sharma",
            title: "Algebra & Geometry Expert",
            avatar: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?w=400&h=400&fit=crop",
            bio: "M.Tech from IIT Bombay, specializing in algebraic structures and geometric applications. Expert in competitive exam preparation.",
            experience: 12,
            students: 18500,
            rating: 4.8,
            reviews: 890,
            achievements: ["Gold medalist in Mathematics Olympiad", "Author of 'Advanced Algebra for JEE'", "Trained 500+ JEE toppers"],
            social: {
                linkedin: "https://linkedin.com/in/priyasharma",
                website: "https://priyasharma.edu",
            },
        },
        {
            name: "Dr. Amit Verma",
            title: "Calculus & Analysis Specialist",
            avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?w=400&h=400&fit=crop",
            bio: "PhD in Applied Mathematics with expertise in real analysis and differential equations. Passionate about making calculus accessible.",
            experience: 10,
            students: 12300,
            rating: 4.7,
            reviews: 654,
            achievements: ["Best Teacher Award 2022", "Developed innovative calculus teaching methods", "Featured in Mathematics Today magazine"],
            social: {
                linkedin: "https://linkedin.com/in/amitverma",
                twitter: "https://twitter.com/amitverma",
            },
        },
    ];

    const reviewsData = [
        {
            name: "Arjun Patel",
            title: "JEE Advanced Qualifier",
            avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=400&h=400&fit=crop",
            rating: 5,
            date: "2024-07-10",
            comment: `This course completely transformed my understanding of mathematics. Dr. Kumar's teaching style is exceptional - he breaks down complex calculus concepts into simple, digestible parts. The practice problems are challenging yet solvable, and the step-by-step solutions helped me identify my weak areas. I scored 95% in my Class 12 boards and cleared JEE Advanced with a good rank!`,
            helpful: 45,
        },
        {
            name: "Sneha Gupta",
            title: "Class 12 Student",
            avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=400&h=400&fit=crop",
            rating: 5,
            date: "2024-07-08",
            comment: `I was struggling with coordinate geometry until I found this course. Prof. Sharma's explanations are crystal clear, and the visual aids make everything so much easier to understand. The downloadable notes are comprehensive and perfect for revision. Highly recommend this to anyone preparing for boards or competitive exams.`,
            helpful: 32,
        },
        {
            name: "Rohit Singh",
            title: "Engineering Student",
            avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=400&h=400&fit=crop",
            rating: 4,
            date: "2024-07-05",
            comment: `Great course with excellent content quality. The instructors are knowledgeable and the curriculum is well-structured. I particularly enjoyed the integration techniques section. The only minor issue is that some videos could be a bit shorter, but overall it's fantastic value for money.`,
            helpful: 28,
        },
        {
            name: "Kavya Reddy",
            title: "JEE Main Qualifier",
            avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=400&h=400&fit=crop",
            rating: 5,
            date: "2024-07-03",
            comment: `This course is a game-changer! The problem-solving strategies taught here are invaluable. I went from scoring 60% in mathematics to 92% in just 3 months. The instructors are always available for doubt clearing, and the community forum is very active and helpful.`,
            helpful: 51,
        },
        {
            name: "Vikash Kumar",
            title: "Repeat JEE Aspirant",
            avatar: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?w=400&h=400&fit=crop",
            rating: 5,
            date: "2024-06-30",
            comment: `As a repeat aspirant, I needed a fresh approach to mathematics. This course provided exactly that. The teaching methodology is different from traditional coaching classes - more focused on conceptual understanding rather than rote learning. The practice tests are similar to actual JEE level questions.`,
            helpful: 39,
        },
        {
            name: "Ananya Joshi",
            title: "CBSE Board Student",
            avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?w=400&h=400&fit=crop",
            rating: 4,
            date: "2024-06-28",
            comment: `Very comprehensive course covering all important topics. The explanations are detailed and easy to follow. I especially liked the real-world applications of mathematical concepts. The course helped me build confidence in solving complex problems. Would definitely recommend to my friends.`,
            helpful: 24,
        },
    ];

    const faqData = [
        {
            question: "Is this course suitable for complete beginners?",
            answer: "This course is designed for students who have completed Class 11 mathematics. While we cover fundamentals, having a basic understanding of algebra and trigonometry is recommended. If you're a complete beginner, we suggest starting with our Class 11 foundation course first.",
        },
        {
            question: "How long do I have access to the course content?",
            answer: "You get lifetime access to all course materials, including videos, notes, and practice problems. You can learn at your own pace and revisit any topic whenever needed. All future updates to the course content are included at no extra cost.",
        },
        {
            question: "Are there any live sessions or is it all pre-recorded?",
            answer: "The main course content consists of high-quality pre-recorded videos that you can watch anytime. Additionally, we conduct monthly live doubt-clearing sessions where you can interact directly with instructors and get your questions answered in real-time.",
        },
        {
            question: "What if I'm not satisfied with the course?",
            answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with the course content within the first 30 days of purchase, you can request a full refund, no questions asked. We're confident you'll love the course, but we want you to feel secure in your investment.",
        },
        {
            question: "Do you provide study materials and practice problems?",
            answer: "Yes! The course includes comprehensive study materials: downloadable PDF notes, formula sheets, practice worksheets with 500+ problems, previous year JEE questions, and mock tests. All materials are regularly updated to reflect the latest exam patterns.",
        },
        {
            question: "Can I get help if I'm stuck on a problem?",
            answer: "Absolutely! You have access to our student community forum where you can post questions and get help from instructors and fellow students. We also provide 24/7 email support, and our instructors typically respond within 24 hours during weekdays.",
        },
        {
            question: "Is there a mobile app to access the course?",
            answer: "Yes, you can access the course on any device through our mobile-responsive website. We also have dedicated mobile apps for iOS and Android that allow you to download videos for offline viewing, perfect for studying on the go.",
        },
        {
            question: "What certificate will I receive upon completion?",
            answer: "Upon successfully completing all modules and passing the final assessment, you'll receive a verified certificate of completion. This certificate includes your name, course details, completion date, and can be shared on LinkedIn or included in your resume.",
        },
    ];

    // Handle section changes based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["overview", "curriculum", "instructors", "reviews", "faq"];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleEnrollClick = () => {
        navigate("/course-enrollment-payment");
    };

    const handlePreviewClick = (lesson = null) => {
        if (lesson) {
            setSelectedLesson(lesson);
        } else {
            setSelectedLesson({
                title: "Course Introduction",
                duration: 3,
                lessonNumber: 1,
                totalLessons: 24,
            });
        }
        setIsPreviewOpen(true);
    };

    const handleClosePreview = () => {
        setIsPreviewOpen(false);
        setSelectedLesson(null);
    };

    return (
        <Layout>
            {/* Main Content */}
            <main className="">
                <CourseHero course={courseData} onEnrollClick={handleEnrollClick} onPreviewClick={handlePreviewClick} />

                <CourseNavigation activeSection={activeSection} onSectionChange={setActiveSection} />

                <CourseOverview course={courseData} />

                <CourseCurriculum curriculum={curriculumData} onPreviewClick={handlePreviewClick} />

                <CourseInstructors instructors={instructorsData} />

                <CourseReviews reviews={reviewsData} overallRating={courseData.rating} totalReviews={courseData.reviews} />

                <CourseFAQ faqs={faqData} />
            </main>

            {/* Preview Modal */}
            <PreviewModal isOpen={isPreviewOpen} onClose={handleClosePreview} lesson={selectedLesson} />
        </Layout>
    );
};

export default CourseDetailsPage;
