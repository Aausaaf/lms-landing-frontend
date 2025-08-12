// Lecture details mock data
export const lectureDetails = {
    "lecture-1": {
        title: "Equivalence relations and their properties",
        summary: "Dive deep into the fascinating world of quantum mechanics and discover the fundamental principles that govern the behavior of matter and energy at the smallest scales.",
        description:
            "In this video, we break down the properties of equivalence relations in a clear and engaging way! You'll learn how to understand them mathematically, with step-by-step explanations and examples that make both the theory and applications crystal clear.",
        videoUrl: "/placeholder.svg?height=400&width=800",
        duration: "12:45",
        transcript: `Welcome to this lesson on equivalence relations and their properties.

An equivalence relation is a binary relation that is reflexive, symmetric, and transitive.

Let's start with the definition of reflexive property...

For a relation to be reflexive, every element must be related to itself.

Now, let's examine the symmetric property...

If element a is related to element b, then b must also be related to a.

Finally, the transitive property states...

If a is related to b, and b is related to c, then a must be related to c.

Let's look at some examples to make this clearer...`,
        instructors: [
            {
                name: "Kushagra Thakral",
                role: "Created by Kushagra Thakral",
                avatar: "/placeholder.svg?height=40&width=40",
                bio: "Mathematics educator specializing in algebra and discrete mathematics",
                expertise: ["Relations", "Functions", "Set Theory"],
            },
        ],
        attachments: [
            {
                title: "Lesson Workbook",
                description: "Comprehensive PDF guide with exercises and examples",
                file: "workbook.pdf",
            },
            {
                title: "Code Examples",
                description: "Starter code and completed projects",
                file: "code-examples.zip",
            },
            {
                title: "Resource Links",
                description: "Curated list of helpful development resources",
                file: "resources.txt",
            },
        ],
        resources: [
            { name: "Lecture 1 Notes.pdf", size: "1.2 MB", type: "pdf", description: "Detailed notes for this lecture" },
            { name: "Practice Problems.pdf", size: "800 KB", type: "pdf", description: "Additional practice exercises" },
            {
                name: "Visual Examples.pdf",
                size: "1.5 MB",
                type: "pdf",
                description: "Graphical representations and examples",
            },
        ],
    },
};

// Unit lecture data
export const lectureData = {
    "lesson-1": {
        title: "Types of relations",
        description: "Learn about different types of relations including reflexive, symmetric, and transitive relations with practical examples.",
        duration: "45 minutes",
        unit: {
            title: "Relations and functions",
            masteryPoints: 800,
            duration: "2.5 hours",
            difficulty: "Medium",
            progress: 25,
            totalLesson: 10,
        },
        lessonNumber: 1,
        progress: 25,
        totalLectures: 4,
        completedLectures: 1,
        lectures: [
            {
                id: "lecture-1",
                title: "Equivalence relations and their properties",
                duration: "12:45",
                status: "completed",
                type: "video",
            },
            {
                id: "lecture-2",
                title: "Equivalence relations - Non math example",
                duration: "8:30",
                status: "current",
                type: "video",
            },
            {
                id: "lecture-3",
                title: "Equivalence relations in geometry",
                duration: "15:20",
                status: "not-started",
                type: "video",
            },
            {
                id: "lecture-4",
                title: "Empty and Universal relations",
                duration: "10:15",
                status: "not-started",
                type: "video",
            },
        ],
    },
};

