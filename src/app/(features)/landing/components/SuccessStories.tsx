import Image from "next/image";
import { successStoriesData } from "../constants/data";

export default function SuccessStories() {
    const getCategoryColor = (category: string) => {
        const colors = {
            Mechanical: "bg-orange-600 dark:bg-orange-500",
            IAS: "bg-purple-600 dark:bg-purple-500",
            JEE: "bg-green-600 dark:bg-green-500",
        };
        return colors[category as keyof typeof colors] || "bg-orange-600 dark:bg-orange-500";
    };

    const renderStars = (rating: number) => {
        return "⭐".repeat(rating);
    };

    return (
        <section className="py-20 bg-white dark:bg-gray-800" id="success-stories">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-6">{successStoriesData.title}</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">{successStoriesData.subtitle}</p>
                </div>

                {/* Stories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {successStoriesData.stories.map((story) => (
                        <article
                            key={story.id}
                            className="bg-gray-100 shadow-sm dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 p-6 group hover:border-orange-200 dark:hover:border-orange-700 transition-all duration-300"
                        >
                            {/* Story Header */}
                            <div className="flex items-center mb-4">
                                <Image width={1000} height={1000} src={story.image || "/placeholder.svg"} alt={story.name} className="w-12 h-12 rounded-full object-cover mr-4" loading="lazy" />
                                <div className="flex-1">
                                    <h4 className="font-medium text-gray-900 dark:text-white">{story.name}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{story.achievement}</p>
                                </div>
                                <div className={`${getCategoryColor(story.category)} text-white px-3 py-1 rounded-full text-sm`}>{story.category}</div>
                            </div>

                            {/* Testimonial */}
                            <blockquote className="text-gray-600 dark:text-gray-300 italic mb-4 leading-relaxed">"{story.testimonial}"</blockquote>

                            {/* Footer */}
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-orange-600 dark:text-orange-400 font-medium">Course: {story.course}</span>
                                <div className="flex text-yellow-400" aria-label={`${story.rating} star rating`}>
                                    {renderStars(story.rating)}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View More Success Stories */}
                <div className="text-center mt-12">
                    <button className="bg-white dark:bg-gray-700 text-orange-600 dark:text-orange-400 border border-orange-600 dark:border-orange-400 font-medium text-lg px-8 py-4 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
                        Read More Success Stories
                    </button>
                </div>
            </div>
        </section>
    );
}
