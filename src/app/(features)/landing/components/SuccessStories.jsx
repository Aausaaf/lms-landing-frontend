import { successStoriesData } from "../constants/data";

export default function SuccessStories() {
    const getCategoryColor = (category) => {
        const colors = {
            Mechanical: "bg-blue-600",
            IAS: "bg-purple-600",
            JEE: "bg-green-600",
        };
        return colors[category] || "bg-blue-600";
    };

    const renderStars = (rating) => {
        return "⭐".repeat(rating);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{successStoriesData.title}</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">{successStoriesData.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {successStoriesData.stories.map((story) => (
                        <div key={story.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:scale-105">
                            <div className="flex items-center mb-4">
                                <img src={story.image || "/placeholder.svg"} alt={story.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                                <div>
                                    <h4 className="font-semibold">{story.name}</h4>
                                    <p className="text-sm text-gray-600">{story.achievement}</p>
                                </div>
                                <div className={`ml-auto ${getCategoryColor(story.category)} text-white px-3 py-1 rounded-full text-sm`}>{story.category}</div>
                            </div>

                            <blockquote className="text-gray-600 italic mb-4 leading-relaxed">"{story.testimonial}"</blockquote>

                            <div className="flex items-center justify-between text-sm">
                                <span className="text-blue-600 font-medium">Course: {story.course}</span>
                                <div className="flex text-yellow-400">{renderStars(story.rating)}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Success Stories */}
                <div className="text-center mt-12">
                    <button className="bg-white text-blue-600 border-2 border-blue-600 font-semibold text-lg px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">Read More Success Stories</button>
                </div>
            </div>
        </section>
    );
}
