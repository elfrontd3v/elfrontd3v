import { useContext } from "react";
import { AuthContext, ThemeContext } from "core/context";
import { useEffect } from "react";
import TasksService from "api/profile/TasksService";
import { useState } from "react";

const useTasks = () => {
  const [authState] = useContext(AuthContext);
  const [themeState] = useContext(ThemeContext);
  const { generalDictionary } = themeState;

  const [tasksData, setTaskData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (authState?.uid) {
      getAllTasksByUid();
    }
  }, [authState]);

  const getAllTasksByUid = () => {
    setLoading(true);
    TasksService.getAllTasksByUid(authState.uid)
      .then((response) => {
        const responseData = [];
        response.forEach(async (doc) => {
          responseData.push(doc.data());
        });
        console.log("responseData", responseData);
        setTaskData(responseData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return { tasksData, generalDictionary, loading };
};

export default useTasks;
