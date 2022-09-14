import { useContext, useEffect, useState } from "react";
import { AuthContext, TasksContext, ThemeContext } from "core/context";
import TasksService from "api/profile/TasksService";
import TasksListClass from "core/class/TaskListClass";
import TaskClass from "core/class/TaskClass";
import { message } from "antd";
import { v4 as uuid } from "uuid";

const useTasks = () => {
  const [authState] = useContext(AuthContext);
  const [tasksState] = useContext(TasksContext);
  const [themeState] = useContext(ThemeContext);
  const { generalDictionary } = themeState;

  const [tasksData, setTaskData] = useState([]);

  useEffect(() => {
    if (authState?.uid && tasksState?.list) {
      setTaskData(tasksState.list);
    }
  }, [authState, tasksState]);

  const addTasksList = (title) => {
    const payload = new TasksListClass({
      id: uuid(),
      uid: authState.uid,
      title: title,
      date: Date.now(),
    }).state;
    TasksService.insertTasksList(payload)
      .then((response) => {
        if (response && response.id) {
          message.success(generalDictionary.ENDPOINT_INSERT_OK);
        } else {
          message.warning(generalDictionary.ENDPOINT_WARNING);
        }
      })
      .catch((error) => {
        console.error("error:", error);
        message.error(generalDictionary.ENDPOINT_ERROR);
      });
  };

  const addTask = (listId, title) => {
    const payload = new TaskClass({
      id: uuid(),
      title: title,
      state: true,
    }).state;
    TasksService.insertTask(listId, payload)
      .then((response) => {
        if (response && response.id) {
          message.success(generalDictionary.ENDPOINT_INSERT_OK);
        } else {
          message.warning(generalDictionary.ENDPOINT_WARNING);
        }
      })
      .catch((error) => {
        console.error("error:", error);
        message.error(generalDictionary.ENDPOINT_ERROR);
      });
  };

  return { tasksData, generalDictionary, addTasksList, addTask };
};

export default useTasks;
