import styles from './EmptyTask.module.css'
import clipboard from '../assets/clipboard.svg'

export function EmptyTask() {
    return (
        <div className={styles.wrapper}>
            <img src={clipboard} />
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}