// Lesson data
export const lessonData = {
    "lesson-1": {
        title: "Types of relations",
        description: "Learn about different types of relations including reflexive, symmetric, and transitive relations with practical examples.",
        duration: "45 minutes",
        difficulty: "Medium",
        status: "in-progress",
        progress: 60,
        overview:
            "This comprehensive lesson covers the fundamental types of relations in mathematics. Students will explore reflexive, symmetric, and transitive relations through theoretical concepts and practical examples, building a strong foundation for understanding equivalence relations.",
        learningOutcomes: [
            "Define and identify reflexive relations with examples",
            "Understand symmetric relation properties and applications",
            "Apply transitive relation concepts to solve problems",
            "Recognize and work with equivalence relations",
            "Solve complex problems involving multiple relation types",
        ],
        prerequisites: ["Basic set theory concepts", "Understanding of ordered pairs", "Elementary logic and reasoning"],
        keyTopics: [
            "Reflexive relations and properties",
            "Symmetric relations in mathematics",
            "Transitive relations and chains",
            "Equivalence relations",
            "Relation composition",
            "Real-world applications",
        ],
        instructors: [
            {
                name: "Dr. Kushagra Thakral",
                role: "Lesson Instructor",
                avatar: "/placeholder.svg?height=60&width=60",
                bio: "Expert in discrete mathematics and relation theory with extensive teaching experience in making complex concepts accessible to students.",
                expertise: ["Discrete Mathematics", "Relation Theory", "Set Theory", "Mathematical Logic"],
                experience: "12+ years in mathematics education",
                rating: 4.9,
                specialization: "Relations and Functions",
            },
        ],
        attachments: [
            {
                title: "Lesson Workbook",
                description: "Comprehensive PDF guide with exercises and examples",
                file: "workbook.pdf",
            },
            {
                title: "Code Examples",
                description: "Starter code and completed projects",
                file: "code-examples.zip",
            },
            {
                title: "Resource Links",
                description: "Curated list of helpful development resources",
                file: "resources.txt",
            },
        ],
        resources: [
            {
                title: "Interactive Relation Visualizer",
                description: "Visual tool to understand different types of relations with interactive examples",
                url: "https://www.geogebra.org/m/relations-visualizer",
                type: "Interactive Tool",
            },
            {
                title: "Khan Academy - Relation Types",
                description: "Additional video explanations and practice problems on relation types",
                url: "https://www.khanacademy.org/math/discrete-math/relations",
                type: "Video Course",
            },
            {
                title: "MIT Discrete Math Notes",
                description: "Advanced reading material on relations from MIT OpenCourseWare",
                url: "https://ocw.mit.edu/courses/discrete-mathematics/",
                type: "Academic Resource",
            },
        ],
    },
};

