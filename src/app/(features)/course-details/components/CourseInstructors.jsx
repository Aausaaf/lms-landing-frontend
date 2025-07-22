import Link from "next/link";
import React from "react";
import Icon from "./AppIcon";
import { Button } from "@/components/ui/button";
import Image from "./AppImage";

const CourseInstructors = ({ instructors }) => {
    return (
        <section id="instructors" className="py-12 bg-background">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">Meet Your Instructors</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">Learn from industry experts with years of teaching experience and real-world expertise.</p>
                        <div className="flex justify-center">
                            <Link href="/instructor-profiles">
                                <Button variant="outline" iconName="ExternalLink" iconPosition="right">
                                    View All Instructors
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Instructors Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {instructors.map((instructor, index) => (
                            <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                                {/* Instructor Photo */}
                                <div className="text-center mb-4">
                                    <Image src={instructor.avatar} alt={instructor.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-3" />
                                    <h3 className="text-lg font-heading font-semibold text-foreground">{instructor.name}</h3>
                                    <p className="text-sm text-primary font-medium">{instructor.title}</p>
                                </div>

                                {/* Bio */}
                                <p className="text-sm text-muted-foreground text-center mb-4 line-clamp-3">{instructor.bio}</p>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-foreground">{instructor.experience}</div>
                                        <div className="text-xs text-muted-foreground">Years Experience</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-foreground">{instructor.students.toLocaleString()}</div>
                                        <div className="text-xs text-muted-foreground">Students Taught</div>
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="space-y-2 mb-4">
                                    {instructor.achievements.slice(0, 2).map((achievement, achIndex) => (
                                        <div key={achIndex} className="flex items-start space-x-2">
                                            <Icon name="Award" size={14} className="text-warning mt-0.5 flex-shrink-0" />
                                            <span className="text-xs text-muted-foreground">{achievement}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Rating */}
                                <div className="flex items-center justify-center space-x-2 mb-4">
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Icon key={i} name="Star" size={14} className={i < Math.floor(instructor.rating) ? "text-warning fill-warning" : "text-gray-300"} />
                                        ))}
                                    </div>
                                    <span className="text-sm font-medium text-foreground">{instructor.rating}</span>
                                    <span className="text-xs text-muted-foreground">({instructor.reviews.toLocaleString()} reviews)</span>
                                </div>

                                {/* Social Links */}
                                <div className="flex items-center justify-center space-x-3">
                                    {instructor.social.linkedin && (
                                        <a href={instructor.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                            <Icon name="Linkedin" size={16} />
                                        </a>
                                    )}
                                    {instructor.social.twitter && (
                                        <a href={instructor.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                            <Icon name="Twitter" size={16} />
                                        </a>
                                    )}
                                    {instructor.social.website && (
                                        <a href={instructor.social.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                            <Icon name="Globe" size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Instructor Credentials */}
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6">
                        <div className="text-center space-y-4">
                            <h3 className="text-xl font-heading font-semibold text-foreground">Why Learn From Our Instructors?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <Icon name="GraduationCap" size={32} className="text-primary mx-auto mb-2" />
                                    <h4 className="font-medium text-foreground mb-1">Expert Knowledge</h4>
                                    <p className="text-sm text-muted-foreground">Advanced degrees and industry certifications</p>
                                </div>
                                <div className="text-center">
                                    <Icon name="Users" size={32} className="text-secondary mx-auto mb-2" />
                                    <h4 className="font-medium text-foreground mb-1">Teaching Experience</h4>
                                    <p className="text-sm text-muted-foreground">Years of experience in education and training</p>
                                </div>
                                <div className="text-center">
                                    <Icon name="Briefcase" size={32} className="text-warning mx-auto mb-2" />
                                    <h4 className="font-medium text-foreground mb-1">Industry Practice</h4>
                                    <p className="text-sm text-muted-foreground">Real-world experience in their field of expertise</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseInstructors;
