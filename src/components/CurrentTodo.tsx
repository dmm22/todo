import Button from "./Button"

interface CurrentTodoProps {
  currentTodo: {
    text: string
    created: Date
  }
  editCurrentTodo: (newText: string) => void
  todoInputRef: React.MutableRefObject<HTMLInputElement | null>
  saveCurrentTodo: (key?: string) => void
}

export default function CurrentTodo({
  currentTodo,
  editCurrentTodo,
  todoInputRef,
  saveCurrentTodo,
}: CurrentTodoProps) {
  return (
    <div>
      <input
        onChange={e => editCurrentTodo(e.target.value)}
        value={currentTodo.text}
        ref={todoInputRef}
        onKeyDown={e => saveCurrentTodo(e.key)}
      />
      <Button
        text="Add Todo"
        clickHandler={saveCurrentTodo}
        color="text-gray-50"
        background="bg-cyan-800"
      />
    </div>
  )
}
