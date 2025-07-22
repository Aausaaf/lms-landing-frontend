import { trustBadgesData } from "../constants/data";

export default function TrustBadges() {
    const getColorClasses = (color) => {
        const colors = {
            primary: "bg-blue-50 text-blue-600",
            accent: "bg-purple-50 text-purple-600",
            secondary: "bg-green-50 text-green-600",
            warning: "bg-orange-50 text-orange-600",
        };
        return colors[color] || colors.primary;
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-xl p-8 lg:p-12 border border-blue-100">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{trustBadgesData.title}</h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
                        {trustBadgesData.badges.map((badge, index) => (
                            <div key={index} className="p-6">
                                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${getColorClasses(badge.color)}`}>
                                    <span className="text-3xl">{badge.icon}</span>
                                </div>
                                <div
                                    className={`text-3xl font-bold mb-2 ${
                                        badge.color === "primary" ? "text-blue-600" : badge.color === "accent" ? "text-purple-600" : badge.color === "secondary" ? "text-green-600" : "text-orange-600"
                                    }`}
                                >
                                    {badge.value}
                                </div>
                                <div className="text-gray-600">{badge.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Security Badges */}
                    <div className="pt-8 border-t border-blue-200">
                        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                            {trustBadgesData.securityFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
