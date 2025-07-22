import React from "react";
import Image from "./AppImage";
import Icon from "./AppIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const CoursesTab = ({ courses }) => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-heading font-semibold text-foreground">Courses by this Instructor ({courses.length})</h3>
                <div className="flex items-center space-x-2">
                    <select className="text-sm border border-border rounded-md px-3 py-1 bg-background">
                        <option>All Courses</option>
                        <option>Most Popular</option>
                        <option>Newest</option>
                        <option>Highest Rated</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <div key={course.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
                        <div className="relative">
                            <div className="aspect-video overflow-hidden">
                                <Image src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                            </div>
                            {course.isNew && <span className="absolute top-2 left-2 bg-success text-white text-xs font-medium px-2 py-1 rounded-full">New</span>}
                            <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{course.duration}</div>
                        </div>

                        <div className="p-4">
                            <h4 className="font-heading font-semibold text-foreground mb-2 line-clamp-2">{course.title}</h4>
                            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{course.description}</p>

                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-1">
                                    <Icon name="Star" size={14} className="text-warning fill-current" />
                                    <span className="text-sm font-medium text-foreground">{course.rating}</span>
                                    <span className="text-xs text-muted-foreground">({course.reviewCount})</span>
                                </div>
                                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                                    <Icon name="Users" size={12} />
                                    <span>{course.enrolledStudents.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-2">
                                    <span className="text-lg font-bold text-foreground">₹{course.price.toLocaleString()}</span>
                                    {course.originalPrice && <span className="text-sm text-muted-foreground line-through">₹{course.originalPrice.toLocaleString()}</span>}
                                </div>
                                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                                    <Icon name="Clock" size={12} />
                                    <span>{course.totalLessons} lessons</span>
                                </div>
                            </div>

                            <div className="flex space-x-2">
                                <Link href="/course-details" className="flex-1">
                                    <Button variant="outline" size="sm" fullWidth>
                                        View Details
                                    </Button>
                                </Link>
                                <Link href="/course-enrollment-payment" className="flex-1">
                                    <Button variant="default" size="sm" fullWidth>
                                        Enroll Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {courses.length === 0 && (
                <div className="text-center py-12">
                    <Icon name="BookOpen" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-foreground mb-2">No Courses Yet</h3>
                    <p className="text-muted-foreground">This instructor hasn't created any courses yet.</p>
                </div>
            )}
        </div>
    );
};

export default CoursesTab;
