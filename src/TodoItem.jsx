import { Button, Checkbox } from "antd";
import styles from "./TodoItem.module.css";
import { DeleteFilled } from "@ant-design/icons";
import ModalWindow from "./ModalWindow";

/* eslint-disable react/prop-types */
export function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
  editTodo,
}) {
  return (
    <li className={`${styles.listItem} ${completed ? styles.lineThrough : ""}`}>
      <label className={styles.label}>
        <Checkbox
          className={styles["ant-checkbox-wrapper"]}
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        >
          {title}
        </Checkbox>
      </label>
      <div>
        <ModalWindow id={id} title={title} editTodo={editTodo} />
        <Button danger onClick={() => deleteTodo(id)}>
          <DeleteFilled />
        </Button>
      </div>
    </li>
  );
}

export default TodoItem;
