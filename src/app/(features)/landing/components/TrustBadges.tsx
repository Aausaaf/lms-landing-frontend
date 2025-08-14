import { trustBadgesData } from "../constants/data";

export default function TrustBadges() {
    return (
        <section className="py-20 bg-white dark:bg-gray-800" id="trust-badges">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl border border-orange-100 dark:border-gray-600 p-8 lg:p-12 shadow-sm">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-4">{trustBadgesData.title}</h2>
                    </div>

                    {/* Trust Badges */}
                    <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
                        {trustBadgesData.badges.map((badge, index) => (
                            <div key={index} className="p-6">
                                <div
                                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                                        badge.color === "primary"
                                            ? "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
                                            : badge.color === "accent"
                                            ? "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                                            : badge.color === "secondary"
                                            ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                                            : "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400"
                                    }`}
                                >
                                    <span className="text-2xl" aria-hidden="true">
                                        <badge.icon />
                                    </span>
                                </div>
                                <div
                                    className={`text-3xl font-medium mb-2 ${
                                        badge.color === "primary"
                                            ? "text-orange-600 dark:text-orange-400"
                                            : badge.color === "accent"
                                            ? "text-purple-600 dark:text-purple-400"
                                            : badge.color === "secondary"
                                            ? "text-green-600 dark:text-green-400"
                                            : "text-yellow-600 dark:text-yellow-400"
                                    }`}
                                >
                                    {badge.value}
                                </div>
                                <div className="text-gray-600 dark:text-gray-300">{badge.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Security Features */}
                    <div className="pt-8 border-t border-orange-200 dark:border-gray-600">
                        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                            {trustBadgesData.securityFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
