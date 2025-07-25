"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Pause, Volume2, Maximize, Settings, FileText, Download, User } from "lucide-react"
import { useState } from "react"

const lectureDetails = {
  "lecture-1": {
    title: "Equivalence relations and their properties",
    description:
      "In this video, we break down the properties of equivalence relations in a clear and engaging way! You'll learn how to understand them mathematically, with step-by-step explanations and examples that make both the theory and applications crystal clear.",
    videoUrl: "/placeholder.svg?height=400&width=800",
    duration: "12:45",
    transcript: `Welcome to this lesson on equivalence relations and their properties.

An equivalence relation is a binary relation that is reflexive, symmetric, and transitive.

Let's start with the definition of reflexive property...`,
    instructor: {
      name: "Kushagra Thakral",
      role: "Created by Kushagra Thakral",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    attachments: [
      { name: "Lecture Notes.pdf", size: "1.2 MB" },
      { name: "Practice Problems.pdf", size: "800 KB" },
    ],
  },
}

interface LecturePlayerProps {
  courseId: string
  unitId: string
  lectureId: string
}

export function LecturePlayer({ courseId, unitId, lectureId }: LecturePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showTranscript, setShowTranscript] = useState(false)

  const lecture = lectureDetails[lectureId as keyof typeof lectureDetails]

  if (!lecture) return <div>Lecture not found</div>

  return (
    <div className="p-8 max-w-6xl mx-auto fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
        <span>🏠</span>
        <span>•</span>
        <span>Math</span>
        <span>•</span>
        <span>Class 12</span>
      </nav>

      {/* Video Player */}
      <Card className="mb-8 overflow-hidden">
        <div className="relative bg-black aspect-video">
          <img
            src={lecture.videoUrl || "/placeholder.svg"}
            alt={lecture.title}
            className="w-full h-full object-cover"
          />

          {/* Video Controls Overlay */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center group hover:bg-black/40 transition-colors">
            <Button
              size="lg"
              className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white ml-1" />}
            </Button>
          </div>

          {/* Video Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center space-x-4">
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/20"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>

              <div className="flex-1 bg-white/20 rounded-full h-1">
                <div className="bg-orange-500 h-1 rounded-full w-1/4"></div>
              </div>

              <span className="text-white text-sm">3:12 / {lecture.duration}</span>

              <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                <Volume2 className="w-4 h-4" />
              </Button>

              <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                <Settings className="w-4 h-4" />
              </Button>

              <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                <Maximize className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Lecture Info */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{lecture.title}</h1>

        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span className="text-sm text-muted-foreground">{lecture.instructor.role}</span>
          </div>
        </div>
      </div>

      {/* Tabs for different content */}
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="transcript">Transcript</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>About this lesson</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{lecture.description}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transcript" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Transcript</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose dark:prose-invert max-w-none">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed">{lecture.transcript}</pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Downloadable Resources</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {lecture.attachments.map((attachment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <p className="font-medium">{attachment.name}</p>
                        <p className="text-sm text-muted-foreground">{attachment.size}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Navigation */}
      <div className="flex justify-end mt-8">
        <Button className="bg-blue-500 hover:bg-blue-600">Up next: video</Button>
      </div>
    </div>
  )
}