// Unit data
export const unitData = {
    "d94e6ae8-8084-45af-8af2-c835d39e5194": {
        title: "Relations and functions",
        description:
            "This comprehensive unit covers the fundamental concepts of relations and functions, including types of relations, function properties, and their real-world applications in mathematics.",
        masteryPoints: 800,
        duration: "2.5 hours",
        difficulty: "Medium",
        progress: 25,
        about: {
            description: `
        <p>This comprehensive bootcamp takes you from absolute beginner to professional web developer. 
        You'll learn HTML, CSS, JavaScript, React, Node.js, and more through hands-on projects and real-world examples.</p>
        <p>Our step-by-step approach ensures you build a solid foundation before moving on to more advanced topics. 
        By the end of this module, you'll have the skills to build complete web applications and the confidence to apply for web development positions.</p>
        <p>The module includes practical projects, coding exercises, and real-world scenarios that prepare you for the modern web development landscape.</p>
      `,
            learningOutcomes: [
                "Build responsive websites with HTML, CSS, and JavaScript",
                "Create dynamic web applications with React",
                "Develop backend APIs with Node.js and Express",
                "Deploy full-stack applications to production",
                "Implement authentication and database integration",
                "Master modern development tools and workflows",
            ],
            attachments: [
                {
                    title: "Module Workbook",
                    description: "Comprehensive PDF guide with exercises and examples",
                    file: "workbook.pdf",
                },
                {
                    title: "Code Examples",
                    description: "Starter code and completed projects",
                    file: "code-examples.zip",
                },
                {
                    title: "Resource Links",
                    description: "Curated list of helpful development resources",
                    file: "resources.txt",
                },
            ],
            prerequisites: ["Basic computer skills", "No prior programming experience required"],
            resources: [
                {
                    title: "Khan Academy - Relations and Functions",
                    description: "Interactive exercises and video explanations on relations and functions",
                    url: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:functions",
                    type: "Interactive Course",
                },
                {
                    title: "Wolfram MathWorld - Relation",
                    description: "Comprehensive mathematical reference for relation theory",
                    url: "https://mathworld.wolfram.com/Relation.html",
                    type: "Reference",
                },
                {
                    title: "MIT OpenCourseWare - Discrete Mathematics",
                    description: "Advanced topics in discrete mathematics including relations",
                    url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/",
                    type: "Course Material",
                },
                {
                    title: "GeoGebra - Function Explorer",
                    description: "Interactive tool to visualize and explore functions",
                    url: "https://www.geogebra.org/graphing",
                    type: "Interactive Tool",
                },
            ],
            instructors: [
                {
                    name: "Dr. Kushagra Thakral",
                    role: "Unit Instructor",
                    avatar: "/placeholder.svg?height=60&width=60",
                    bio: "Specialized in algebra and discrete mathematics with focus on relations and functions",
                    expertise: ["Algebra", "Discrete Mathematics", "Set Theory"],
                    experience: "15+ years teaching experience",
                    rating: 4.9,
                },
            ],
        },
        instructors: [
            {
                name: "Dr. Kushagra Thakral",
                role: "Unit Instructor",
                avatar: "/placeholder.svg?height=60&width=60",
                bio: "Specialized in algebra and discrete mathematics with focus on relations and functions",
                expertise: ["Algebra", "Discrete Mathematics", "Set Theory"],
                experience: "15+ years teaching experience",
                rating: 4.9,
            },
        ],
        lessons: [
            {
                id: "lesson-1",
                title: "Types of relations",
                description: "Learn about different types of relations including reflexive, symmetric, and transitive relations with practical examples.",
                duration: "45 minutes",
                lectureCount: 4,
                difficulty: "Medium",
                status: "in-progress",
                progress: 60,
                lecturesList: [
                    {
                        id: "lecture-1",
                        title: "Equivalence relations and their properties",
                        type: "video",
                        duration: "12:45",
                        status: "completed",
                        description: "Introduction to equivalence relations and their three key properties",
                    },
                    {
                        id: "lecture-2",
                        title: "Equivalence relations - Non math example",
                        type: "video",
                        duration: "8:30",
                        status: "current",
                        description: "Real-world examples of equivalence relations outside mathematics",
                    },
                    {
                        id: "lecture-3",
                        title: "Equivalence relations in geometry",
                        type: "video",
                        duration: "15:20",
                        status: "not-started",
                        description: "Geometric applications of equivalence relations",
                    },
                    {
                        id: "lecture-4",
                        title: "Empty and Universal relations",
                        type: "video",
                        duration: "10:15",
                        status: "not-started",
                        description: "Understanding special types of relations",
                    },
                ],
            },
            {
                id: "lesson-2",
                title: "Function fundamentals",
                description: "Master the basics of functions including domain, range, and function notation with comprehensive examples.",
                duration: "50 minutes",
                lectureCount: 3,
                difficulty: "Medium",
                status: "not-started",
                progress: 0,
                lecturesList: [
                    {
                        id: "lecture-5",
                        title: "Introduction to functions",
                        type: "video",
                        duration: "15:30",
                        status: "not-started",
                        description: "Basic concepts and definition of functions",
                    },
                    {
                        id: "lecture-6",
                        title: "Domain and range concepts",
                        type: "video",
                        duration: "18:45",
                        status: "not-started",
                        description: "Understanding domain and range in functions",
                    },
                    {
                        id: "lecture-7",
                        title: "Function notation and evaluation",
                        type: "video",
                        duration: "16:20",
                        status: "not-started",
                        description: "Proper function notation and evaluation techniques",
                    },
                ],
            },
        ],
        attachments: [
            {
                name: "Unit 1 - Relations Notes.pdf",
                size: "1.5 MB",
                type: "pdf",
                description: "Comprehensive notes on relations",
            },
            {
                name: "Function Examples.pdf",
                size: "900 KB",
                type: "pdf",
                description: "Worked examples and practice problems",
            },
            {
                name: "Quick Reference Sheet.pdf",
                size: "600 KB",
                type: "pdf",
                description: "Formulas and key concepts summary",
            },
        ],
        externalResources: [
            {
                title: "Khan Academy - Relations and Functions",
                description: "Interactive exercises and video explanations on relations and functions",
                url: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:functions",
                type: "Interactive Course",
            },
            {
                title: "Wolfram MathWorld - Relation",
                description: "Comprehensive mathematical reference for relation theory",
                url: "https://mathworld.wolfram.com/Relation.html",
                type: "Reference",
            },
            {
                title: "MIT OpenCourseWare - Discrete Mathematics",
                description: "Advanced topics in discrete mathematics including relations",
                url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/",
                type: "Course Material",
            },
            {
                title: "GeoGebra - Function Explorer",
                description: "Interactive tool to visualize and explore functions",
                url: "https://www.geogebra.org/graphing",
                type: "Interactive Tool",
            },
        ],
        quiz: {
            id: "quiz-1",
            title: "Unit 1 Assessment",
            description: "Comprehensive quiz covering all topics in relations and functions",
            masteryPoints: 160,
            questions: 15,
            timeLimit: "45 minutes",
        },
    },
};

