/* eslint-disable react/prop-types */
import { Form, Input, Button } from "antd";
import styles from "./NewTodoForm.module.css";

export function NewTodoForm({ onSubmit }) {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const newItem = values.item;
    if (!newItem) return;

    onSubmit(newItem);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      layout="inline"
      className={styles["ant-form-inline"]}
    >
      <Form.Item style={{ width: "100%", marginBottom: 0 }}>
        <div style={{ display: "flex" }}>
          <Form.Item
            name="item"
            noStyle
            rules={[{ required: true, message: "Please input a new item!" }]}
          >
            <Input
              style={{ marginRight: 5, marginLeft: 10 }}
              placeholder="ADD NEW TASK"
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}
