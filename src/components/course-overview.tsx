"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Download, CheckCircle, Play, Clock, Users, Star, BookOpen, Target } from "lucide-react"
import Link from "next/link"

const courseDetails = {
  "class-12-math": {
    title: "Class 12 Mathematics",
    description:
      "This comprehensive course is based on the new rationalized NCERT 2023-2024 books, covering all essential mathematical concepts for Class 12 students.",
    image: "/placeholder.svg?height=300&width=800",
    rating: 4.8,
    students: 15420,
    duration: "120 hours",
    level: "Advanced",
    language: "English/Hindi",
    features: [
      "Certificate of Completion",
      "Lifetime Access",
      "Mobile & Desktop",
      "Practice Exercises",
      "Video Lectures",
      "Quiz Assessments",
    ],
    outcomes: [
      "Master relations and functions concepts",
      "Understand inverse trigonometric functions",
      "Solve complex matrix problems",
      "Apply calculus in real-world scenarios",
      "Prepare for competitive exams",
    ],
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
    attachments: [
      { name: "Course Syllabus.pdf", size: "2.4 MB", type: "pdf" },
      { name: "Formula Sheet.pdf", size: "1.8 MB", type: "pdf" },
      { name: "Practice Problems.pdf", size: "3.2 MB", type: "pdf" },
    ],
    units: [
      {
        id: "unit-1",
        title: "Relations and functions",
        description: "Types of relations, Types of functions, Composition of functions and invertible function",
        lectures: 4,
        duration: "2.5 hours",
        difficulty: "Medium",
        topics: ["Equivalence relations and their properties", "Types of functions", "Composition of functions"],
      },
      {
        id: "unit-2",
        title: "Inverse trigonometric functions",
        description: "Basic of inverse trigonometric functions, Properties of inverse trigonometric functions",
        lectures: 3,
        duration: "2 hours",
        difficulty: "Hard",
        topics: ["Basic inverse trig functions", "Properties and applications"],
      },
      {
        id: "unit-3",
        title: "Matrices",
        description: "Matrix operations, Types of matrices, Addition of matrices",
        lectures: 5,
        duration: "3 hours",
        difficulty: "Medium",
        topics: ["Matrix basics", "Matrix operations", "Special matrices"],
      },
    ],
    stats: {
      totalVideos: 45,
      totalQuizzes: 12,
      totalAssignments: 8,
      avgCompletionTime: "3 months",
    },
  },
}

interface CourseOverviewProps {
  courseId: string
}

export function CourseOverview({ courseId }: CourseOverviewProps) {
  const course = courseDetails[courseId as keyof typeof courseDetails]

  if (!course) return <div>Course not found</div>

  return (
    <div className="p-4 lg:p-8 max-w-6xl mx-auto fade-in">
      {/* Hero Section */}
      <div className="mb-8">
        <div className="relative rounded-xl overflow-hidden mb-6">
          <img
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">{course.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{course.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{course.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white">
                {course.level}
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <p className="text-lg text-muted-foreground flex-1">{course.description}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="bg-orange-500 hover:bg-orange-600">Get this course in Hindi</Button>
            <Button variant="outline">
              <BookOpen className="w-4 h-4 mr-2" />
              Preview Course
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="instructor">Instructor</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-6">
          {/* Course Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-500">{course.stats.totalVideos}</div>
              <div className="text-sm text-muted-foreground">Video Lectures</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-500">{course.stats.totalQuizzes}</div>
              <div className="text-sm text-muted-foreground">Quizzes</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-green-500">{course.stats.totalAssignments}</div>
              <div className="text-sm text-muted-foreground">Assignments</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-500">{course.stats.avgCompletionTime}</div>
              <div className="text-sm text-muted-foreground">Avg. Completion</div>
            </Card>
          </div>

          {/* Course Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-orange-500" />
                <span>What You'll Get</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learning Outcomes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-blue-500" />
                <span>Learning Outcomes</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {course.outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-600">{index + 1}</span>
                    </div>
                    <span className="text-sm">{outcome}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="curriculum" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-orange-500" />
                <span>Course Curriculum</span>
              </CardTitle>
              <p className="text-muted-foreground">
                {course.units.length} units • {course.stats.totalVideos} lectures • {course.duration} total length
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {course.units.map((unit, index) => (
                <div key={unit.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{unit.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{unit.description}</p>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Play className="w-3 h-3" />
                            <span>{unit.lectures} lectures</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{unit.duration}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {unit.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">Unit mastery: 0%</Badge>
                      <Link href={`/course/${courseId}/unit/${unit.id}`}>
                        <Button className="bg-blue-500 hover:bg-blue-600">Start Learning</Button>
                      </Link>
                    </div>
                  </div>

                  <div className="ml-16 space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Topics covered:</h4>
                    {unit.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="instructor" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Meet Your Instructor</CardTitle>
            </CardHeader>
            <CardContent>
              {course.instructors.map((instructor, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-6"
                >
                  <Avatar className="w-24 h-24 mx-auto lg:mx-0">
                    <AvatarImage src={instructor.avatar || "/placeholder.svg"} alt={instructor.name} />
                    <AvatarFallback className="text-lg">
                      {instructor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-center lg:text-left">
                    <h4 className="text-xl font-semibold mb-1">{instructor.name}</h4>
                    <p className="text-muted-foreground mb-3">{instructor.role}</p>
                    <p className="text-sm mb-4">{instructor.bio}</p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{instructor.rating} rating</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-4 h-4 text-blue-500" />
                        <span>{instructor.courses} courses</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-green-500" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Download className="w-5 h-5 text-green-500" />
                <span>Course Resources</span>
              </CardTitle>
              <p className="text-muted-foreground">Download these resources to enhance your learning experience</p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {course.attachments.map((attachment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
                        <Download className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <p className="font-medium">{attachment.name}</p>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <span>{attachment.size}</span>
                          <span>•</span>
                          <Badge variant="outline" className="text-xs">
                            {attachment.type.toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
