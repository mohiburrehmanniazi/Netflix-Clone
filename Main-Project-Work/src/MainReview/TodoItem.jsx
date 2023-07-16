
import "./todo.css"

export const TodoItem = ({ title, isDone, deleteTodo, completeTodo }) => {
  return (
    <div className="todo-item" id="todo-1">
      <p
        className="todo-task-title"
        style={
          isDone
            ? {
                textDecoration: "line-through"
              }
            : {}
        }
      >
        {title}
      </p>
     
    </div>
  )
}