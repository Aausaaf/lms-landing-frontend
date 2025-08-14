import { testimonialsData } from "../constants/data";

export default function Testimonials() {
    const renderStars = (rating: number) => {
        return "⭐".repeat(rating);
    };

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900" id="testimonials">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-6">{testimonialsData.title}</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">{testimonialsData.subtitle}</p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.testimonials.map((testimonial) => (
                        <article
                            key={testimonial.id}
                            className="bg-gradient-to-br shadow-sm from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-orange-100 dark:border-gray-600 p-6 group hover:border-orange-200 dark:hover:border-orange-700 transition-all duration-300"
                        >
                            {/* Testimonial Header */}
                            <div className="flex items-center mb-4">
                                <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" loading="lazy" />
                                <div className="flex-1">
                                    <h4 className="font-medium text-gray-900 dark:text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.position}</p>
                                </div>
                                <div className="flex text-yellow-400" aria-label={`${testimonial.rating} star rating`}>
                                    {renderStars(testimonial.rating)}
                                </div>
                            </div>

                            {/* Testimonial Content */}
                            <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4 leading-relaxed">"{testimonial.testimonial}"</blockquote>

                            {/* Achievement */}
                            <div className="text-sm text-orange-600 dark:text-orange-400 font-medium">{testimonial.achievement}</div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
