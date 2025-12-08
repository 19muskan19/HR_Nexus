import { useState, useEffect } from 'react'
import { taskAPI } from '../services/api'

const Planner = () => {
  const [tasks, setTasks] = useState([])
  const [editingTask, setEditingTask] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    assignedTo: ''
  })

  const users = ['John Doe', 'Jane Smith', 'Mike Johnson']

  // Fetch all tasks on component mount
  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      setLoading(true)
      setError('')
      const fetchedTasks = await taskAPI.getAllTasks()
      setTasks(fetchedTasks)
    } catch (err) {
      setError('Failed to load tasks. Please make sure the backend server is running.')
      console.error('Error fetching tasks:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAddTask = async (e) => {
    e.preventDefault()
    if (!formData.title.trim() || !formData.description.trim() || !formData.assignedTo) {
      alert('Please fill in all fields')
      return
    }

    try {
      setLoading(true)
      setError('')
      const newTask = {
        title: formData.title,
        description: formData.description,
        assignedTo: formData.assignedTo,
        status: 'UPCOMING'
      }
      
      const createdTask = await taskAPI.createTask(newTask)
      setTasks([...tasks, createdTask])
      setFormData({ title: '', description: '', assignedTo: '' })
    } catch (err) {
      setError('Failed to create task. Please try again.')
      console.error('Error creating task:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleEditTask = (task) => {
    setEditingTask(task)
    setFormData({
      title: task.title,
      description: task.description,
      assignedTo: task.assignedTo
    })
  }

  const handleUpdateTask = async (e) => {
    e.preventDefault()
    if (!formData.title.trim() || !formData.description.trim() || !formData.assignedTo) {
      alert('Please fill in all fields')
      return
    }

    try {
      setLoading(true)
      setError('')
      const updatedTask = {
        title: formData.title,
        description: formData.description,
        assignedTo: formData.assignedTo,
        status: editingTask.status
      }
      
      const result = await taskAPI.updateTask(editingTask.id, updatedTask)
      setTasks(tasks.map(task => task.id === editingTask.id ? result : task))
      setEditingTask(null)
      setFormData({ title: '', description: '', assignedTo: '' })
    } catch (err) {
      setError('Failed to update task. Please try again.')
      console.error('Error updating task:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteTask = async (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        setLoading(true)
        setError('')
        await taskAPI.deleteTask(taskId)
        setTasks(tasks.filter(task => task.id !== taskId))
      } catch (err) {
        setError('Failed to delete task. Please try again.')
        console.error('Error deleting task:', err)
      } finally {
        setLoading(false)
      }
    }
  }

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      setLoading(true)
      setError('')
      const updatedTask = await taskAPI.updateTaskStatus(taskId, newStatus.toUpperCase())
      setTasks(tasks.map(task => task.id === taskId ? updatedTask : task))
    } catch (err) {
      setError('Failed to update task status. Please try again.')
      console.error('Error updating task status:', err)
    } finally {
      setLoading(false)
    }
  }

  const cancelEdit = () => {
    setEditingTask(null)
    setFormData({ title: '', description: '', assignedTo: '' })
  }

  // Drag and Drop handlers
  const [draggedTask, setDraggedTask] = useState(null)

  const handleDragStart = (e, task) => {
    setDraggedTask(task)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', e.target.outerHTML)
    e.target.style.opacity = '0.5'
  }

  const handleDragEnd = (e) => {
    e.target.style.opacity = '1'
    setDraggedTask(null)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDrop = async (e, targetStatus) => {
    e.preventDefault()
    if (draggedTask && draggedTask.status !== targetStatus.toUpperCase()) {
      await handleStatusChange(draggedTask.id, targetStatus)
    }
    setDraggedTask(null)
  }

  const getTasksByStatus = (status) => {
    // Map database status to display status
    const statusMap = {
      'upcoming': 'UPCOMING',
      'ongoing': 'ONGOING',
      'completed': 'COMPLETED'
    }
    const dbStatus = statusMap[status] || status.toUpperCase()
    return tasks.filter(task => task.status === dbStatus)
  }

  const columns = [
    { id: 'upcoming', title: 'Lined up Tasks / Upcoming', color: 'bg-yellow-100 dark:bg-yellow-900', dbStatus: 'UPCOMING' },
    { id: 'ongoing', title: 'Ongoing Tasks', color: 'bg-blue-100 dark:bg-blue-900', dbStatus: 'ONGOING' },
    { id: 'completed', title: 'Completed', color: 'bg-green-100 dark:bg-green-900', dbStatus: 'COMPLETED' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Task Planner</h1>

        {error && (
          <div className="mb-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {loading && !tasks.length && (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-400">Loading tasks...</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Column 1: Add Task Form */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-20">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {editingTask ? 'Edit Task' : 'Add New Task'}
              </h2>
              <form onSubmit={editingTask ? handleUpdateTask : handleAddTask} className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    disabled={loading}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
                    placeholder="Task title"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows="4"
                    value={formData.description}
                    onChange={handleInputChange}
                    disabled={loading}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
                    placeholder="Task description"
                  />
                </div>
                <div>
                  <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Assign To *
                  </label>
                  <select
                    id="assignedTo"
                    name="assignedTo"
                    required
                    value={formData.assignedTo}
                    onChange={handleInputChange}
                    disabled={loading}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
                  >
                    <option value="">Select a user</option>
                    {users.map((user, index) => (
                      <option key={index} value={user}>{user}</option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    {loading ? 'Processing...' : editingTask ? 'Update Task' : 'Add Task'}
                  </button>
                  {editingTask && (
                    <button
                      type="button"
                      onClick={cancelEdit}
                      disabled={loading}
                      className="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 disabled:opacity-50 text-gray-800 dark:text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Columns 2, 3, 4: Task Status Columns */}
          {columns.map((column) => (
            <div key={column.id} className="lg:col-span-1">
              <div
                className={`${column.color} rounded-lg p-4 min-h-[200px]`}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, column.dbStatus)}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {column.title}
                </h3>
                <div className="space-y-3">
                  {getTasksByStatus(column.id).map((task) => (
                    <div
                      key={task.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, task)}
                      onDragEnd={handleDragEnd}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-md transition-shadow cursor-move"
                    >
                      <div className="mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{task.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{task.description}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                          Assigned to: <span className="font-medium">{task.assignedTo}</span>
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditTask(task)}
                            disabled={loading}
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium disabled:opacity-50"
                            title="Edit task"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDeleteTask(task.id)}
                            disabled={loading}
                            className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-sm font-medium disabled:opacity-50"
                            title="Delete task"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                        {column.id !== 'completed' && (
                          <select
                            value={task.status}
                            onChange={(e) => handleStatusChange(task.id, e.target.value)}
                            disabled={loading}
                            className="text-xs border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
                          >
                            <option value="UPCOMING">Upcoming</option>
                            <option value="ONGOING">Ongoing</option>
                            <option value="COMPLETED">Completed</option>
                          </select>
                        )}
                      </div>
                    </div>
                  ))}
                  {getTasksByStatus(column.id).length === 0 && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                      No tasks in this column
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Planner
