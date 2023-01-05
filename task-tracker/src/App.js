import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "my first task",
        day: 'Feb 5th at 2:30pm',
        remider: true,
    },
    {
        id: 2,
        text: "my second task",
        day: 'Feb 5th at 2:30pm',
        remider: true,
    },
    {
        id: 3,
        text: "my third task",
        day: 'Feb 5th at 2:30pm',
        remider: true,
    },
  ])

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id != id))
  }

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} removeTask={removeTask}/>
    </div>
  );
}

export default App;
