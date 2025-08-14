import { contactData } from "../constants/data";

export default function ContactSupport() {
    return (
        <section className="py-20 bg-white dark:bg-gray-800" id="contact">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-6">{contactData.title}</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">{contactData.subtitle}</p>
                </div>

                {/* Contact Methods */}
                <div className="grid md:grid-cols-3 gap-8">
                    {contactData.methods.map((method, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 shadow-sm dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 p-8 text-center hover:border-orange-200 dark:hover:border-orange-700 transition-all duration-300"
                        >
                            <div
                                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                                    method.color === "primary"
                                        ? "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
                                        : method.color === "accent"
                                        ? "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                                        : "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                                }`}
                            >
                                <span className="text-2xl" aria-hidden="true">
                                    {<method.icon />}
                                </span>
                            </div>
                            <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">{method.type}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{method.description}</p>
                            <div className="text-sm text-orange-600 dark:text-orange-400 font-medium mb-6">{method.stat}</div>
                            <button
                                className="w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
                                aria-label={`${method.action} for ${method.type}`}
                            >
                                {method.action}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Live Chat Widget */}
                <div className="mt-16 bg-gradient-to-r from-orange-50 to-orange-100 shadow-sm dark:from-gray-700 dark:to-gray-600 rounded-xl border border-orange-200 dark:border-gray-600 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></div>
                            <span className="font-medium text-gray-900 dark:text-white">Live Support</span>
                            <span className="text-sm text-gray-600 dark:text-gray-300">• 247 agents online</span>
                        </div>
                        <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" aria-label="Close chat widget">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
                        <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-orange-600 dark:bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium">S</div>
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 max-w-xs border border-gray-100 dark:border-gray-700">
                                <p className="text-sm text-gray-700 dark:text-gray-300">{`Hi! How can I help you today? I'm here to answer any questions about our courses.`}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-3">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="flex-1 px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            aria-label="Type your message"
                        />
                        <button
                            className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white px-4 py-3 rounded-lg transition-all duration-200"
                            aria-label="Send message"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
