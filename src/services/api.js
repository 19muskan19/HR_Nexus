import axios from 'axios'

const API_BASE_URL = 'http://localhost:8080/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Task API functions
export const taskAPI = {
  // Get all tasks
  getAllTasks: async () => {
    try {
      const response = await api.get('/tasks')
      return response.data
    } catch (error) {
      console.error('Error fetching tasks:', error)
      throw error
    }
  },

  // Get task by ID
  getTaskById: async (id) => {
    try {
      const response = await api.get(`/tasks/${id}`)
      return response.data
    } catch (error) {
      console.error('Error fetching task:', error)
      throw error
    }
  },

  // Create a new task
  createTask: async (task) => {
    try {
      const response = await api.post('/tasks', {
        title: task.title,
        description: task.description,
        assignedTo: task.assignedTo,
        status: task.status || 'UPCOMING'
      })
      return response.data
    } catch (error) {
      console.error('Error creating task:', error)
      throw error
    }
  },

  // Update a task
  updateTask: async (id, task) => {
    try {
      const response = await api.put(`/tasks/${id}`, {
        title: task.title,
        description: task.description,
        assignedTo: task.assignedTo,
        status: task.status
      })
      return response.data
    } catch (error) {
      console.error('Error updating task:', error)
      throw error
    }
  },

  // Update task status only
  updateTaskStatus: async (id, status) => {
    try {
      const response = await api.patch(`/tasks/${id}/status`, {
        status: status
      })
      return response.data
    } catch (error) {
      console.error('Error updating task status:', error)
      throw error
    }
  },

  // Delete a task
  deleteTask: async (id) => {
    try {
      await api.delete(`/tasks/${id}`)
      return true
    } catch (error) {
      console.error('Error deleting task:', error)
      throw error
    }
  },

  // Get tasks by status
  getTasksByStatus: async (status) => {
    try {
      const response = await api.get(`/tasks/status/${status}`)
      return response.data
    } catch (error) {
      console.error('Error fetching tasks by status:', error)
      throw error
    }
  }
}

export default api



