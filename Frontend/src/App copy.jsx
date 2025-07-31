import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Check, Star, Filter, Search } from 'lucide-react';

function App() {
  // State management - Core React concept
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all'); // all, completed, pending, important
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect for side effects - simulating data persistence
  useEffect(() => {
    // In a real app, this would be API calls
    const savedTasks = [
      { id: 1, text: 'Learn React hooks', completed: false, important: true },
      { id: 2, text: 'Build a portfolio website', completed: false, important: false },
      { id: 3, text: 'Practice CSS Grid', completed: true, important: false },
      { id: 4, text: 'Set up VS Code properly', completed: true, important: true }
    ];
    setTasks(savedTasks);
  }, []);

  // Event handlers - Modern JavaScript practices
  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      const task = {
        id: Date.now(), // Simple ID generation
        text: newTask.trim(),
        completed: false,
        important: false
      };
      setTasks(prev => [...prev, task]); // Immutable state updates
      setNewTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask(e);
    }
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const toggleImportant = (id) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, important: !task.important } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  // Computed values - React performance concepts
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.text.toLowerCase().includes(searchTerm.toLowerCase());
    
    switch (filter) {
      case 'completed':
        return task.completed && matchesSearch;
      case 'pending':
        return !task.completed && matchesSearch;
      case 'important':
        return task.important && matchesSearch;
      default:
        return matchesSearch;
    }
  });

  const taskStats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    pending: tasks.filter(t => !t.completed).length,
    important: tasks.filter(t => t.important).length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Modern CSS with Tailwind - Glassmorphism effect */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header with modern design */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Task Manager Pro
            </h1>
            <p className="text-gray-600">Master your productivity with modern React & Vite</p>
            <div className="mt-2 text-sm text-green-600 font-medium">
              ✅ Tailwind CSS is working perfectly!
            </div>
          </div>

          {/* Stats Cards - Component composition */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total', value: taskStats.total, color: 'blue', icon: '📋' },
              { label: 'Pending', value: taskStats.pending, color: 'yellow', icon: '⏳' },
              { label: 'Completed', value: taskStats.completed, color: 'green', icon: '✅' },
              { label: 'Important', value: taskStats.important, color: 'red', icon: '⭐' }
            ].map((stat) => (
              <div key={stat.label} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{stat.icon}</span>
                  <div className={`text-2xl font-bold ${
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'yellow' ? 'text-yellow-600' :
                    stat.color === 'green' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.value}
                  </div>
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main Task Interface */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
            {/* Add Task Input - Controlled components */}
            <div className="mb-6">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Add a new task... (Press Enter or click Add)"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700"
                  />
                </div>
                <button
                  onClick={addTask}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center gap-2 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Plus size={20} />
                  Add
                </button>
              </div>
            </div>

            {/* Search and Filter - Modern UX patterns */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search tasks..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              
              <div className="flex gap-2 flex-wrap">
                {['all', 'pending', 'completed', 'important'].map((filterType) => (
                  <button
                    key={filterType}
                    onClick={() => setFilter(filterType)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 ${
                      filter === filterType
                        ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                    }`}
                  >
                    <Filter size={16} />
                    {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Task List - List rendering and conditional rendering */}
            <div className="space-y-3">
              {filteredTasks.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <div className="text-6xl mb-4">
                    {searchTerm || filter !== 'all' ? '🔍' : '📝'}
                  </div>
                  <p className="text-lg font-medium mb-2">
                    {searchTerm || filter !== 'all' 
                      ? 'No tasks match your criteria' 
                      : 'No tasks yet. Add your first task above!'}
                  </p>
                  <p className="text-sm text-gray-400">
                    {searchTerm || filter !== 'all' 
                      ? 'Try adjusting your search or filter' 
                      : 'Start by adding a task to get organized'}
                  </p>
                </div>
              ) : (
                filteredTasks.map((task, index) => (
                  <div
                    key={task.id}
                    className={`group flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 hover:shadow-md transform hover:scale-[1.02] ${
                      task.completed
                        ? 'bg-green-50 border-green-200'
                        : task.important
                        ? 'bg-red-50 border-red-200'
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {/* Checkbox */}
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                        task.completed
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'border-gray-300 hover:border-green-400'
                      }`}
                    >
                      {task.completed && <Check size={16} />}
                    </button>

                    {/* Task Text */}
                    <span
                      className={`flex-1 transition-all duration-200 ${
                        task.completed
                          ? 'line-through text-gray-500'
                          : 'text-gray-800'
                      }`}
                    >
                      {task.text}
                    </span>

                    {/* Badges */}
                    <div className="flex gap-2">
                      {task.important && (
                        <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full font-medium">
                          Important
                        </span>
                      )}
                      {task.completed && (
                        <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full font-medium">
                          Done
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button
                        onClick={() => toggleImportant(task.id)}
                        className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                          task.important
                            ? 'text-red-500 bg-red-100'
                            : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                        }`}
                        title={task.important ? 'Remove from important' : 'Mark as important'}
                      >
                        <Star size={16} fill={task.important ? 'currentColor' : 'none'} />
                      </button>
                      
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200 hover:scale-110"
                        title="Delete task"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Footer with learning notes */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p className="mb-1">🚀 Built with React + Vite + Tailwind CSS</p>
            <p className="flex items-center justify-center gap-2">
              <span>Learning:</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">Hooks</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-xs">Components</span>
              <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs">Modern CSS</span>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded text-xs">VS Code</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

