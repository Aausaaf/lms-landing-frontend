import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Grid3X3, List, Play } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const VideoList = ({ lesson, toggleLessonExpansion }) => {
    const [viewMode, setViewMode] = useState("grid");
    const { courseId, unitId } = useParams();
    return (
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {/* Video lectures section with view toggle */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold flex items-center space-x-2 text-foreground dark:text-foreground">
                        <Play className="w-5 h-5 text-orange-500 dark:text-orange-400" />
                        <span>Video Lectures</span>
                    </h3>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-muted dark:bg-gray-800 rounded-md p-1">
                            <Button variant={viewMode === "grid" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("grid")} className="h-8 px-3 text-xs">
                                <Grid3X3 className="w-3 h-3 mr-1" />
                                Grid
                            </Button>
                            <Button variant={viewMode === "list" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("list")} className="h-8 px-3 text-xs">
                                <List className="w-3 h-3 mr-1" />
                                List
                            </Button>
                        </div>
                        {toggleLessonExpansion && (
                            <Button
                                variant="outline"
                                size="sm"
                                className="border-border dark:border-gray-600 text-foreground dark:text-foreground hover:bg-muted dark:hover:bg-gray-700 bg-transparent"
                                onClick={toggleLessonExpansion}
                            >
                                Collapse
                            </Button>
                        )}
                    </div>
                </div>

                {viewMode === "grid" ? (
                    /* Grid View */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {lesson.lectures.map((lecture, index) => (
                            <Link key={lecture.id} href={`/course/${courseId}/unit/${unitId}/lesson/${lesson.id}/lecture/${lecture.id}`} className="block">
                                <Card className="hover:shadow-md transition-all duration-200 cursor-pointer bg-card dark:bg-gray-800 shadow-sm border-border dark:border-gray-700 overflow-hidden group">
                                    {/* Thumbnail */}
                                    <div className="relative aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VZvB9cHXsJDK76TxYAEEx3HXElbjBMCEpQ&s0"
                                            alt={lecture.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                            <div className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 transition-all duration-300 group-hover:scale-110">
                                                <Play className="w-6 h-6 text-white ml-0.5" />
                                            </div>
                                        </div>
                                        {/* Duration badge */}
                                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{lecture.duration}</div>
                                        {/* Status indicator */}
                                        <div
                                            className={`absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center ${
                                                lecture.status === "completed" ? "bg-green-500" : lecture.status === "current" ? "bg-orange-500" : "bg-gray-500"
                                            }`}
                                        >
                                            {lecture.status === "completed" ? <CheckCircle className="w-4 h-4 text-white" /> : <span className="text-white text-xs font-bold">{index + 1}</span>}
                                        </div>
                                    </div>

                                    <CardContent className="p-4">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <span className="text-xs text-muted-foreground dark:text-muted-foreground bg-muted dark:bg-gray-700 px-2 py-1 rounded">{index + 1}</span>
                                            <div className="flex-1">
                                                <h4 className="font-medium mb-1 text-foreground dark:text-foreground line-clamp-2 text-sm leading-tight">{lecture.title}</h4>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground dark:text-muted-foreground  min-h-12   leading-relaxed line-clamp-2">{lecture.description}</p>
                                        <div className="flex min-h-6 items-center justify-between text-sm">
                                            <div className="flex items-center space-x-2 text-muted-foreground dark:text-muted-foreground">
                                                <Clock className="w-3 h-3" />
                                                <span className="text-xs">{lecture.duration}</span>
                                            </div>
                                            {lecture.status === "current" && (
                                                <Badge variant="default" className="text-xs bg-orange-500 dark:bg-orange-600 text-white">
                                                    Current
                                                </Badge>
                                            )}
                                            {lecture.status === "completed" && (
                                                <Badge variant="default" className="text-xs bg-green-500 dark:bg-green-600 text-white">
                                                    Completed
                                                </Badge>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                ) : (
                    /* List View (existing) */
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {lesson.lectures.map((lecture, index) => (
                            <Link key={lecture.id} href={`/course/${courseId}/unit/${unitId}/lesson/${lesson.id}/lecture/${lecture.id}`} className="block">
                                <Card className="hover:shadow-md transition-all duration-200 cursor-pointer bg-card dark:bg-gray-800 shadow-sm border-border dark:border-gray-700">
                                    <CardContent className="p-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="flex flex-col items-center space-y-1">
                                                <div
                                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                                        lecture.status === "completed" ? "bg-green-500" : lecture.status === "current" ? "bg-orange-500" : "bg-muted-foreground dark:bg-gray-600"
                                                    }`}
                                                >
                                                    {lecture.status === "completed" ? <CheckCircle className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
                                                </div>
                                                <span className="text-xs text-muted-foreground dark:text-muted-foreground bg-muted dark:bg-gray-700 px-2 py-1 rounded">{index + 1}</span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-medium mb-1 text-foreground dark:text-foreground">{lecture.title}</h4>
                                                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-2 leading-relaxed">{lecture.description}</p>
                                                <div className="flex items-center space-x-2 text-sm text-muted-foreground dark:text-muted-foreground">
                                                    <Clock className="w-3 h-3" />
                                                    <span>{lecture.duration}</span>
                                                    {lecture.status === "current" && (
                                                        <Badge variant="default" className="text-xs bg-orange-500 dark:bg-orange-600 text-white">
                                                            Current
                                                        </Badge>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoList;
