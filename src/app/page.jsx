import { Layout } from "./layout/layout";

export default function Home() {
    return (
        <Layout>
            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 py-20 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                                Premium Layout
                                <span className="text-orange-500"> Components</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                                Beautiful, responsive, and accessible layout components built with Next.js and Tailwind CSS. Perfect for modern web applications and SaaS platforms.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <button className="rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                                    Get Started
                                </button>
                                <button className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-orange-500 transition-colors duration-200">
                                    Learn more <span aria-hidden="true">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 sm:py-32 bg-white dark:bg-gray-900">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Everything you need</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Our layout system provides all the components you need to build modern, responsive applications.</p>
                        </div>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                                {[
                                    {
                                        name: "Responsive Design",
                                        description: "Mobile-first approach with seamless adaptation across all device sizes.",
                                    },
                                    {
                                        name: "Dark Mode Support",
                                        description: "Built-in dark mode with smooth transitions and consistent theming.",
                                    },
                                    {
                                        name: "Premium UI/UX",
                                        description: "Clean, minimalist design with attention to typography and spacing.",
                                    },
                                ].map((feature) => (
                                    <div key={feature.name} className="flex flex-col">
                                        <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                                                <div className="h-6 w-6 text-white" aria-hidden="true" />
                                            </div>
                                            {feature.name}
                                        </dt>
                                        <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                                            <p className="flex-auto">{feature.description}</p>
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
