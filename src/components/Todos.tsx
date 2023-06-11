import { useState } from "react"
import CurrentTodo from "./CurrentTodo"

export default function Todos() {
  const [currentTodo, setCurrentTodo] = useState({
    text: "",
    created: new Date(),
  })

  function editCurrentTodo(newText: string) {
    setCurrentTodo(currentTodo => ({ ...currentTodo, text: newText }))
  }

  return (
    <section style={{ color: "white" }}>
      <CurrentTodo
        currentTodo={currentTodo}
        editCurrentTodo={editCurrentTodo}
      />
      <pre>{JSON.stringify(currentTodo, null, 2)}</pre>
    </section>
  )
}
