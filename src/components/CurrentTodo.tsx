interface CurrentTodoProps {
  currentTodo: {
    text: string
    created: Date
  }
  editCurrentTodo: (newText: string) => void
}

export default function CurrentTodo({
  currentTodo,
  editCurrentTodo,
}: CurrentTodoProps) {
  return (
    <div>
      <input
        onChange={e => editCurrentTodo(e.target.value)}
        value={currentTodo.text}
      />
    </div>
  )
}
