
import "./todo.css"

export const TodoItem = ({ title, discription, isDone }) => {
  // console.log(title, discription)
  return (
    <div className="todo-item flex-col " id="todo-1">
      <h2
        className="todo-task-title text-xl"
        style={
          isDone
            ? {
                textDecoration: "line-through"
              }
            : {}
        }
      >
        {title}
        
      </h2>
      <p className="todo-task-discription bg-transparent mb-2">
      {discription}
      </p>
     
    </div>
  )
}