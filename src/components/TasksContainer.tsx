import { EmptyTask } from './EmptyTask'
import { Task } from './Task'
import styles from './Tasks.module.css'

interface DataArray {  
    createdAt: string
    text: string
    isCompleted: boolean
}

interface TaskListProp {
    taskList: DataArray[]
    deleteTask: (createdAt: string) => void;
}

export function TasksContainer({ taskList, deleteTask }: TaskListProp) {
    return (
        <section className={styles.tasksWrapper}>
            <header className={styles.tasksHeader}>
                <p className={styles.tasksTracker}>
                    Tarefas criadas
                    <span className={styles.tasksCounter}>5</span>
                </p>
                <p className={styles.tasksTracker}>
                    Concluídas
                    <span className={styles.tasksCounter}>2 de 5</span>
                </p>
            </header>

            <section>
                <ul className={styles.taskList}>
                    {taskList.length === 0 ? (
                        <EmptyTask />
                    ) : (
                        taskList.map(task => 
                            <Task 
                                key={task.createdAt} 
                                taskList={task}
                                deleteTask={deleteTask}
                            />
                        )
                    )}
                </ul>
            </section>
        </section>
    )
}