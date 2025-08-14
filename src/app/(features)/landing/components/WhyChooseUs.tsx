import { whyChooseUsData } from "../constants/data";

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-white dark:bg-gray-800" id="why-choose-us">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-6">{whyChooseUsData.title}</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">{whyChooseUsData.subtitle}</p>
                </div>

                {/* Main Features */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {whyChooseUsData.features.map((feature, index) => (
                        <div
                            key={index}
                            className="text-center p-8 shadow-sm bg-gray-100 dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 hover:border-orange-200 dark:hover:border-orange-700 transition-all duration-300"
                        >
                            <div
                                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                                    feature.color === "primary"
                                        ? "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
                                        : feature.color === "accent"
                                        ? "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                                        : feature.color === "secondary"
                                        ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                                        : "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400"
                                }`}
                            >
                                <span className="text-2xl" aria-hidden="true">
                                    {<feature.icon />}
                                </span>
                            </div>
                            <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                            <div className="text-sm text-orange-600 dark:text-orange-400 font-medium">{feature.stat}</div>
                        </div>
                    ))}
                </div>

                {/* Additional Features */}
                <div className="grid md:grid-cols-3 gap-8">
                    {whyChooseUsData.additionalFeatures.map((feature, index) => (
                        <div key={index} className="bg-gray-100 shadow-sm dark:bg-gray-700 p-6 rounded-xl border border-gray-100 dark:border-gray-600">
                            <h4 className="font-medium mb-3 flex items-center text-gray-900 dark:text-white">
                                <span
                                    className={`w-3 h-3 rounded-full mr-3 ${
                                        feature.color === "primary"
                                            ? "bg-orange-600 dark:bg-orange-500"
                                            : feature.color === "accent"
                                            ? "bg-purple-600 dark:bg-purple-500"
                                            : "bg-green-600 dark:bg-green-500"
                                    }`}
                                ></span>
                                {feature.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