// Course data
export const courseDetails = {
    "eb5a3841-1613-4d9e-a028-b46eb7b259b7": {
        name: "Class 12 Mathematics",
        summary: "This comprehensive course is based on the new rationalized NCERT 2023-2024 books, covering all essential mathematical concepts for Class 12 students.",
        description:
            "This comprehensive course is based on the new rationalized NCERT 2023-2024 books, covering all essential mathematical concepts for Class 12 students. This comprehensive course is based on the new rationalized NCERT 2023-2024 books, covering all essential mathematical concepts for Class 12 students. This comprehensive course is based on the new rationalized NCERT 2023-2024 books, covering all essential mathematical concepts for Class 12 students. This comprehensive course is based on the new rationalized NCERT 2023-2024 books, covering all essential mathematical concepts for Class 12 students. This comprehensive course is based on the new rationalized NCERT 2023-2024 books, covering all essential mathematical concepts for Class 12 students.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2940&auto=format&fit=crop",
        rating: 4.8,
        students: 15420,
        duration: "120 hours",
        level: "Advanced",
        language: "English/Hindi",
        features: [
            { name: "HTML/CSS", level: "Advanced" },
            { name: "JavaScript", level: "Advanced" },
            { name: "React.js", level: "Intermediate" },
            { name: "Node.js", level: "Intermediate" },
            { name: "MongoDB", level: "Beginner" },
            { name: "Git/GitHub", level: "Intermediate" },
        ],
        learningOutcomes: [
            "Master relations and functions concepts",
            "Understand inverse trigonometric functions",
            "Solve complex matrix problems",
            "Apply calculus in real-world scenarios",
            "Prepare for competitive exams",
        ],
        prerequisites: ["Basic computer skills", "No prior programming experience required"],
        instructors: [
            {
                name: "Dr. Kushagra Thakral",
                role: "Mathematics Professor",
                avatar: "/placeholder.svg?height=60&width=60",
                bio: "PhD in Mathematics with 15+ years of teaching experience",
                rating: 4.9,
                courses: 12,
            },
        ],
        certificateCriteria: {
            certificateImage: "https://marketplace.canva.com/EAF7ijX8ZNQ/2/0/1600w/canva-q6rkKUKUUH4.jpg",
            certificateImagePreview: "https://marketplace.canva.com/EAF7ijX8ZNQ/2/0/1600w/canva-q6rkKUKUUH4.jpg",
            certificateDescription:
                "Earn a professional certificate upon completion of the course. This certificate verifies your proficiency in web development fundamentals and can be shared on your resume and professional profiles.",
            certificateBenefits: [
                "Recognized by industry professionals",
                "Shareable on LinkedIn and other platforms",
                "Verifiable through our certificate portal",
                "Demonstrates practical coding skills",
            ],
        },
        attachments: [
            {
                title: "Course Workbook",
                description: "Comprehensive PDF guide with exercises and examples",
                file: "workbook.pdf",
            },
            {
                title: "Code Examples",
                description: "Starter code and completed projects",
                file: "code-examples.zip",
            },
            {
                title: "Resource Links",
                description: "Curated list of helpful development resources",
                file: "resources.txt",
            },
        ],
        stats: {
            totalVideos: 45,
            totalQuizzes: 12,
            totalAssignments: 8,
            avgCompletionTime: "3 months",
        },
    },
};

