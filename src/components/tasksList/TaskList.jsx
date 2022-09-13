import React from "react";
import { Button, Card } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import AddCardComponent from "./AddCardComponent";
import "./tasksList.scss";

const TasksList = ({
  title,
  tasksList,
  generalDictionary,
  addTask,
  listId,
}) => {
  return (
    <>
      <Card
        title={title ? title : ""}
        extra={
          <Button type="text">
            <MenuOutlined />
          </Button>
        }
      >
        {tasksList?.length > 0 &&
          tasksList?.map((task) => (
            <Card className="singleTask" key={task.id}>
              {task.title}
            </Card>
          ))}

        <AddCardComponent
          generalDictionary={generalDictionary}
          type={"CARD"}
          addHandle={addTask}
          listId={listId}
        />
      </Card>
    </>
  );
};

export default TasksList;
