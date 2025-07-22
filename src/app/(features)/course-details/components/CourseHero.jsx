import React from "react";
import Image from "./AppImage";
import Icon from "./AppIcon";
import { Button } from "@/components/ui/button";
import { useNavigation } from "@/components/navigation";

const CourseHero = ({ course, onEnrollClick, onPreviewClick }) => {
    const { navigate } = useNavigation();
    return (
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-b border-orange-200 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500 rounded-full transform -translate-x-16 -translate-y-16"></div>
                <div className="absolute top-20 right-20 w-24 h-24 bg-orange-400 rounded-full opacity-60"></div>
                <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-orange-300 rounded-full opacity-40"></div>
                <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-orange-600 rounded-full opacity-30"></div>
            </div>

            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 lg:py-8 lg:pb-14 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Course Info */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Breadcrumb */}
                        <div className="flex items-center space-x-2 text-sm text-orange-700">
                            <span onClick={() => navigate("/course-list")} className="hover:text-orange-900 transition-colors cursor-pointer">
                                Courses
                            </span>
                            {/* <Icon name="ChevronRight" size={14} /> */}
                            {/* <span className="hover:text-orange-900 transition-colors cursor-pointer">Mathematics</span> */}
                            <Icon name="ChevronRight" size={14} />
                            <span className="text-orange-900 font-medium">{course.title}</span>
                        </div>

                        {/* Course Title & Rating */}
                        <div className="space-y-6">
                            <div className="flex items-start justify-between">
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">BESTSELLER</div>
                                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">🔥 HOT</div>
                                    </div>
                                    <h1 className="text-3xl lg:text-5xl font-heading font-bold text-gray-900 leading-tight">{course.title}</h1>
                                    <p className="text-xl text-gray-700 max-w-2xl leading-relaxed">{course.subtitle}</p>
                                </div>
                            </div>

                            {/* Enhanced Rating & Stats */}
                            <div className="flex flex-wrap items-center gap-6 text-sm">
                                <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Icon key={i} name="Star" size={18} className={i < Math.floor(course.rating) ? "text-orange-500 fill-orange-500" : "text-gray-300"} />
                                        ))}
                                    </div>
                                    <span className="font-bold text-gray-900">{course.rating}</span>
                                    <span className="text-gray-600">({course.reviews.toLocaleString()} reviews)</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                                    <Icon name="Users" size={18} className="text-orange-500" />
                                    <span className="font-semibold text-gray-900">{course.students.toLocaleString()}</span>
                                    <span className="text-gray-600">students</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                                    <Icon name="Clock" size={18} className="text-orange-500" />
                                    <span className="font-semibold text-gray-900">{course.duration}</span>
                                    <span className="text-gray-600">content</span>
                                </div>
                            </div>

                            {/* Course Tags */}
                            <div className="flex flex-wrap gap-3">
                                {course.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-orange-500/10 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200 hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Enhanced Instructor Info */}
                        <div className="flex items-center space-x-6 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-orange-200 shadow-lg">
                            <div className="relative">
                                <Image src={course.instructor.avatar} alt={course.instructor.name} className="w-16 h-16 rounded-full object-cover border-3 border-orange-500 shadow-md" />
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                                    <Icon name="Award" size={12} className="text-white" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-orange-600 uppercase tracking-wide">Created by</p>
                                <p className="text-xl font-bold text-gray-900">{course.instructor.name}</p>
                                <p className="text-sm text-gray-600 font-medium">{course.instructor.title}</p>
                            </div>
                            <div className="hidden md:flex items-center space-x-2 bg-orange-500/10 rounded-full px-4 py-2">
                                <Icon name="Award" size={16} className="text-orange-500" />
                                <span className="text-sm font-semibold text-orange-800">Expert Instructor</span>
                            </div>
                        </div>

                        {/* Mobile CTA */}
                        <div className="lg:hidden space-y-4">
                            <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                                <div>
                                    <div className="text-3xl font-bold text-gray-900">₹{course.price.toLocaleString()}</div>
                                    <div className="text-sm text-gray-600 flex items-center space-x-2">
                                        <span className="line-through">₹{course.originalPrice.toLocaleString()}</span>
                                        <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">{course.discount}% OFF</span>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    iconName="Play"
                                    iconPosition="left"
                                    onClick={onPreviewClick}
                                    className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                                >
                                    Preview
                                </Button>
                            </div>
                            <Button
                                variant="default"
                                fullWidth
                                size="lg"
                                iconName="ShoppingCart"
                                iconPosition="left"
                                onClick={onEnrollClick}
                                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 shadow-lg"
                            >
                                Enroll Now - Start Learning!
                            </Button>
                        </div>
                    </div>

                    {/* Enhanced Course Preview Video */}
                    <div className="lg:col-span-1">
                        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-500/20">
                            <Image src={course.thumbnail} alt="Course preview" className="w-full h-56 lg:h-64 object-cover" />
                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                                <div className="bg-orange-500 rounded-full p-4 mb-4 shadow-xl transform hover:scale-110 transition-transform duration-300">
                                    <Icon name="Play" size={32} className="text-white ml-1" />
                                </div>
                                <Button
                                    variant="default"
                                    size="lg"
                                    iconName="Play"
                                    iconPosition="left"
                                    onClick={onPreviewClick}
                                    className="bg-white/95 text-gray-900 hover:bg-white font-bold shadow-lg"
                                >
                                    Preview Course
                                </Button>
                            </div>
                            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">{course.previewDuration}</div>
                            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">Full HD Quality</div>
                        </div>

                        {/* Desktop Price Card */}
                        <div className="hidden lg:block mt-6 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-orange-200">
                            <div className="text-center space-y-4">
                                <div>
                                    <div className="text-3xl font-bold text-gray-900">₹{course.price.toLocaleString()}</div>
                                    <div className="text-sm text-gray-600 flex items-center justify-center space-x-2">
                                        <span className="line-through">₹{course.originalPrice.toLocaleString()}</span>
                                        <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">{course.discount}% OFF</span>
                                    </div>
                                </div>
                                <Button
                                    variant="default"
                                    fullWidth
                                    size="lg"
                                    iconName="ShoppingCart"
                                    iconPosition="left"
                                    onClick={onEnrollClick}
                                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 shadow-lg"
                                >
                                    Enroll Now
                                </Button>
                                <div className="text-xs text-gray-500 text-center">30-day money-back guarantee</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseHero;
