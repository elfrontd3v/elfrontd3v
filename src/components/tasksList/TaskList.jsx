import React from "react";
import { Button, Card, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import AddCardComponent from "./AddCardComponent";
import "./tasksList.scss";
import { useState } from "react";

const TasksList = ({
  title,
  tasksList,
  generalDictionary,
  addTask,
  listId,
}) => {
  const [menuVisible, setMenuVisible] = useState(true);
  return (
    <>
      <Card
        className="tasksListContainer"
        title={title ? title : ""}
        extra={
          <>
            <Button type="text" onClick={() => setMenuVisible(!menuVisible)}>
              <MenuOutlined />
            </Button>
            <Menu
              mode="inline"
              hidden={menuVisible}
              className={"menuTasksList"}
              items={[]}
            />
          </>
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
