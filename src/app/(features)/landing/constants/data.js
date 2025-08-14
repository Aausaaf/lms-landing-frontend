import { ShieldCheck, Zap, Clock, HeartHandshake, MessageCircle, Mail, Phone, GraduationCap, Wallet, BookOpen, Target, Landmark, Frown } from "lucide-react";

// Trust Bar Data - Real-time social proof
export const trustBarData = {
    studentsOnline: 2847,
    recentEnrollment: {
        name: "Rahul K.",
        course: "GATE 2025",
    },
    passRate: 85,
};

// Hero Section Data - Main value proposition with carousel
export const heroData = {
    title: "Master Your Dreams with Expert Guidance",
    subtitle: "Join 50,000+ students who achieved exam success at 70% less cost than traditional coaching institutes",
    buttons: {
        primary: "Browse Courses Now",
        secondary: "Start Free Trial",
    },
    trustIndicators: ["Lifetime Access", "24/7 Doubt Support", "Money Back Guarantee"],
    stats: {
        passRate: "85%",
        students: "50K+",
    },
    // Carousel slides with high-quality educational images
    carousel: [
        {
            image: "https://images.unsplash.com/photo-1579469856126-4b0713c8300e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Students collaborating in modern classroom",
            title: "Interactive Learning Experience",
            description: "Engage with peers and instructors in our collaborative learning environment",
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1683887034007-847ffd32f306?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Student studying with laptop and books",
            title: "Flexible Study Schedule",
            description: "Learn at your own pace with 24/7 access to course materials",
        },
        {
            image: "https://images.unsplash.com/photo-1589395937772-f67057e233c1?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Online video conference learning session",
            title: "Live Expert Sessions",
            description: "Join live classes with industry experts and get real-time doubt resolution",
        },
        {
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
            alt: "Successful graduate celebrating achievement",
            title: "Proven Success Results",
            description: "Join thousands of successful students who achieved their career goals",
        },
    ],
};

// Problems Data - Pain points and solutions
export const problemsData = {
    title: "Struggling with Traditional Coaching?",
    subtitle: "We understand the challenges students face with expensive coaching institutes, limited access to expert instructors, and fear of exam failure.",
    problems: [
        {
            icon: Wallet, // Represents high costs & fees
            title: "Expensive Coaching",
            description: "Traditional institutes charge ₹2,00,000+ for competitive exam preparation",
            stat: "₹2,00,000+",
            color: "error",
        },
        {
            icon: Clock, // Symbolizes time constraints & fixed schedules
            title: "Limited Access",
            description: "Fixed schedules and location constraints limit learning flexibility",
            stat: "60% Miss Classes",
            color: "warning",
        },
        {
            icon: Frown, // Matches dissatisfaction & lack of support
            title: "Lack of Support",
            description: "No personalized attention or doubt resolution for individual students",
            stat: "40% Fail",
            color: "error",
        },
    ],
    calculator: {
        title: "Calculate Your Savings",
        traditionalCost: 200000,
        ourCost: 60000,
        savings: 140000,
        savingsPercent: 70,
    },
};

// Categories Data - Course categories
export const categoriesData = {
    title: "Choose Your Success Path",
    subtitle: "Expert-designed courses for every competitive exam and academic level",
    categories: [
        {
            icon: BookOpen, // Represents academic school courses
            title: "Class 10-12",
            description: "CBSE, ICSE & State Boards",
            enrolled: "12,450+",
            color: "primary",
        },
        {
            icon: Target, // Symbolizes focused competitive exam prep
            title: "GATE",
            description: "All Engineering Branches",
            enrolled: "18,750+",
            color: "accent",
        },
        {
            icon: Landmark, // Matches government & civil services
            title: "IAS",
            description: "Civil Services Preparation",
            enrolled: "9,320+",
            color: "secondary",
        },
        {
            icon: Zap, // Represents speed, power, and technical exams
            title: "ESE",
            description: "Engineering Services Exam",
            enrolled: "6,890+",
            color: "warning",
        },
    ],
};

