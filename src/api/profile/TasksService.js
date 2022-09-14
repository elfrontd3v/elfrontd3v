import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { fireStore } from "../firebase/Config";

const TasksService = {
  insertTasksList: async (list) => {
    const docRef = doc(fireStore, `tasks/${list.id}`);
    await setDoc(docRef, list);
    const consult = await getDoc(docRef);
    return consult.data();
  },
  insertTask: async (listId, tasksArray) => {
    const docRef = doc(fireStore, `tasks/${listId}`);
    await updateDoc(docRef, { tasksList: tasksArray });
    const result = await getDoc(docRef);
    return result.data();
  },
};

export default TasksService;
