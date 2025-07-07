import type { Task } from './types/task';
import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className={styles.empty}>No tasks found</p>;
  }

  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <li key={task.id} className={styles.item}>
          <label className={styles.label}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              className={styles.checkbox}
            />
            <span className={`${styles.text} ${task.completed ? styles.completed : ''}`}>
              {task.text}
            </span>
          </label>
          <button 
            onClick={() => onDelete(task.id)}
            className={styles.deleteButton}
            aria-label="Delete task"
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}