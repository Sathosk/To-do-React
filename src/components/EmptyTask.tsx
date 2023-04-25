import styles from './EmptyTask.module.css'
import clipboard from '../assets/clipboard.svg'

export function EmptyTask() {
    return (
        <div className={styles.wrapper}>
            <img src={clipboard} />
            <h3>Get started by creating your first task!</h3>
            <p>Organize your to-dos and boost your productivity.</p>
        </div>
    )
}