// Featured Courses Data - Top performing courses
export const featuredCoursesData = {
    title: "Top Featured Courses",
    subtitle: "Our most popular courses with highest success rates and student satisfaction",
    courses: [
        {
            id: 1,
            title: "GATE 2025 Complete Course",
            description: "Comprehensive preparation for all engineering branches with live classes and doubt support",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2940&auto=format&fit=crop",
            badge: "Bestseller",
            rating: 4.8,
            instructor: {
                name: "Dr. Rajesh Kumar",
                experience: "15+ years experience",
                image: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            stats: {
                hours: "120+",
                students: "5,240",
                successRate: "92%",
            },
            pricing: {
                current: 12999,
                original: 24999,
                discount: "48% OFF",
            },
        },
        {
            id: 2,
            title: "IAS Foundation 2025",
            description: "Complete UPSC preparation with current affairs, mock tests, and essay writing",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2940&auto=format&fit=crop",
            badge: "New Launch",
            rating: 4.9,
            instructor: {
                name: "Prof. Anita Sharma",
                experience: "12+ years experience",
                image: "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            },
            stats: {
                hours: "200+",
                students: "3,180",
                successRate: "78%",
            },
            pricing: {
                current: 18999,
                original: 35999,
                discount: "47% OFF",
            },
        },
        {
            id: 3,
            title: "Class 12 Physics Mastery",
            description: "Complete CBSE Physics with JEE/NEET preparation and practical sessions",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2940&auto=format&fit=crop",
            badge: "Popular",
            rating: 4.7,
            instructor: {
                name: "Dr. Vikram Singh",
                experience: "18+ years experience",
                image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            stats: {
                hours: "80+",
                students: "8,450",
                successRate: "95%",
            },
            pricing: {
                current: 8999,
                original: 15999,
                discount: "44% OFF",
            },
        },
    ],
};

// Why Choose Us Data - Value propositions
export const whyChooseUsData = {
    title: "Why Choose EduPrime?",
    subtitle: "We provide everything you need to succeed in your competitive exams",
    features: [
        {
            icon: GraduationCap, // Represents education & expert instructors
            title: "Expert Instructors",
            description: "Learn from IIT/IIM alumni and industry experts with 15+ years of teaching experience",
            stat: "200+ Expert Faculty",
            color: "primary",
        },
        {
            icon: Clock, // Symbolizes lifetime access
            title: "Lifetime Access",
            description: "Once enrolled, access your courses forever with regular content updates and new additions",
            stat: "No Time Limits",
            color: "accent",
        },
        {
            icon: MessageCircle, // Matches 24/7 doubt support
            title: "24/7 Doubt Support",
            description: "Get your doubts resolved instantly through live chat, video calls, and discussion forums",
            stat: "< 2 Min Response",
            color: "secondary",
        },
        {
            icon: Wallet, // Represents affordability & payments
            title: "Affordable Pricing",
            description: "Quality education at 70% less cost than traditional coaching institutes with EMI options",
            stat: "Starting ₹999/month",
            color: "warning",
        },
    ],
    additionalFeatures: [
        {
            title: "Performance Analytics",
            description: "Detailed performance tracking with AI-powered recommendations for improvement",
            color: "primary",
        },
        {
            title: "Mobile Learning",
            description: "Learn on-the-go with our mobile app supporting offline downloads",
            color: "accent",
        },
        {
            title: "Study Materials",
            description: "Comprehensive notes, practice questions, and previous year papers included",
            color: "secondary",
        },
    ],
};

// Instructors Data - Expert profiles
export const instructorsData = {
    title: "Meet Our Expert Instructors",
    subtitle: "Learn from the best minds in education with proven track records of student success",
    instructors: [
        {
            id: 1,
            name: "Dr. Rajesh Kumar",
            specialization: "GATE Expert - Mechanical Engineering",
            education: "IIT Delhi Alumni • 15+ Years Experience",
            image: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            stats: {
                students: "5,240",
                successRate: "92%",
                rating: "4.8",
            },
            expertise: ["Thermodynamics & Heat Transfer", "Machine Design & Manufacturing"],
        },
        {
            id: 2,
            name: "Prof. Anita Sharma",
            specialization: "IAS Expert - General Studies",
            education: "JNU Alumni • 12+ Years Experience",
            image: "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            stats: {
                students: "3,180",
                successRate: "78%",
                rating: "4.9",
            },
            expertise: ["Indian Polity & Governance", "Current Affairs & Essay Writing"],
        },
        {
            id: 3,
            name: "Dr. Vikram Singh",
            specialization: "Physics Expert - Class 12 & JEE",
            education: "IIT Bombay Alumni • 18+ Years Experience",
            image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            stats: {
                students: "8,450",
                successRate: "95%",
                rating: "4.7",
            },
            expertise: ["Mechanics & Electromagnetism", "Modern Physics & Optics"],
        },
    ],
};

// Success Stories Data - Student achievements
export const successStoriesData = {
    title: "Success Stories",
    subtitle: "Real students, real results. See how EduPrime helped them achieve their dreams",
    stories: [
        {
            id: 1,
            name: "Rahul Sharma",
            achievement: "GATE 2024 - AIR 47",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop",
            category: "Mechanical",
            testimonial: "EduPrime's structured approach and Dr. Rajesh's teaching methodology helped me crack GATE with AIR 47. The doubt support was exceptional!",
            course: "GATE Mechanical 2024",
            rating: 5,
        },
        {
            id: 2,
            name: "Priya Patel",
            achievement: "IAS 2024 - AIR 23",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "IAS",
            testimonial: "Prof. Anita's current affairs sessions and essay writing guidance were game-changers. Achieved my dream rank in first attempt!",
            course: "IAS Foundation 2024",
            rating: 5,
        },
        {
            id: 3,
            name: "Amit Kumar",
            achievement: "JEE Main 2024 - 99.2%ile",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
            category: "JEE",
            testimonial: "Dr. Vikram's physics concepts were crystal clear. Improved from 60%ile to 99.2%ile in just 6 months. Highly recommended!",
            course: "Class 12 Physics",
            rating: 5,
        },
    ],
};

// Testimonials Data - Customer feedback
export const testimonialsData = {
    title: "What Our Students Say",
    subtitle: "Hear directly from students who transformed their careers with EduPrime",
    testimonials: [
        {
            id: 1,
            name: "Arjun Mehta",
            position: "Software Engineer at Google",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop",
            testimonial: "EduPrime's GATE CS course was exceptional. The structured curriculum and expert guidance helped me secure AIR 45 and land my dream job at Google.",
            achievement: "GATE CS 2024 - AIR 45",
            rating: 5,
        },
        {
            id: 2,
            name: "Kavya Nair",
            position: "IAS Officer, Kerala Cadre",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            testimonial: "The comprehensive study material and regular mock tests were game-changers. Prof. Anita's guidance made complex topics simple to understand.",
            achievement: "IAS 2024 - AIR 18",
            rating: 5,
        },
        {
            id: 3,
            name: "Rohit Sharma",
            position: "Medical Student, AIIMS",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
            testimonial: "Dr. Vikram's physics classes were incredible. His teaching methodology helped me score 98% in boards and crack NEET with ease.",
            achievement: "NEET 2024 - AIR 234",
            rating: 5,
        },
    ],
};

// FAQ Data - Common questions and answers
export const faqData = {
    title: "Frequently Asked Questions",
    subtitle: "Get answers to common questions about our courses and platform",
    faqs: [
        {
            id: 1,
            question: "How effective is online learning compared to traditional coaching?",
            answer: "Our online learning platform is designed to be more effective than traditional coaching. With personalized learning paths, 24/7 doubt support, unlimited access to recorded lectures, and interactive assessments, students often perform better than in traditional classroom settings. Our 85% success rate speaks for itself.",
        },
        {
            id: 2,
            question: "What if I have doubts during my preparation?",
            answer: "We provide 24/7 doubt support through multiple channels - live chat, video calls, discussion forums, and direct messaging with instructors. Our average response time is under 2 minutes, and complex doubts are resolved through one-on-one video sessions with subject experts.",
        },
        {
            id: 3,
            question: "Are the instructors qualified and experienced?",
            answer: "All our instructors are highly qualified with degrees from premier institutions like IIT, IIM, and top universities. They have 10+ years of teaching experience and proven track records of student success. Each instructor undergoes rigorous selection and training processes.",
        },
        {
            id: 4,
            question: "What is the refund policy if I'm not satisfied?",
            answer: "We offer a 30-day money-back guarantee. If you're not satisfied with the course quality or teaching methodology within the first 30 days, we'll provide a full refund, no questions asked. Your satisfaction is our priority.",
        },
        {
            id: 5,
            question: "Can I access courses on mobile devices?",
            answer: "Yes! Our platform is fully mobile-optimized with dedicated Android and iOS apps. You can download lectures for offline viewing, take tests, ask doubts, and track progress on any device. Learn anytime, anywhere at your convenience.",
        },
        {
            id: 6,
            question: "How long do I have access to the courses?",
            answer: "Once you enroll, you get lifetime access to all course materials, including future updates and additions. There are no time restrictions or expiry dates. You can revisit concepts, retake tests, and continue learning at your own pace forever.",
        },
    ],
};

// Contact Data - Support channels
export const contactData = {
    title: "Need Help? We're Here for You",
    subtitle: "Our support team is available 24/7 to help you with any questions or concerns",

    methods: [
        {
            type: "Live Chat",
            description: "Get instant help from our support team",
            stat: "Average response: 2 minutes",
            icon: MessageCircle, // Chat bubble for live support
            color: "primary",
            action: "Start Chat",
        },
        {
            type: "Email Support",
            description: "Send us detailed queries via email",
            stat: "support@eduprime.com",
            icon: Mail, // Envelope for email
            color: "accent",
            action: "Send Email",
        },
        {
            type: "Phone Support",
            description: "Speak directly with our experts",
            stat: "+91-9876543210",
            icon: Phone, // Telephone icon
            color: "secondary",
            action: "Call Now",
        },
    ],
};

// Trust Badges Data - Credibility indicators
export const trustBadgesData = {
    title: "Trusted by 50,000+ Students Nationwide",
    badges: [
        {
            icon: ShieldCheck, // Matches "Students Enrolled" as a shield of trust
            value: "50,000+",
            label: "Students Enrolled",
            color: "primary",
        },
        {
            icon: Zap, // Represents speed, energy → "Exam Pass Rate"
            value: "85%",
            label: "Exam Pass Rate",
            color: "accent",
        },
        {
            icon: Clock, // Matches uptime / reliability
            value: "99.9%",
            label: "Platform Uptime",
            color: "secondary",
        },
        {
            icon: HeartHandshake, // Represents satisfaction, care, relationship
            value: "4.8/5",
            label: "Student Satisfaction",
            color: "warning",
        },
    ],
    securityFeatures: ["SSL Secured", "Payment Protected", "Money Back Guarantee"],
};
