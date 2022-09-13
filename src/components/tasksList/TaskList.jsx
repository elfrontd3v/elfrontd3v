import React from "react";
import { Button, Card } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import AddCardComponent from "./AddCardComponent";
import "./tasksList.scss";

const TasksList = ({ title, tasksList, generalDictionary }) => {
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
            <Card className="singleTask">{task.title}</Card>
          ))}

        <AddCardComponent generalDictionary={generalDictionary} type={"CARD"} />
      </Card>
    </>
  );
};

export default TasksList;