// Course sidebar data
export const courseData = {
    "eb5a3841-1613-4d9e-a028-b46eb7b259b7": {
        name: "Class 12",
        summary: "13 UNITS • 125 Lessons",
        progress: 15,
        totalHours: 120,
        completedHours: 18,
        units: [
            {
                id: "unit-1",
                name: "Relations and functions",
                number: 1,
                progress: 45,
                status: "in-progress",
                summary: "Types of relations, Types of functions, Composition of functions and invertible function",
                lectures: 4,
                duration: "2.5",
                categories: [{ name: "Engineering" }],
                learningOutcomes: ["Equivalence relations and their properties", "Types of functions", "Composition of functions"],
            },
            {
                id: "unit-2",
                name: "Inverse trigonometric functions",
                number: 2,
                progress: 0,
                status: "not-started",
                summary: "Basic of inverse trigonometric functions, Properties of inverse trigonometric functions",
                lectures: 3,
                duration: "2",
                categories: [{ name: "Science" }],
                learningOutcomes: ["Basic inverse trig functions", "Properties and applications"],
            },
            {
                id: "unit-3",
                name: "Matrices",
                number: 3,
                progress: 0,
                status: "not-started",
                summary: "Matrix operations, Types of matrices, Addition of matrices",
                lectures: 5,
                duration: "3",
                categories: [{ name: "Biology" }],
                learningOutcomes: ["Matrix basics", "Matrix operations", "Special matrices"],
            },
            {
                id: "unit-4",
                name: "Determinants",
                number: 4,
                progress: 0,
                status: "not-started",
                summary: "Properties of determinants, Cofactors and applications in solving equations",
                lectures: 4,
                duration: "2.5",
                categories: [{ name: "Mathematics" }],
                learningOutcomes: ["Understanding determinants", "Solving linear equations using determinants"],
            },
            {
                id: "unit-5",
                name: "Continuity and differentiability",
                number: 5,
                progress: 0,
                status: "not-started",
                summary: "Concept of continuity, Differentiability, Derivatives of implicit functions",
                lectures: 5,
                duration: "3",
                categories: [{ name: "Mathematics" }],
                learningOutcomes: ["Different types of continuity", "Rules of differentiation", "Chain rule and implicit differentiation"],
            },
            {
                id: "unit-6",
                name: "Application of derivatives",
                number: 6,
                progress: 0,
                status: "not-started",
                summary: "Tangents and normals, Rate of change, Increasing and decreasing functions",
                lectures: 4,
                duration: "2.5",
                categories: [{ name: "Engineering" }],
                learningOutcomes: ["Finding slopes of curves", "Optimizing quantities", "Understanding monotonicity"],
            },
            {
                id: "unit-7",
                name: "Integrals",
                number: 7,
                progress: 0,
                status: "not-started",
                summary: "Integration as inverse of differentiation, Methods of integration, Definite integrals",
                lectures: 6,
                duration: "3.5",
                categories: [{ name: "Science" }],
                learningOutcomes: ["Basic techniques of integration", "Definite integrals and their properties", "Fundamental theorem of calculus"],
            },
            {
                id: "unit-8",
                name: "Application of integrals",
                number: 8,
                progress: 0,
                status: "not-started",
                summary: "Area under curves, Area between two curves",
                lectures: 3,
                duration: "2",
                categories: [{ name: "Mathematics" }],
                learningOutcomes: ["Finding areas using integration", "Understanding geometric applications of integrals"],
            },
            {
                id: "unit-9",
                name: "Differential equations",
                number: 9,
                progress: 0,
                status: "not-started",
                summary: "Order and degree of differential equations, General and particular solutions",
                lectures: 4,
                duration: "3",
                categories: [{ name: "Engineering" }],
                learningOutcomes: ["Basic forms of differential equations", "Solving first-order equations", "Modeling with differential equations"],
            },
            {
                id: "unit-10",
                name: "Vector Algebra",
                number: 10,
                progress: 0,
                status: "not-started",
                summary: "Introduction to vectors, Scalar and vector products",
                lectures: 4,
                duration: "2.5",
                categories: [{ name: "Physics" }],
                learningOutcomes: ["Understanding vector operations", "Dot product and cross product", "Applications in geometry and physics"],
            },
        ],
    },
};


