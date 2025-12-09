import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import plannerImg from '/images/planner.png';

const Home = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  const handleGetStarted = (e) => {
    e.preventDefault()
    if (user) {
      navigate('/product')
    } else {
      navigate('/register')
    }
  }
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
      <div className="relative h-[500px] bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white z-10 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-in-left">
              Transform Your HR Operations
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 animate-slide-in-right">
              All-in-one HR platform designed for modern businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start animate-fade-in-up animation-delay-800 mt-7">

  
  <Link
    to="/contact"
    className="bg-blue-600 hover:bg-blue-700 text-center text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[200px]"
  >
    Get Started
 </Link>

  <Link
    to="/pricing"
    className="bg-white hover:bg-blue-700 text-center text-black px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[200px]"
>
    Pricing
  </Link>

</div>

          </div>
        </div>
        
      </div>

      {/* Planner Introduction Section */}
      <section className="relative py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
    style={{ backgroundImage: "url('/images/planner.png')" }}
  ></div>

  {/* Light Overlay (reduced opacity so image stays visible) */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/40 dark:from-gray-900/50 dark:via-gray-900/30 dark:to-gray-900/50 z-0"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 animate-fade-in-up">
      <div className="inline-block mb-4 animate-bounce-slow">
       
      </div>

   <div className="bg-gray-100 dark:bg-gray-800 py-10 px-4 rounded-xl">

  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
    Introducing Our First Product
  </h2>

  <h3 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
    Planner
  </h3>

  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
    Our <strong className="text-gray-900 dark:text-white">Product Planner</strong> is a powerful task management tool designed to help
    you organize and track your projects efficiently. Streamline your workflow, collaborate with your team,
    and achieve your goals with ease.
  </p>

</div>
</div>


    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-2 animate-fade-in-up animation-delay-200">
        <div className="text-3xl mb-3">✅</div>
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Create Tasks
        </h4>
        <p className="text-gray-600 dark:text-gray-300">
          Add tasks with titles, descriptions, and assign them to team members
        </p>
      </div>

      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-2 animate-fade-in-up animation-delay-400">
        <div className="text-3xl mb-3">🔄</div>
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Organize Workflow
        </h4>
        <p className="text-gray-600 dark:text-gray-300">
          Manage tasks across three stages - Upcoming, Ongoing, and Completed
        </p>
      </div>

      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-2 animate-fade-in-up animation-delay-600">
        <div className="text-3xl mb-3">👥</div>
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Team Collaboration
        </h4>
        <p className="text-gray-600 dark:text-gray-300">
          Assign tasks to team members and track progress in real-time
        </p>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-800">
      <button
        onClick={handleGetStarted}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 text-center shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[200px]"
      >
        Get Started
      </button>

      <Link
        to="/pricing"
        className="bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 text-center w-full sm:w-auto min-w-[200px]"
      >
        Pricing
      </Link>
    </div>

  </div>
</section>


      {/* Introduction Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
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
            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 animate-fade-in-up animation-delay-200">
              <div className="text-4xl mb-4 animate-bounce-slow">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Easy to Use</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Intuitive interface designed for HR professionals and employees alike
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 animate-fade-in-up animation-delay-400">
              <div className="text-4xl mb-4 animate-bounce-slow">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Powerful Features</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive tools to manage every aspect of your HR operations
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 animate-fade-in-up animation-delay-600">
              <div className="text-4xl mb-4 animate-bounce-slow">🔒</div>
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
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore our comprehensive suite of HR solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="text-4xl mb-4 transform hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {service.description}
                </p>
                <Link
                  to={service.path}
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center group"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

