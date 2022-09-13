import { collection, getDocs, query, where } from "firebase/firestore";
import { fireStore } from "../firebase/Config";

const TasksService = {
  getAllTask: async () => {
    const response = await getDocs(collection(fireStore, "tasks"));
    return response;
  },
  getAllTasksByUid: async (uid) => {
    const docRef = collection(fireStore, "tasks");
    const consult = query(docRef, where("uid", "==", uid));
    const response = getDocs(consult);
    return response;
  },
};

export default TasksService;
