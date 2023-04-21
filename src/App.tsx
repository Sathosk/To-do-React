import { Header } from './components/Header';
import { NewTask } from './components/NewTask'
import { TasksContainer } from './components/TasksContainer';

import './global.css';
import styles from './App.module.css'



function App() {
    return (
        <div className="App">
            <Header />
            <main className={styles.wrapper}>
                <NewTask />
                <TasksContainer />
            </main>
        </div>
    )
}

export default App
