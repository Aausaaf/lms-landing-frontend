"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, BookOpen } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const courses = [
  {
    id: "class-12-math",
    title: "Class 12 Mathematics",
    description: "Complete NCERT 2023-2024 curriculum with 13 units and 125 skills",
    image: "/placeholder.svg?height=200&width=400",
    duration: "120 hours",
    students: "15,420",
    rating: 4.8,
    units: 13,
    skills: 125,
    level: "Advanced",
    category: "Mathematics",
  },
  {
    id: "physics-fundamentals",
    title: "Physics Fundamentals",
    description: "Master the core concepts of physics with interactive simulations",
    image: "/placeholder.svg?height=200&width=400",
    duration: "80 hours",
    students: "12,350",
    rating: 4.9,
    units: 10,
    skills: 95,
    level: "Intermediate",
    category: "Physics",
  },
  {
    id: "chemistry-organic",
    title: "Organic Chemistry",
    description: "Comprehensive guide to organic chemistry reactions and mechanisms",
    image: "/placeholder.svg?height=200&width=400",
    duration: "100 hours",
    students: "9,870",
    rating: 4.7,
    units: 12,
    skills: 110,
    level: "Advanced",
    category: "Chemistry",
  },
  {
    id: "computer-science",
    title: "Computer Science Basics",
    description: "Introduction to programming, algorithms, and data structures",
    image: "/placeholder.svg?height=200&width=400",
    duration: "150 hours",
    students: "25,600",
    rating: 4.9,
    units: 15,
    skills: 180,
    level: "Beginner",
    category: "Computer Science",
  },
]

// Loading skeleton component
function CourseCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="h-48 bg-muted animate-pulse relative overflow-hidden">
          <div className="shimmer absolute inset-0" />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="h-6 bg-muted rounded animate-pulse" />
          <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
          <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
        </div>
      </CardContent>
    </Card>
  )
}

export function CourseGrid() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <CourseCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {courses.map((course, index) => (
        <Card
          key={course.id}
          className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardHeader className="p-0">
            <div className="relative overflow-hidden">
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-orange-500 text-white">
                  {course.category}
                </Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="bg-white/90 text-gray-700">
                  {course.level}
                </Badge>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">{course.title}</h3>
            <p className="text-muted-foreground mb-4 line-clamp-2">{course.description}</p>

            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{course.students}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{course.rating}</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm mb-4">
              <div className="flex items-center space-x-1 text-orange-500">
                <BookOpen className="w-4 h-4" />
                <span>{course.units} Units</span>
              </div>
              <span className="text-muted-foreground">{course.skills} Skills</span>
            </div>
          </CardContent>

          <CardFooter className="p-6 pt-0">
            <Link href={`/course/${course.id}`} className="w-full">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 group-hover:shadow-lg">
                View Course
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
