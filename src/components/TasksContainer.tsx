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
    handleChecked: (createdAt: string) => void;
}

export function TasksContainer({ taskList, deleteTask, handleChecked }: TaskListProp) {
    const completedTasks = taskList.filter(task => task.isCompleted);

    return (
        <section className={styles.tasksWrapper}>
            <header className={styles.tasksHeader}>
                <p className={styles.tasksTracker}>
                    Tarefas criadas
                    <span className={styles.tasksCounter}>
                        {taskList.length}
                    </span>
                </p>
                <p className={styles.tasksTracker}>
                    Concluídas
                    <span className={styles.tasksCounter}>
                        {completedTasks.length} de {taskList.length}
                    </span>
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
                                handleChecked={handleChecked}
                            />
                        )
                    )}
                </ul>
            </section>
        </section>
    )
}