import React from 'react'
import { useEffect } from 'react'
import './todo.css'
import Todo_navbar from './Todo_navbar'
import delete_logo from "../assets/delete.png"

const Todo = () => {
  const [work, setWork] = React.useState([])
  const [filterr, setFilter] = React.useState("all")
  const [isLoaded, setIsLoaded] = React.useState(false)
  function list_todo(formdata) {
    const our_tasks = formdata.get("input_tasks")
    if (!our_tasks.trim()) return

    setWork(prev => [
      ...prev,
      { id: Date.now(), text: our_tasks, checked: false }
    ])
  }

  let visibleTasks = work
  if (filterr === "done") {
    visibleTasks = work.filter(task => task.checked)
  }
  if (filterr === "notdone") {
    visibleTasks = work.filter(task => !task.checked)
  }

  const elements_task = visibleTasks.map(task => (
    <div className='label_task' key={task.id}>
      <input
        type="checkbox"
        checked={task.checked}
        onChange={() => toggleCheck(task.id)}
        className='check_box'
      />
      <span className="task_text">{task.text}</span>
      <img
        className='delete_btn'
        src={delete_logo}
        alt=""
        onClick={() => delete_task(task.id)}
      />
    </div>
  ))

  function toggleCheck(id) {
    setWork(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, checked: !task.checked }
          : task
      )
    )
  }

  function delete_task(id) {
    setWork(prev => prev.filter(task => task.id !== id))
  }

  const tasks_done = work.filter(task => task.checked).length

  const total_task = work.length

  useEffect(() => {
    try {
      const savedTasks = localStorage.getItem("tasks")
      if (savedTasks) {
        setWork(JSON.parse(savedTasks))
      }
    } catch (error) {
      console.error("Failed to load tasks:", error)
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("tasks", JSON.stringify(work))
    }
  }, [work, isLoaded])



  return (
    <div className="todo-page">
      <nav>
        <Todo_navbar setFilter={setFilter} />
      </nav>
      <div className="outer">

        <form
          className="tasks"
          onSubmit={e => {
            e.preventDefault()
            list_todo(new FormData(e.target))
            e.target.reset()
          }}
        >
          <div className="hero">
            <div className='progress' >
              <h1>Don't Let Them <br />Stop You</h1>

              <h2>Tasks Accomplished: </h2>

              <h1 className="progress_num">
                {tasks_done} / {total_task}
              </h1>

            </div>
            <div className="input_tasks" name="input_tasks">
              <div className="enter">
                <input className='enter_task' type="text" name="input_tasks" />
                <button type='submit'>Enter</button>
              </div>
              <div className='task_list'>
                {elements_task}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Todo
