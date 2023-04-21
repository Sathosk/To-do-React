import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './NewTask.module.css';

export function NewTask() {
    const [newTask, setNewTask] = useState('');
    
    function handleCreateTask(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const taskText = formData.get('taskText');
        console.log(taskText);
    }

    return (


        <form className={styles.wrapper} onSubmit={handleCreateTask}>
            <input 
                type="text" 
                name='taskText'
                placeholder='Adicionar uma nova tarefa'
                className={styles.taskInput}
            />
            <button type='submit'>
                Criar
                <PlusCircle weight='bold' size={19}/>
            </button>
        </form>
    )
}