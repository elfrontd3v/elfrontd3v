import React, { useState } from "react";
import { Button, Card, Col, Input, Row } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const SingleTask = ({ task }) => {
  const [showDeleteTaskIcon, setShowDeleteTaskIcon] = useState(false);
  const [showInputEdit, setShowInputEdit] = useState(false);
  const [titleTaskValue, setTitleTaskValue] = useState(task.title);

  const addHandleButton = (e) => {
    setShowInputEdit(false);
  };
  return (
    <>
      <Card
        className="singleTask"
        key={task.id}
        onMouseEnter={() => setShowDeleteTaskIcon(true)}
        onMouseLeave={() => setShowDeleteTaskIcon(false)}
      >
        <Row gutter={[8, 8]} className="taskContainer">
          <Col span={21} onClick={() => setShowInputEdit(true)}>
            {showInputEdit ? (
              <TextArea
                autoSize
                value={titleTaskValue}
                autoFocus={true}
                onBlur={() => setShowInputEdit(false)}
                onChange={(event) => setTitleTaskValue(event.target.value)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    addHandleButton();
                  }
                }}
              />
            ) : (
              <span className="spanText">{titleTaskValue}</span>
            )}
          </Col>

          <Col span={3}>
            {showDeleteTaskIcon && (
              <Button type="text" size="small" onClick={() => {}}>
                <DeleteOutlined />
              </Button>
            )}
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default SingleTask;
