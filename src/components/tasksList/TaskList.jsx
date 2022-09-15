import React from "react";
import { Button, Card, Input, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import AddCardComponent from "./AddCardComponent";
import { useState } from "react";
import SingleTask from "./SingleTask";
import "./tasksList.scss";
import TasksListClass from "core/class/TaskListClass";

const { TextArea } = Input;

const TasksList = ({ list, generalDictionary, addTasksList, addTask }) => {
  const [menuVisible, setMenuVisible] = useState(true);
  const [showInputEdit, setShowInputEdit] = useState(false);
  const [titleListValue, setTitleListValue] = useState(list.title);

  const addHandleButton = () => {
    if (titleListValue !== "") {
      addTasksList(
        new TasksListClass({ ...list, title: titleListValue }).state
      );
    } else {
      setTitleListValue(list.title);
    }
    setShowInputEdit(false);
  };

  const cancelHandle = () => {
    setTitleListValue(list.title);
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
              onBlur={() => cancelHandle()}
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
            <SingleTask
              key={task.id}
              task={task}
              addTask={addTask}
              listId={list.id}
            />
          ))}

        <AddCardComponent
          generalDictionary={generalDictionary}
          type={"CARD"}
          addHandle={addTask}
          listId={list.id}
        />
      </Card>
    </>
  );
};

export default TasksList;
