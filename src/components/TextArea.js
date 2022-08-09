import { useState } from "react"
import React from 'react'
import './TextArea.css'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function TextArea(props) {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);   //getting the value from the user
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 1000), //setting a unique id of todo
            text: input,
        });
        setInput('');
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <div className={props.edit ? "input-edit" : "input-container"}>
                <span class="material-symbols-outlined" onClick={()=>props.checkAll()}>
                    expand_more
                </span>
                <input
                    type="text"
                    placeholder={!props.edit ? "what needs to be done" : ""}
                    className="todo-input"
                    autoComplete="off"
                    value={input}
                    name='text'
                    onChange={handleChange}
                />
            </div>
        </form>
    )
}

export default TextArea