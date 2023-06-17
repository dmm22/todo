import Todo from "../types/todo"
import Button from "./Button"

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
      <Button
        text="Delete"
        clickHandler={() => deleteTodo(created)}
        color="text-zinc-950"
        background="bg-sky-100"
      />
    </div>
  )
}
