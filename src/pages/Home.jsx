import { Link } from 'react-router-dom'

const Home = () => {
  const services = [
    {
      id: 'payroll-software',
      title: 'Payroll Software',
      description: 'Streamline your payroll process with automated calculations, tax compliance, and direct deposit.',
      path: '/services/payroll-software',
      icon: '💰'
    },
    {
      id: 'performance-careers',
      title: 'Performance & Careers',
      description: 'Track employee performance, set goals, and manage career development paths.',
      path: '/services/performance-careers',
      icon: '📈'
    },
    {
      id: 'modern-hr',
      title: 'Modern HR',
      description: 'Comprehensive HR management solution for the digital workplace.',
      path: '/services/modern-hr',
      icon: '🚀'
    },
    {
      id: 'time-attendance',
      title: 'Time & Attendance',
      description: 'Accurate time tracking and attendance management for your workforce.',
      path: '/services/time-attendance',
      icon: '⏰'
    },
    {
      id: 'hiring-onboarding',
      title: 'Hiring & Onboarding',
      description: 'Simplify recruitment and create seamless onboarding experiences.',
      path: '/services/hiring-onboarding',
      icon: '👥'
    },
    {
      id: 'timesheets-projects',
      title: 'Timesheets & Projects (PSA)',
      description: 'Professional services automation for project-based businesses.',
      path: '/services/timesheets-projects',
      icon: '📊'
    },
    {
      id: 'learning-management',
      title: 'Learning Management',
      description: 'Create, deliver, and track employee training and development programs.',
      path: '/services/learning-management',
      icon: '🎓'
    },
    {
      id: 'marketplace',
      title: 'Marketplace',
      description: 'Access a wide range of HR tools and integrations in one place.',
      path: '/services/marketplace',
      icon: '🛒'
    },
    {
      id: 'data-protection',
      title: 'Data Protection Addendum',
      description: 'Ensure compliance with data protection regulations and secure employee information.',
      path: '/services/data-protection',
      icon: '🔒'
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Top Banner */}
      <div className="relative h-[500px] bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Transform Your HR Operations
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              All-in-one HR platform designed for modern businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/register"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to HR NEXUS
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              HR NEXUS is a comprehensive human resources management platform that empowers businesses
              to manage their workforce efficiently. From payroll to performance management, we provide
              all the tools you need to streamline your HR operations and focus on what matters most—your people.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 transition-colors">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Easy to Use</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Intuitive interface designed for HR professionals and employees alike
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 transition-colors">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Powerful Features</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive tools to manage every aspect of your HR operations
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 transition-colors">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Secure & Compliant</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enterprise-grade security with full compliance support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore our comprehensive suite of HR solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {service.description}
                </p>
                <Link
                  to={service.path}
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

