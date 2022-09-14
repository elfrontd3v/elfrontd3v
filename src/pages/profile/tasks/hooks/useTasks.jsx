import { useContext } from "react";
import { AuthContext, ThemeContext } from "core/context";
import { useEffect } from "react";
import TasksService from "api/profile/TasksService";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import TasksListClass from "core/class/TaskListClass";
import { message } from "antd";
import TaskClass from "core/class/TaskClass";

const useTasks = () => {
  const [authState] = useContext(AuthContext);
  const [themeState] = useContext(ThemeContext);
  const { generalDictionary } = themeState;

  const [tasksData, setTaskData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (authState?.uid) {
      setLoading(true);
      getAllTasksByUid();
    }
  }, [authState]);

  const getAllTasksByUid = () => {
    TasksService.getAllTasksByUid(authState.uid)
      .then((response) => {
        const responseData = [];
        response.forEach(async (doc) => {
          responseData.push(doc.data());
        });
        setTaskData(responseData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

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
          getAllTasksByUid();
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
          getAllTasksByUid();
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

  return { tasksData, generalDictionary, loading, addTasksList, addTask };
};

export default useTasks;
