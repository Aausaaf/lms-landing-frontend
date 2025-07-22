import { problemsData } from "../constants/data";

export default function ProblemStatement() {
    const getColorClasses = (color) => {
        const colors = {
            error: "bg-red-50 text-red-600 border-red-200",
            warning: "bg-yellow-50 text-yellow-600 border-yellow-200",
        };
        return colors[color] || colors.error;
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{problemsData.title}</h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">{problemsData.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {problemsData.problems.map((problem, index) => (
                        <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg  border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${getColorClasses(problem.color)}`}>
                                <span className="text-3xl">{problem.icon}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{problem.title}</h3>
                            <p className="text-gray-600 mb-6">{problem.description}</p>
                            <div className={`text-2xl font-bold ${problem.color === "error" ? "text-red-600" : "text-yellow-600"}`}>{problem.stat}</div>
                        </div>
                    ))}
                </div>

                {/* Cost Calculator */}
                <div className="bg-white rounded-2xl shadow-lg  p-8 lg:p-12">
                    <h3 className="text-2xl font-bold text-center mb-8">{problemsData.calculator.title}</h3>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-3 text-gray-700">Current Coaching Fees (₹)</label>
                                <input
                                    type="number"
                                    placeholder={problemsData.calculator.traditionalCost.toLocaleString()}
                                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                                />
                            </div>
                            <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border-2 border-orange-200">
                                <div className="text-sm text-gray-600 mb-2">With EduPrime, you save:</div>
                                <div className="text-3xl font-bold text-orange-600 mb-1">₹{problemsData.calculator.savings.toLocaleString()}</div>
                                <div className="text-sm text-green-600 font-medium">{problemsData.calculator.savingsPercent}% cost reduction</div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-6xl mb-6">💰</div>
                            <h4 className="text-xl font-semibold mb-4">Our Solution</h4>
                            <div className="text-4xl font-bold text-orange-600 mb-4">₹{problemsData.calculator.ourCost.toLocaleString()}</div>
                            <p className="text-gray-600">Complete course + lifetime access + doubt support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
