import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const WelcomeModal = () => {
  // Initialize state based on localStorage immediately
  const [isOpen, setIsOpen] = useState(() => {
    // Check localStorage synchronously during initialization
    if (typeof window !== 'undefined') {
      const hasSeenModal = localStorage.getItem('hasSeenWelcomeModal')
      return !hasSeenModal // true if not seen, false if seen
    }
    return false
  })
  const { theme } = useTheme()

  // Remove the useEffect since we're initializing state directly
  // useEffect(() => {
  //   const hasSeenModal = localStorage.getItem('hasSeenWelcomeModal')
  //   if (!hasSeenModal) {
  //     setIsOpen(true)
  //   }
  // }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('hasSeenWelcomeModal', 'true')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full p-6 md:p-8 transform transition-all">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="mt-4">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Welcome to HR NEXUS
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Your Complete HR Management Solution
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span className="text-2xl mr-2">📋</span>
                  Product Planner Feature
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Our <strong>Product Planner</strong> is a powerful task management tool designed to help you
                  organize and track your projects efficiently. Here's what you can do:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Create Tasks:</strong> Add tasks with titles, descriptions, and assign them to team members</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Organize Workflow:</strong> Manage tasks across three stages - Upcoming, Ongoing, and Completed</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Drag & Drop:</strong> Easily move tasks between columns by dragging and dropping</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Edit & Delete:</strong> Update task details or remove tasks as needed</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Team Collaboration:</strong> Assign tasks to team members and track progress</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Note:</strong> To access the Product Planner and other premium features, please 
                  <Link to="/register" className="text-blue-600 dark:text-blue-400 hover:underline mx-1">
                    create an account
                  </Link>
                  or
                  <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:underline mx-1">
                    sign in
                  </Link>
                  if you already have one.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link
                to="/register"
                onClick={handleClose}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/product"
                onClick={handleClose}
                className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                View Planner
              </Link>
              <button
                onClick={handleClose}
                className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeModal

