import React, { useState } from 'react'
import './TodoRadio.css'
function TodoRadio({ list, size }) {
  const [check, setCheck] = useState('');
  const handleList = (number, e)=>{ //taking number as the list clicked and e for id of the event
    list(number);
    if(check)
    {
      const remove = document.getElementById(check);
      remove.style.border = 'none';
    }
    let elem = document.getElementById(e.target.id);
    elem.style.border = '.5px solid rgba(83, 82, 82, 0.461)';
    elem.style.borderRadius = '3px'
    setCheck(e.target.id);

  }
  return (
    <div className='todo-radio'>
      <div className="item" onClick={() => list(null)}>{size} items</div>
      <div className="todo-selection">
        <div className="radio-button" id="all" onClick={(e) => handleList(null, e)}>All</div>
        <div className="radio-button" id='active' onClick={(e) => handleList(1, e)}>Active</div>
        <div className="radio-button" id='completed' onClick={(e) => handleList(2, e)}>Completed</div>
        <div className="radio-button clear-completed" onClick={() => list(-1)}>Clear Completed</div>
      </div>

    </div>
  )
}

export default TodoRadio