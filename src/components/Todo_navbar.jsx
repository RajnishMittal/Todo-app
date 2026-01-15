import React from 'react'
import './todo_navbar.css'
import logo from "../assets/check-circle.png"
import Todo from './Todo'

const Todo_navbar = ({ setFilter }) => {



  return (
    <nav>
      <div className="container2">
        <div className="app_name">
          <img src={logo} alt="" />
          <h1 className='app_title'>ToDo</h1>
        </div>

        <div className="actions">
          <h3 onClick={() => setFilter("done")}>Tasks Completed</h3>
          <h3 onClick={() => setFilter("notdone")}>Tasks Left</h3>
          <h3 onClick={() => setFilter("all")}>All Tasks</h3>
        </div>
      </div>
    </nav>
  )
}

export default Todo_navbar 
