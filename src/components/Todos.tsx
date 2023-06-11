import { useState, useRef } from "react"
import CurrentTodo from "./CurrentTodo"
import Todo from "../types/todo"

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState({
    text: "",
    created: new Date(),
  })

  const todoInputRef = useRef<HTMLInputElement | null>(null)

  function editCurrentTodo(newText: string) {
    setCurrentTodo(currentTodo => ({ ...currentTodo, text: newText }))
  }

  function saveCurrentTodo(key?: string) {
    if (!key || key === "Enter") {
      const existingTodoIndex = todos.findIndex(
        ({ created }) => created === currentTodo.created
      )

      if (existingTodoIndex >= 0) {
        setTodos(todos =>
          todos.map(todo =>
            todo.created === currentTodo.created ? currentTodo : todo
          )
        )
      } else {
        setTodos(todos => [...todos, currentTodo])
        todoInputRef.current?.focus()
      }
      setCurrentTodo({ text: "", created: new Date() })
    }
  }

  return (
    <section style={{ color: "white" }}>
      <CurrentTodo
        currentTodo={currentTodo}
        editCurrentTodo={editCurrentTodo}
        todoInputRef={todoInputRef}
        saveCurrentTodo={saveCurrentTodo}
      />
      <pre>{JSON.stringify(currentTodo, null, 2)}</pre>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </section>
  )
}
