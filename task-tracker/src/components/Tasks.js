import Task from './Task'

const Tasks = ({ tasks, removeTask, toggleReminder }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          removeTask={removeTask}
          toggleReminder={toggleReminder}
        />
      ))}
    </>
  );
}

export default Tasks