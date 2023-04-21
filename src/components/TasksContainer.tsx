import { EmptyTask } from './EmptyTask'
import { Task } from './Task'
import styles from './Tasks.module.css'

export function TasksContainer() {
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

            {/* if no tasks render this */}
            {/* <EmptyTask /> */}

            {/* else render this */}
            <Task />
        </section>
    )
}