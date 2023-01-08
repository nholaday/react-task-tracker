import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [tasks, setTasks] = useState([])
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
    }
    getTasks();
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5001/tasks')
    const data = await res.json()
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5001/tasks/${id}`)
    const data = await res.json()
    return data
  }

  const removeTask = async (id) => {
    await fetch(`http://localhost:5001/tasks/${id}`, {method: 'DELETE'})
    setTasks(tasks.filter((task) => task.id != id))
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    let remValue = {reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5001/tasks/${id}`, {
      method: 'PATCH', 
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(remValue)
    })

    const data = await res.json()
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task ))
  }

  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5001/tasks/`, {
      method: 'POST', 
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(task)
    })
    const newTask = await res.json()
    setTasks([...tasks, newTask])
  }

  return (
      <div className="container">
        <Header title="Task Tracker" showAdd={showAdd} onAdd={() => setShowAdd(!showAdd)} />
        {showAdd && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            removeTask={removeTask}
            toggleReminder={toggleReminder}
          />
        ) : (
          "Congratulations, no tasks!"
        )}
        <Footer />
      </div>
  );
}

export default App;
