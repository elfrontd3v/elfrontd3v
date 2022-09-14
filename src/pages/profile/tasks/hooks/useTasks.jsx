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

  const addTasksList = (newList) => {
    const payload = new TasksListClass({
      id: newList.id ? newList.id : uuid(),
      uid: newList.uid ? newList.uid : authState.uid,
      title: newList.title,
      date: newList.date ? newList.date : Date.now(),
      tasksList: newList?.tasksList?.length > 0 ? newList.tasksList : [],
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

  const addTask = (listId, newTask) => {
    const payload = new TaskClass({
      id: newTask.id ? newTask.id : uuid(),
      title: newTask.title ? newTask.title : "",
      state: newTask.state ? newTask.state : true,
      date: newTask.date ? newTask.date : Date.now(),
    }).state;

    const tasksArray = createTasksArray(listId, payload.id);
    tasksArray.push(payload);
    TasksService.insertTask(listId, tasksArray)
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

  const createTasksArray = (listId, taskId) => {
    let aux = [];
    tasksState.list.forEach((list) => {
      if (list.id === listId) {
        aux = list.tasksList.filter((taskAux) => taskAux.id !== taskId);
      }
    });
    return aux;
  };

  return { tasksData, generalDictionary, addTasksList, addTask };
};

export default useTasks;
