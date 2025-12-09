import { Link } from 'react-router-dom'


const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 10 employees',
        'Basic HR management',
        'Employee self-service portal',
        'Basic reporting',
        'Email support',
        'Mobile app access'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Monthly',
      price: '$29',
      period: 'per month',
      description: 'Ideal for growing businesses',
      features: [
        'Unlimited employees',
        'Full HR suite access',
        'Payroll processing',
        'Advanced reporting & analytics',
        'Priority support',
        'API access',
        'Custom integrations',
        'Training & onboarding',
        'Product Planner access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Yearly',
      price: '$290',
      period: 'per year',
      description: 'Best value for established organizations',
      features: [
        'Unlimited employees',
        'Full HR suite access',
        'Payroll processing',
        'Advanced reporting & analytics',
        'Priority support',
        'API access',
        'Custom integrations',
        'Training & onboarding',
        'Product Planner access',
        'Dedicated account manager',
        '2 months free (save $58)'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Choose the plan that's right for your organization. All plans include a 14-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 relative ${
                  plan.popular
                    ? 'ring-2 ring-blue-600 dark:ring-blue-400 transform scale-105'
                    : ''
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                    {plan.period !== 'forever' && (
                      <span className="text-gray-600 dark:text-gray-400">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={plan.cta === 'Start Free Trial' ? '/contact' : '/contact'}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Can I change plans later?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start
                of your next billing cycle.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                What happens after the free trial?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                After your 14-day free trial, you'll be automatically enrolled in the plan you selected.
                You can cancel anytime during the trial period with no charges.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Do you offer discounts for annual plans?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! Our yearly plan saves you 2 months compared to monthly billing, which is a $58 savings.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Is there a setup fee?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                No, there are no setup fees or hidden costs. You only pay the monthly or yearly subscription fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Start your free trial today. No credit card required.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing

