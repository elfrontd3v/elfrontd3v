import React from "react";
import { Button, Card, Input, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import AddCardComponent from "./AddCardComponent";
import { useState } from "react";
import SingleTask from "./SingleTask";
import "./tasksList.scss";

const { TextArea } = Input;

const TasksList = ({ list, generalDictionary, addTask, listId }) => {
  const [menuVisible, setMenuVisible] = useState(true);
  const [showInputEdit, setShowInputEdit] = useState(false);
  const [titleListValue, setTitleListValue] = useState(list.title);

  const addHandleButton = (e) => {
    setShowInputEdit(false);
  };

  return (
    <>
      <Card
        className="tasksListContainer"
        title={
          showInputEdit ? (
            <TextArea
              autoSize
              value={titleListValue}
              autoFocus={true}
              onBlur={() => setShowInputEdit(false)}
              onChange={(event) => setTitleListValue(event.target.value)}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  addHandleButton();
                }
              }}
            />
          ) : (
            <span onClick={() => setShowInputEdit(true)}>{titleListValue}</span>
          )
        }
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
        {list.tasksList?.length > 0 &&
          list.tasksList?.map((task) => (
            <SingleTask task={task} key={task.id} />
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
