/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";

const ModalWindow = ({ id, title, editTodo }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(title);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      editTodo(id, modalText);
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    setModalText(e.target.value);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        <EditOutlined />
      </Button>
      <Modal
        title="Edit Task"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Input value={modalText} onChange={handleInputChange} />
      </Modal>
    </>
  );
};

export default ModalWindow;
