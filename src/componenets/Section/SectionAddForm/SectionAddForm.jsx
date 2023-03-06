import React, {useState} from 'react';
import style from './sectionAddForm.module.css'


const SectionAddForm = ({onClose, todos, setTodos}) => {
    let a = (Math.random() + 10) * 1000 / 2 * 8
    let todo = {check: false, todoText: '', id: a};

    const [text, setText] = useState('')

    const addTask = () => {
        if (text.length > 0) {
            todo.todoText = text
            setTodos([...todos, todo])
            localStorage.setItem('todos', JSON.stringify([...todos, todo]))
            onClose(false)
        }

        onClose(false);


    }

    return (
        <div className={style.wrapper}>
            <h2>Here you can add new task!</h2>
            <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder={"Enter something"}
                   className={style.addInput}/>
            <button onClick={addTask}>
                <span>
                    Ready
                </span>
            </button>
        </div>
    );
};

export default SectionAddForm;