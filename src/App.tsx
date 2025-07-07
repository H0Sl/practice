import { useState } from 'react';
import { useTasks } from './components/hooks/useTasks';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';
import Tabs from './components/Tabs';
import styles from './App.module.css';

function App() {
  const { tasks, addTask, toggleTask, deleteTask, clearCompleted } = useTasks();
  const [tabIndex, setTabIndex] = useState(0);

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  const handleTabChange = (newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <h1 className={styles.title}>ToDo App</h1>

        <TaskInput onAddTask={addTask} />

        <Tabs activeIndex={tabIndex} onChange={handleTabChange} />

        {tabIndex === 0 && <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />}
        {tabIndex === 1 && <TaskList tasks={pendingTasks} onToggle={toggleTask} onDelete={deleteTask} />}
        {tabIndex === 2 && <TaskList tasks={completedTasks} onToggle={toggleTask} onDelete={deleteTask} />}

        <TaskStats count={pendingTasks.length} onClearCompleted={clearCompleted} />
      </div>
    </div>
  );
}

export default App;
