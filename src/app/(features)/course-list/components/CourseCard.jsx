import { useNavigation } from "@/components/navigation";

export default function CourseCard({ course }) {
    const { navigate } = useNavigation();
    const getBadgeColor = (badge) => {
        const colors = {
            Bestseller: "bg-orange-600",
            "New Launch": "bg-green-600",
            Popular: "bg-red-600",
            "Limited Seats": "bg-purple-600",
            Foundation: "bg-blue-600",
            Trending: "bg-pink-600",
            Free: "bg-emerald-600",
            Hot: "bg-red-500",
        };
        return colors[badge] || "bg-orange-600";
    };

    const getLevelColor = (level) => {
        const colors = {
            Beginner: "text-green-600 bg-green-50",
            Intermediate: "text-yellow-600 bg-yellow-50",
            Advanced: "text-red-600 bg-red-50",
        };
        return colors[level] || "text-gray-600 bg-gray-50";
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push("⭐");
        }
        if (hasHalfStar) {
            stars.push("⭐");
        }

        return stars.join("");
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105">
            <div className="relative">
                <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className={`${getBadgeColor(course.badge)} text-white px-3 py-1 rounded-full text-sm font-medium`}>{course.badge}</div>
                    {course.isNew && <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">New</div>}
                </div>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-sm font-medium">
                    {course.stats.rating} {renderStars(course.stats.rating).slice(0, 1)}
                </div>

                {/* Level Badge */}
                <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>{course.level}</span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-orange-600 font-medium">{course.category}</span>
                    <span className="text-sm text-gray-500">{course.language}</span>
                </div>

                <h3 className="text-lg font-semibold mb-3 line-clamp-2 leading-tight">{course.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">{course.description}</p>

                {/* Instructor */}
                <div className="flex items-center mb-4">
                    <img src={course.instructor.image || "/placeholder.svg"} alt={course.instructor.name} className="w-8 h-8 rounded-full object-cover mr-3" />
                    <div>
                        <div className="text-sm font-medium">{course.instructor.name}</div>
                        <div className="text-xs text-gray-500 flex items-center">
                            {renderStars(course.instructor.rating)} ({course.instructor.rating})
                        </div>
                    </div>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                        <div className="text-sm font-bold text-gray-900">{course.stats.hours}h</div>
                        <div className="text-xs text-gray-500">Duration</div>
                    </div>
                    <div>
                        <div className="text-sm font-bold text-gray-900">{course.stats.students.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">Students</div>
                    </div>
                    <div>
                        <div className="text-sm font-bold text-gray-900">{course.stats.successRate}%</div>
                        <div className="text-xs text-gray-500">Success</div>
                    </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {course.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-full">
                            {feature}
                        </span>
                    ))}
                    {course.features.length > 3 && <span className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-full">+{course.features.length - 3} more</span>}
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-4">
                    <div>
                        {course.isFree ? (
                            <span className="text-2xl font-bold text-green-600">Free</span>
                        ) : (
                            <>
                                <span className="text-2xl font-bold text-orange-600">₹{course.pricing.current.toLocaleString()}</span>
                                {course.pricing.original > course.pricing.current && <span className="text-sm text-gray-500 line-through ml-2">₹{course.pricing.original.toLocaleString()}</span>}
                            </>
                        )}
                    </div>
                    {!course.isFree && course.pricing.discount > 0 && <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">{course.pricing.discount}% OFF</span>}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                    <button
                        onClick={() => navigate("/course-details")}
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-200"
                    >
                        {course.isFree ? "Enroll Free" : "Enroll Now"}
                    </button>
                    <button className="w-full text-orange-600 border-2 border-orange-600 py-2 px-4 rounded-xl hover:bg-orange-50 transition-colors text-sm">Preview Course</button>
                </div>
            </div>
        </div>
    );
}
