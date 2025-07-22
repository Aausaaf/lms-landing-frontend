import { useNavigation } from "@/components/navigation";
import { heroData } from "../constants/data";

export default function HeroSection() {
    const { navigate } = useNavigation();
    return (
        <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>

            <div className="max-w-[1400px] mx-auto px-4 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Hero Content */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            {heroData.title.split("Expert Guidance")[0]}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Expert Guidance</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">{heroData.subtitle}</p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                            <button
                                onClick={() => navigate("/course-list")}
                                className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                            >
                                {heroData.buttons.primary}
                            </button>
                            <button className="bg-white text-orange-500 border-2 border-orange-500 font-semibold py-4 px-8 rounded-xl hover:bg-orange-50 transition-all duration-200">
                                {heroData.buttons.secondary}
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
                            {heroData.trustIndicators.map((indicator, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>{indicator}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative">
                        <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                            <img src={heroData.heroImage || "/placeholder.svg"} alt="Students learning online" className="w-full h-80 object-cover rounded-2xl" />

                            {/* Floating Stats */}
                            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-2xl shadow-lg">
                                <div className="text-2xl font-bold">{heroData.stats.passRate}</div>
                                <div className="text-sm">Pass Rate</div>
                            </div>

                            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 rounded-2xl shadow-lg">
                                <div className="text-2xl font-bold">{heroData.stats.students}</div>
                                <div className="text-sm">Students</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
