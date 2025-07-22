import { contactData } from "../constants/data";

export default function ContactSupport() {
    const getColorClasses = (color) => {
        const colors = {
            primary: "bg-blue-50 text-blue-600",
            accent: "bg-purple-50 text-purple-600",
            secondary: "bg-green-50 text-green-600",
        };
        return colors[color] || colors.primary;
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{contactData.title}</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">{contactData.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {contactData.methods.map((method, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${getColorClasses(method.color)}`}>
                                <span className="text-3xl">{method.icon}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{method.type}</h3>
                            <p className="text-gray-600 mb-4">{method.description}</p>
                            <div className="text-sm text-blue-600 font-medium mb-6">{method.stat}</div>
                            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-200">
                                {method.action}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Live Chat Widget */}
                <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-xl p-6 border border-blue-200">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="font-semibold text-gray-900">Live Support</span>
                            <span className="text-sm text-gray-600">• 247 agents online</span>
                        </div>
                        <button className="text-gray-500 hover:text-gray-700">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
                        <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">S</div>
                            <div className="bg-white rounded-2xl p-4 max-w-xs shadow-sm">
                                <p className="text-sm text-gray-700">Hi! How can I help you today? I'm here to answer any questions about our courses.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-3">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl hover:shadow-lg transition-all duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
