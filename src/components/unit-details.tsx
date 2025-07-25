"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Star, Award } from "lucide-react"
import Link from "next/link"

const unitData = {
  "unit-1": {
    title: "Relations and functions",
    description:
      "This lesson covers skills from the following lessons of the NCERT Math Textbook: (i) 1.1- Introduction, and (ii) 1.2 - Types of relations",
    masteryPoints: 800,
    lectures: [
      {
        id: "lecture-1",
        title: "Equivalence relations and their properties",
        type: "video",
        duration: "12:45",
        status: "not-started",
      },
      {
        id: "lecture-2",
        title: "Equivalence relations - Non math example",
        type: "video",
        duration: "8:30",
        status: "not-started",
      },
      {
        id: "lecture-3",
        title: "Equivalence relations in geometry",
        type: "video",
        duration: "15:20",
        status: "not-started",
      },
      {
        id: "lecture-4",
        title: "Empty and Universal relations",
        type: "video",
        duration: "10:15",
        status: "not-started",
      },
    ],
    practices: [
      {
        id: "practice-1",
        title: "Reflexive, symmetric and transitive relations (basic)",
        description: "Get 3 of 4 questions to level up!",
        status: "not-started",
        questions: 4,
      },
      {
        id: "practice-2",
        title: "Reflexive, symmetric and transitive relations",
        description: "Get 3 of 4 questions to level up!",
        status: "not-started",
        questions: 4,
      },
    ],
    quiz: {
      id: "quiz-1",
      title: "Quiz 1",
      description: "Level up on the above skills and collect up to 160 Mastery points",
      masteryPoints: 160,
    },
  },
}

interface UnitDetailsProps {
  courseId: string
  unitId: string
}

export function UnitDetails({ courseId, unitId }: UnitDetailsProps) {
  const unit = unitData[unitId as keyof typeof unitData]

  if (!unit) return <div>Unit not found</div>

  return (
    <div className="p-8 max-w-5xl mx-auto fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
        <span>🏠</span>
        <span>•</span>
        <span>Math</span>
        <span>•</span>
        <span>Class 12</span>
      </nav>

      {/* Unit Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Unit 1: {unit.title}</h1>
        <p className="text-muted-foreground mb-4">{unit.masteryPoints} possible mastery points</p>

        {/* Progress Indicators */}
        <div className="flex items-center space-x-6 mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-purple-500 rounded"></div>
            <span className="text-sm">Mastered</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span className="text-sm">Proficient</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-orange-500 rounded"></div>
            <span className="text-sm">Familiar</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <span className="text-sm">Attempted</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
            <span className="text-sm">Not started</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4" />
            <span className="text-sm">Quiz</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4" />
            <span className="text-sm">Unit test</span>
          </div>
        </div>

        {/* Progress Visualization */}
        <div className="flex space-x-2 mb-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center space-y-1">
              <div className="w-8 h-8 bg-gray-200 rounded border-2 border-gray-300"></div>
              {i === 3 && <Award className="w-4 h-4 text-orange-500" />}
              {i === 7 && <Star className="w-4 h-4 text-orange-500" />}
            </div>
          ))}
        </div>
      </div>

      {/* Types of relations section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Types of relations</CardTitle>
          <p className="text-muted-foreground">{unit.description}</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Learn Section */}
            <div>
              <h3 className="font-semibold mb-4">Learn</h3>
              <div className="space-y-3">
                {unit.lectures.map((lecture) => (
                  <Link
                    key={lecture.id}
                    href={`/course/${courseId}/unit/${unitId}/lecture/${lecture.id}`}
                    className="block"
                  >
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{lecture.title}</p>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{lecture.duration}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Practice Section */}
            <div>
              <h3 className="font-semibold mb-4">Practice</h3>
              <div className="space-y-4">
                {unit.practices.map((practice) => (
                  <Card key={practice.id} className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{practice.title}</h4>
                        <p className="text-sm text-muted-foreground">{practice.description}</p>
                      </div>
                      <Badge variant="outline">Not started</Badge>
                    </div>
                    <Button className="w-full bg-blue-500 hover:bg-blue-600">Start</Button>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quiz Section */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                <Award className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{unit.quiz.title}</h3>
                <p className="text-muted-foreground">{unit.quiz.description}</p>
              </div>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">Practice</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
