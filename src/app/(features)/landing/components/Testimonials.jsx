import { testimonialsData } from "../constants/data";

export default function Testimonials() {
    const renderStars = (rating) => {
        return "⭐".repeat(rating);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{testimonialsData.title}</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">{testimonialsData.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:scale-105 border border-blue-100"
                        >
                            <div className="flex items-center mb-4">
                                <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                                <div>
                                    <h4 className="font-semibold">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                                </div>
                                <div className="ml-auto flex text-yellow-400">{renderStars(testimonial.rating)}</div>
                            </div>

                            <blockquote className="text-gray-700 italic mb-4 leading-relaxed">"{testimonial.testimonial}"</blockquote>

                            <div className="text-sm text-blue-600 font-medium">{testimonial.achievement}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
