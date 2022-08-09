import React from 'react'
import TextArea from './TextArea'
import Todo from './Todo'
import { useState } from 'react'
import TodoRadio from './TodoRadio';
import './List.css'

function List() {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(null);
  let size = todos.length   // to check number of todos left
  const addTodo = (e) => {
    if (!e.text) {
      return;
    }
    const newTodo = [e, ...todos];                 // add todo
    setTodos(newTodo);
  }
  const updatedTodo = (id, value) => {
    let editedTodo = todos.map(todo => {
      if (todo.id === id) {
        return value;
      }
      return todo;
    })                                            // update todo
    setTodos(editedTodo);
  }
  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    })                                            // remove todo
    setTodos(newTodos);
  }
  const completeTodo = (id) => {
    let checkedTodo = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    })                                            // check uncheck todo
    setTodos(checkedTodo);
  }
  const requiredList = (radio) => {
    if (radio === -1) {
      let newTodos = todos.filter((todo) => {
        if (!todo.isComplete) {
          return todo;
        }
      })
      setTodos(newTodos)
    }
    else {                                        //filter todo
      setShow(radio);
    }
  }
  let check = 0; // to check weather any unchecked task is available
  const checkAll = () => {
    let completeTodo = todos.map((todo) => {
      if (!todo.isComplete) {
        todo.isComplete = !todo.isComplete;
        check = 1;
      }
      return todo;                                 // check all todos
    })
    if (check === 0) {
      uncheckAll();
    }
    setTodos(completeTodo);
  }
  const uncheckAll = () => {
    let incompleteTodo = todos.map((todo) => {
      if (todo.isComplete) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    })                                            // uncheck all todos
    setTodos(incompleteTodo);
  }
  return (
    <div className='container'>
      <TextArea onSubmit={addTodo} checkAll={checkAll} />
      <Todo todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} updatedTodo={updatedTodo} show={show} />
      {todos.length ? (<TodoRadio list={requiredList} size={size} />) : (<div></div>)}
    </div>
  )
}

export default List