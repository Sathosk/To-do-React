import { Header } from './components/Header';
import { NewTask } from './components/NewTask'
import { TasksContainer } from './components/TasksContainer';
import { useState, useEffect } from 'react';

import './global.css';
import styles from './App.module.css'
import { Task } from './components/Task';

interface DataArray {
    createdAt: string
    text: string
    isCompleted: boolean
}

function App() {
    const [taskList, setTaskList] = useState<DataArray[]>([]);

    // useEffect(() => {
    //     console.log(taskList);
    // }, [taskList])

    function addNewTask(obj: DataArray) {
        setTaskList(state => [...state, obj])
    }

    function deleteTask(createdAt: string) {
        const updatedTaskList = taskList.filter(task => {
            return task.createdAt !== createdAt;
        })

        setTaskList(updatedTaskList)
    }

    return (
        <div className="App">
            <Header />
            <main className={styles.wrapper}>
                <NewTask addNewTask={addNewTask}/>
                <TasksContainer taskList={taskList} deleteTask={deleteTask}/>
            </main>
        </div>
    )
}

export default App
