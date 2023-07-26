/* eslint-disable react/prop-types */
import { useState } from "react"
import "./todo.css"

export const AddTodo = ({ addTodo }) => {
  const [newTask, setNewTask] = useState("")
  const [newName, setNewName] = useState("")

  const onChange = (e) => {
    setNewTask(e.target.value)
  }
  const onNew = (e) => {
    setNewName(e.target.value)
  }


  return (
    <div className="add-todo bg-black">
      <textarea
        className="input-field"
        type="text"
        placeholder="Enter Your Review Here..."
        value={newTask}
        onChange={onChange}
      />
      <input 
      className="name-input-field text-black"
      type="text"
      placeholder="Enter Your Name..."
      value={newName}
      onChange={onNew}/>
      <button
        className="todo-add-btn rounded-md"
        onClick={() => {
          addTodo(newTask, newName)
          setNewTask("")
          addTodo(newName)
          setNewName("")
        }}
      >
        Add Review
      </button>
    </div>
  )
}