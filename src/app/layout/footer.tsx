import Link from "next/link"
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
  Star,
  Users,
  Award,
  Zap,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const footerNavigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Press Kit", href: "/press" },
    { name: "Contact", href: "/contact" },
    { name: "Partners", href: "/partners" },
  ],
  products: [
    { name: "Web Development", href: "/products/web" },
    { name: "Mobile Apps", href: "/products/mobile" },
    { name: "UI/UX Design", href: "/products/design" },
    { name: "API Services", href: "/products/api" },
    { name: "Consulting", href: "/products/consulting" },
    { name: "Enterprise", href: "/products/enterprise" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api-docs" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Templates", href: "/templates" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Community", href: "/community" },
    { name: "Status Page", href: "/status" },
    { name: "Bug Reports", href: "/bugs" },
    { name: "Feature Requests", href: "/features" },
    { name: "Contact Support", href: "/support" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
    { name: "Security", href: "/security" },
    { name: "Compliance", href: "/compliance" },
  ],
}

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/layoutpro",
    icon: Twitter,
    followers: "12.5K",
  },
  {
    name: "GitHub",
    href: "https://github.com/layoutpro",
    icon: Github,
    followers: "8.2K",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/layoutpro",
    icon: Linkedin,
    followers: "15.3K",
  },
  {
    name: "Email",
    href: "mailto:hello@layoutpro.com",
    icon: Mail,
    followers: "Newsletter",
  },
]

const stats = [
  { label: "Happy Clients", value: "10,000+", icon: Users },
  { label: "Projects Completed", value: "25,000+", icon: Award },
  { label: "Years Experience", value: "8+", icon: Star },
  { label: "Team Members", value: "50+", icon: Heart },
]

const features = [
  { name: "99.9% Uptime", icon: Zap },
  { name: "24/7 Support", icon: Shield },
  { name: "Global CDN", icon: MapPin },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Stay in the loop</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Get the latest updates, tutorials, and exclusive content delivered to your inbox.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <Shield className="h-4 w-4" />
                <span>No spam, unsubscribe anytime</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                />
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="h-6 w-6 text-orange-500 mr-2" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 group mb-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-lg">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">LayoutPro</span>
                <div className="text-sm text-orange-500 font-medium">Premium Components</div>
              </div>
            </Link>

            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Building beautiful, responsive layouts with modern design principles. Trusted by thousands of developers
              and companies worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4 mr-3 text-orange-500" />
                hello@layoutpro.com
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Phone className="h-4 w-4 mr-3 text-orange-500" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4 mr-3 text-orange-500" />
                San Francisco, CA
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2">
              {features.map((feature) => (
                <Badge
                  key={feature.name}
                  variant="secondary"
                  className="bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300"
                >
                  <feature.icon className="h-3 w-3 mr-1" />
                  {feature.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {footerNavigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-3 mb-6">
              {footerNavigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Follow us for updates</h3>
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
                  >
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/20 transition-colors duration-200">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-sm font-medium">{item.name}</div>
                      <div className="text-xs text-gray-400">{item.followers}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by the LayoutPro team
              </p>
              <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} LayoutPro. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
