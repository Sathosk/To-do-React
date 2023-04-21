import { Trash, Circle, Check } from 'phosphor-react'
import styles from './Task.module.css'

export function Task() {
    return (
        <div className={styles.activeTasks}>
            <button className={styles.button}>
                <Circle className={styles.notCompleted} weight='bold' size={20}/>
            </button>
            <p className={styles.taskText}>Test test test test</p>
            <button className={styles.button}>
                <Trash size={24}/>
            </button>
        </div>
    )
}