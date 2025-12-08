import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WelcomeModal from './components/WelcomeModal'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Planner from './pages/Planner'
import PayrollSoftware from './pages/services/PayrollSoftware'
import PerformanceCareers from './pages/services/PerformanceCareers'
import ModernHR from './pages/services/ModernHR'
import TimeAttendance from './pages/services/TimeAttendance'
import HiringOnboarding from './pages/services/HiringOnboarding'
import TimesheetsProjects from './pages/services/TimesheetsProjects'
import LearningManagement from './pages/services/LearningManagement'
import Marketplace from './pages/services/Marketplace'
import DataProtection from './pages/services/DataProtection'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <WelcomeModal />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Planner />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/services/payroll-software" element={<PayrollSoftware />} />
              <Route path="/services/performance-careers" element={<PerformanceCareers />} />
              <Route path="/services/modern-hr" element={<ModernHR />} />
              <Route path="/services/time-attendance" element={<TimeAttendance />} />
              <Route path="/services/hiring-onboarding" element={<HiringOnboarding />} />
              <Route path="/services/timesheets-projects" element={<TimesheetsProjects />} />
              <Route path="/services/learning-management" element={<LearningManagement />} />
              <Route path="/services/marketplace" element={<Marketplace />} />
              <Route path="/services/data-protection" element={<DataProtection />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

