import { Header } from './components/Header';
import { NewTask } from './components/NewTask'
import { TasksContainer } from './components/TasksContainer';
import { useState, useEffect } from 'react';

import './global.css';
import styles from './App.module.css'

interface DataArray {
    createdAt: string
    text: string
    isCompleted: boolean
}

function App() {
    // Load tasks from local storage on mount
    const [taskList, setTaskList] = useState<DataArray[]>(() => {
        const storedTasks = localStorage.getItem('taskList');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    // Save tasks to local storage whenever taskList changes
    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }, [taskList]);

    function addNewTask(obj: DataArray) {
        setTaskList(state => [...state, obj])
    }

    function handleChecked(createdAt: string) {
        const updatedList = taskList.map(task => {
            if (task.createdAt === createdAt) {
                return {
                  ...task,
                  isCompleted: !task.isCompleted
                };
              }

            return task;
        })

        setTaskList(updatedList);
    }

    function deleteTask(createdAt: string) {
        const updatedTaskList = taskList.filter(task => {
            return task.createdAt !== createdAt;
        })

        setTaskList(updatedTaskList);
    }

    return (
        <div className="App">
            <Header />
            <main className={styles.wrapper}>
                <NewTask addNewTask={addNewTask}/>
                <TasksContainer 
                    taskList={taskList} 
                    deleteTask={deleteTask} 
                    handleChecked={handleChecked}
                />
            </main>
        </div>
    )
}

export default App
