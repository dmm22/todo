import Todo from "../types/todo"

interface SavedTodoProps {
  todo: Todo
  selectTodo: (timeStamp: Date) => void
}

export default function SavedTodo({ todo, selectTodo }: SavedTodoProps) {
  const { text, created } = todo

  return (
    <div onClick={() => selectTodo(created)}>
      <p>{text}</p>
    </div>
  )
}
