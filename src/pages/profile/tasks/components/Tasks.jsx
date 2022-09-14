import { Col, Row, Spin } from "antd";
import HeaderSection from "components/headerSection/HeaderSection";
import AddCardComponent from "components/tasksList/AddCardComponent";
import TasksList from "components/tasksList/TaskList";
import React from "react";
import useTasks from "../hooks/useTasks";
import "./tasks.scss";

const Tasks = () => {
  const { tasksData, generalDictionary, loading, addTasksList, addTask } =
    useTasks();

  return (
    <>
      <HeaderSection title={generalDictionary.TASKS} />
      <Spin
        spinning={loading}
        tip={generalDictionary.LOADING}
        size="large"
        className="spinTasks"
      />
      {!loading && (
        <Row gutter={[8, 8]}>
          {tasksData?.map((list) => (
            <Col key={list.id} xs={24} sm={24} md={12} lg={8} xl={8} xxl={6}>
              <TasksList
                title={list.title}
                tasksList={list.tasksList}
                generalDictionary={generalDictionary}
                addTask={addTask}
                listId={list.id}
              />
            </Col>
          ))}
          <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={6}>
            <AddCardComponent
              generalDictionary={generalDictionary}
              type={"LIST"}
              addHandle={addTasksList}
            />
          </Col>
        </Row>
      )}
    </>
  );
};

export default Tasks;
