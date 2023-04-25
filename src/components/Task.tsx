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
    handleChecked: (createdAt: string) => void;
}

export function Task({ taskList, deleteTask, handleChecked }: TaskProp) {



    return (
        <li className={styles.activeTasks}>
            {taskList.isCompleted ? (
                <>
                    <button
                        className={`${styles.button} ${ taskList.isCompleted ? styles.checkCompleted : styles.check }`} 
                        // className={`${styles.check} ${styles.button} ${styles.checkCompleted}`} 
                        onClick={() => handleChecked(taskList.createdAt)}>
                            <Check weight='bold' size={12}/>
                    </button>
                    <p className={`${styles.taskText} ${styles.completedText}`}>
                        { taskList.text }
                    </p>          
                </>
            ) : (
                <>
                    <button 
                        className={`${styles.check} ${styles.button}`} 
                        onClick={() => handleChecked(taskList.createdAt)}> 
                    </button>
                    <p className={styles.taskText}>
                        { taskList.text }
                    </p> 
                </>
   
            )}
            <button 
                className={`${styles.button} ${styles.trash}`} 
                onClick={() => deleteTask(taskList.createdAt)}>
                    <Trash size={20}/>
            </button>
        </li>
    )
}