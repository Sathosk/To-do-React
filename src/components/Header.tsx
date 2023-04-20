import styles from './Header.module.css'
import rocketSVG from '../assets/Rocket.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={rocketSVG} alt="Rocket" />
                <span>to</span>
                <span>do</span>
            </div>
        </header>
    )
}