import { Trash, Circle, Check } from 'phosphor-react'
import styles from './Task.module.css'

interface DataArray {  
    createdAt: string
    text: string
    isCompleted: boolean
}

interface TaskProp {
    taskList: DataArray
    deleteTask: (createdAt: string) => void;
}

export function Task({ taskList, deleteTask }: TaskProp) {


    return (
        <li className={styles.activeTasks}>
            <button className={styles.button}>
                <Circle className={styles.notCompleted} weight='bold' size={24}/>
            </button>
            <p className={styles.taskText}>{ taskList.text }</p>
            <button className={styles.button} onClick={() => deleteTask(taskList.createdAt)}>
                <Trash size={24}/>
            </button>
        </li>
    )
}