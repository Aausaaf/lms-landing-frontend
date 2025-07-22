export default function TestSeriesCard({ testSeries }) {
    const getBadgeColor = (badge) => {
        const colors = {
            Bestseller: "bg-orange-600",
            "New Launch": "bg-green-600",
            Popular: "bg-red-600",
            Foundation: "bg-blue-600",
            Trending: "bg-pink-600",
            Free: "bg-emerald-600",
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
                <img src={testSeries.image || "/placeholder.svg"} alt={testSeries.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className={`${getBadgeColor(testSeries.badge)} text-white px-3 py-1 rounded-full text-sm font-medium`}>{testSeries.badge}</div>
                    {testSeries.isNew && <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">New</div>}
                </div>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-sm font-medium">
                    {testSeries.stats.rating} {renderStars(testSeries.stats.rating).slice(0, 1)}
                </div>

                {/* Level Badge */}
                <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(testSeries.level)}`}>{testSeries.level}</span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-orange-600 font-medium">{testSeries.category}</span>
                    <span className="text-sm text-gray-500">{testSeries.language}</span>
                </div>

                <h3 className="text-lg font-semibold mb-3 line-clamp-2 leading-tight">{testSeries.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">{testSeries.description}</p>

                {/* Instructor */}
                <div className="flex items-center mb-4">
                    <img src={testSeries.instructor.image || "/placeholder.svg"} alt={testSeries.instructor.name} className="w-8 h-8 rounded-full object-cover mr-3" />
                    <div>
                        <div className="text-sm font-medium">{testSeries.instructor.name}</div>
                        <div className="text-xs text-gray-500 flex items-center">
                            {renderStars(testSeries.instructor.rating)} ({testSeries.instructor.rating})
                        </div>
                    </div>
                </div>

                {/* Test Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                        <div className="text-sm font-bold text-gray-900">{testSeries.totalTests}</div>
                        <div className="text-xs text-gray-500">Tests</div>
                    </div>
                    <div>
                        <div className="text-sm font-bold text-gray-900">{testSeries.stats.students.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">Students</div>
                    </div>
                    <div>
                        <div className="text-sm font-bold text-gray-900">{testSeries.stats.accuracy}%</div>
                        <div className="text-xs text-gray-500">Accuracy</div>
                    </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {testSeries.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-full">
                            {feature}
                        </span>
                    ))}
                    {testSeries.features.length > 3 && <span className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-full">+{testSeries.features.length - 3} more</span>}
                </div>

                {/* Test Types */}
                <div className="flex flex-wrap gap-1 mb-4">
                    {testSeries.testTypes.map((type, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {type}
                        </span>
                    ))}
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-4">
                    <div>
                        {testSeries.isFree ? (
                            <span className="text-2xl font-bold text-green-600">Free</span>
                        ) : (
                            <>
                                <span className="text-2xl font-bold text-orange-600">₹{testSeries.pricing.current.toLocaleString()}</span>
                                {testSeries.pricing.original > testSeries.pricing.current && (
                                    <span className="text-sm text-gray-500 line-through ml-2">₹{testSeries.pricing.original.toLocaleString()}</span>
                                )}
                            </>
                        )}
                    </div>
                    {!testSeries.isFree && testSeries.pricing.discount > 0 && <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">{testSeries.pricing.discount}% OFF</span>}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-200">
                        {testSeries.isFree ? "Start Free Tests" : "Buy Test Series"}
                    </button>
                    <button className="w-full text-orange-600 border-2 border-orange-600 py-2 px-4 rounded-xl hover:bg-orange-50 transition-colors text-sm">View Sample Test</button>
                </div>
            </div>
        </div>
    );
}
