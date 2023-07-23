import { useEffect, useState } from "react"
import "./todo.css"
import { TodoItem } from "./TodoItem"
import { AddTodo } from "./AddTodo.jsx"

export const TodoList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Mubashir",
      discription: "very good, action was good and i like and i will watch this again",
      isDone: false
    },
    {
      id: 2,
      title: "Ali Khan",
      discription: "very good fantastic, best thing i have ever seen on screen now the film industry has to make more movies like this in future",
      isDone: false
    },
    {
      id: 3,
      title: "Ilyas Nagori",
      discription: "Awosome",
      isDone: false
    },
    {
      id: 4,
      title: "Alishba ",
      discription: "i didn't Like, because in all seens all Actresses didn't wear the pink color so disapointment",
      isDone: false
    }
  ])

  const addTask = (discription, title) => {
    if (!title) {
      return
    }
    const newTask = { id: items.length + 1, title, discription, isDone: false }
    const newItems = [...items, newTask]
    setItems(newItems)
}

  return (
    <div className="mainpage">
    
      <div>
        <h2 className="heading">Total Reviews: {items.length}</h2>
      </div>
      <div className="todo-list shadow-lg">
        {items.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            discription={item.discription}
            isDone={item.isDone}
            deleteTodo={() => {
              deleteTodo(item.id)
            }}
            completeTodo={() => {
              doneTodo(item.id)
            }}
          />
        ))}
      </div>
      <AddTodo addTodo={addTask} />
    </div>
  )
}