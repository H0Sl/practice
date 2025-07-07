import styles from './TaskStats.module.css';

interface TaskStatsProps {
  count: number;
  onClearCompleted: () => void;
}

export default function TaskStats({ count, onClearCompleted }: TaskStatsProps) {
  return (
    <div className={styles.stats}>
      <span className={styles.count}>
        {count} {count === 1 ? 'task' : 'tasks'} left
      </span>
      <button 
        onClick={onClearCompleted}
        className={styles.clearButton}
      >
        Clear completed
      </button>
    </div>
  );
}