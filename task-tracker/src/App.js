import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "my first task",
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: "my second task",
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: "my third task",
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
  ])
  const [showAdd, setShowAdd] = useState(false);

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task ))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask])
    console.log(task)
  }

  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={() => setShowAdd(!showAdd)} />
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
    </div>
  );
}

export default App;
