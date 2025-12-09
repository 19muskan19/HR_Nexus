import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in on mount
    const storedUser = localStorage.getItem('currentUser')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error('Error parsing user data:', error)
        localStorage.removeItem('currentUser')
      }
    }
    setIsLoading(false)
  }, [])

  const login = (userData) => {
    setUser(userData)
    localStorage.setItem('currentUser', JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('currentUser')
  }

  const register = (userData) => {
    // Store all registered users in localStorage
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]')
    
    // Check if user already exists
    const userExists = existingUsers.find(u => u.email === userData.email)
    if (userExists) {
      throw new Error('User with this email already exists')
    }

    // Add new user to the list
    const newUser = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      password: userData.password, // In production, this should be hashed
      companyName: userData.companyName
    }
    
    existingUsers.push(newUser)
    localStorage.setItem('registeredUsers', JSON.stringify(existingUsers))
    
    // Automatically log in the user after registration
    login(newUser)
    
    return newUser
  }

  const authenticate = (email, password) => {
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]')
    const user = registeredUsers.find(u => u.email === email && u.password === password)
    
    if (user) {
      // Don't store password in currentUser
      const { password: _, ...userWithoutPassword } = user
      login(userWithoutPassword)
      return true
    }
    
    return false
  }

  const resetPassword = (email, newPassword) => {
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]')
    const userIndex = registeredUsers.findIndex(u => u.email === email)
    
    if (userIndex === -1) {
      throw new Error('User not found')
    }

    // Update the password
    registeredUsers[userIndex].password = newPassword
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers))

    // If the user is currently logged in, update their session
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
      try {
        const parsedUser = JSON.parse(currentUser)
        if (parsedUser.email === email) {
          // Update current user session (but don't store password in session)
          const { password: _, ...userWithoutPassword } = registeredUsers[userIndex]
          login(userWithoutPassword)
        }
      } catch (error) {
        console.error('Error updating current user session:', error)
      }
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register, authenticate, resetPassword, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

