import { whyChooseUsData } from "../constants/data";

export default function WhyChooseUs() {
    const getColorClasses = (color) => {
        const colors = {
            primary: "bg-blue-50 text-blue-600",
            accent: "bg-purple-50 text-purple-600",
            secondary: "bg-green-50 text-green-600",
            warning: "bg-orange-50 text-orange-600",
        };
        return colors[color] || colors.primary;
    };

    const getDotColor = (color) => {
        const colors = {
            primary: "bg-blue-600",
            accent: "bg-purple-600",
            secondary: "bg-green-600",
        };
        return colors[color] || colors.primary;
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{whyChooseUsData.title}</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">{whyChooseUsData.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {whyChooseUsData.features.map((feature, index) => (
                        <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${getColorClasses(feature.color)}`}>
                                <span className="text-3xl">{feature.icon}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                            <p className="text-gray-600 mb-4">{feature.description}</p>
                            <div className="text-sm text-blue-600 font-medium">{feature.stat}</div>
                        </div>
                    ))}
                </div>

                {/* Additional Features */}
                <div className="grid md:grid-cols-3 gap-8">
                    {whyChooseUsData.additionalFeatures.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                            <h4 className="font-semibold mb-3 flex items-center">
                                <span className={`w-3 h-3 rounded-full mr-3 ${getDotColor(feature.color)}`}></span>
                                {feature.title}
                            </h4>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
