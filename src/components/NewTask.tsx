import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState, useEffect } from 'react';

import styles from './NewTask.module.css';

interface Props {
    addNewTask: (task: DataArray) => void;
}

interface DataArray {  
    createdAt: string
    text: string
    isCompleted: boolean
}

export function NewTask({addNewTask}: Props) {
    const [newTask, setNewTask] = useState('');
    
    function handleCreateTask(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const task = {
            createdAt: new Date().toISOString(),
            text: newTask,
            isCompleted: false
        }

        addNewTask(task);
        setNewTask('');
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
    }

    return (
        <form className={styles.wrapper} onSubmit={handleCreateTask}>
            <input 
                type="text" 
                onChange={handleInputChange}
                name='taskText'
                value={newTask}
                placeholder='Add new task'
                required
                pattern="^(?!\s*$).+"
                title="Please enter a task before submitting"
                className={styles.taskInput}
            />
            <button type='submit'>
                Create
                <PlusCircle weight='bold' size={19}/>
            </button>
        </form>
    )
}