export const lectureList  = [
        {
            id: "lesson-1",
            title: "Types of relations",
            description: "Learn about different types of relations including reflexive, symmetric, and transitive relations.",
            lectures: [
                {
                    id: "lecture-1",
                    title: "Equivalence relations and their properties",
                    type: "video",
                    duration: "12:45",
                    status: "completed",
                    description: "Introduction to equivalence relations and their three key properties",
                },
                {
                    id: "lecture-2",
                    title: "Equivalence relations - Non math example",
                    type: "video",
                    duration: "8:30",
                    status: "current",
                    description: "Real-world examples of equivalence relations outside mathematics",
                },
                {
                    id: "lecture-3",
                    title: "Equivalence relations in geometry",
                    type: "video",
                    duration: "15:20",
                    status: "not-started",
                    description: "Geometric applications of equivalence relations",
                },
                {
                    id: "lecture-4",
                    title: "Empty and Universal relations",
                    type: "video",
                    duration: "10:15",
                    status: "not-started",
                    description: "Understanding special types of relations such as empty and universal relations",
                },
            ],
            progress: 60,
            status: "in-progress",
        },
        {
            id: "lesson-2",
            title: "Function fundamentals",
            description: "Master the basics of functions including domain, range, and function notation.",
            lectures: [
                {
                    id: "lecture-5",
                    title: "Introduction to functions",
                    duration: "15:30",
                    status: "not-started",
                    type: "video",
                    description: "Overview of functions and their importance in mathematics",
                },
                {
                    id: "lecture-6",
                    title: "Domain and range concepts",
                    duration: "18:45",
                    status: "not-started",
                    type: "video",
                    description: "Learn how to determine the domain and range of different types of functions",
                },
                {
                    id: "lecture-7",
                    title: "Function notation and evaluation",
                    duration: "16:20",
                    status: "not-started",
                    type: "video",
                    description: "Understand how to use and interpret function notation and evaluate function expressions",
                },
            ],
            progress: 0,
            status: "not-started",
        },
        {
            id: "lesson-3",
            title: "Composite functions",
            description: "Understanding function composition and inverse functions with practical applications.",
            lectures: [
                {
                    id: "lecture-8",
                    title: "Function composition basics",
                    duration: "14:15",
                    status: "not-started",
                    type: "video",
                    description: "Step-by-step explanation of composing two or more functions together",
                },
                {
                    id: "lecture-9",
                    title: "Inverse functions",
                    duration: "12:30",
                    status: "not-started",
                    type: "video",
                    description: "Learn how to find and interpret inverse functions and their domains",
                },
            ],
            progress: 0,
            status: "not-started",
        },
    ];