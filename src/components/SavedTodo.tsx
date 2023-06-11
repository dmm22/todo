import Todo from "../types/todo"

interface SavedTodoProps {
  todo: Todo
  selectTodo: (timeStamp: Date) => void
  deleteTodo: (timeStamp: Date) => void
}

export default function SavedTodo({
  todo,
  selectTodo,
  deleteTodo,
}: SavedTodoProps) {
  const { text, created } = todo

  return (
    <div onClick={() => selectTodo(created)}>
      <p>{text}</p>
      <button onClick={() => deleteTodo(created)}>Delete Todo</button>
    </div>
  )
}
