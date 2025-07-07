import styles from './Tabs.module.css';

interface TabsProps {
  activeIndex: number;
  onChange: (index: number) => void;
}

const tabs = ['All', 'Active', 'Completed'];

export default function Tabs({ activeIndex, onChange }: TabsProps) {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`${styles.tab} ${index === activeIndex ? styles.active : ''}`}
          onClick={() => onChange(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}