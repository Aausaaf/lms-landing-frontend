import { problemsData } from "../constants/data";

export default function ProblemStatement() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900" id="problems">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-6">{problemsData.title}</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">{problemsData.subtitle}</p>
                </div>

                {/* Problems Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {problemsData.problems.map((problem, index) => (
                        <div
                            key={index}
                            className="shadow-sm text-center p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-300 "
                        >
                            <div
                                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                                    problem.color === "error"
                                        ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                                        : "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400"
                                }`}
                            >
                                <span className="text-2xl" aria-hidden="true">
                                    {<problem.icon />}
                                </span>
                            </div>
                            <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">{problem.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{problem.description}</p>
                            <div className={`text-2xl font-medium ${problem.color === "error" ? "text-red-600 dark:text-red-400" : "text-yellow-600 dark:text-yellow-400"}`}>{problem.stat}</div>
                        </div>
                    ))}
                </div>

                {/* Cost Calculator */}
                <div className="bg-white shadow-sm dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-8 lg:p-12">
                    <h3 className="text-2xl font-medium text-center mb-8 text-gray-900 dark:text-white">{problemsData.calculator.title}</h3>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">Current Coaching Fees (₹)</label>
                                <input
                                    type="number"
                                    placeholder={problemsData.calculator.traditionalCost.toLocaleString()}
                                    className="w-full p-4 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    aria-label="Enter current coaching fees"
                                />
                            </div>
                            <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">With EduPrime, you save:</div>
                                <div className="text-3xl font-medium text-orange-600 dark:text-orange-400 mb-1">₹{problemsData.calculator.savings.toLocaleString()}</div>
                                <div className="text-sm text-green-600 dark:text-green-400 font-medium">{problemsData.calculator.savingsPercent}% cost reduction</div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-6xl mb-6" aria-hidden="true">
                                💰
                            </div>
                            <h4 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">Our Solution</h4>
                            <div className="text-4xl font-medium text-orange-600 dark:text-orange-400 mb-4">₹{problemsData.calculator.ourCost.toLocaleString()}</div>
                            <p className="text-gray-600 dark:text-gray-300">Complete course + lifetime access + doubt support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
