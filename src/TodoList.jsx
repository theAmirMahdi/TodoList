/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
    <ul style={{ padding: 0 }}>
      {todos.length === 0 && "Well Done , There is no Task🔥"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
    </ul>
  );
}
