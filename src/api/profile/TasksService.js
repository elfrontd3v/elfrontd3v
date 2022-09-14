import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { fireStore } from "../firebase/Config";

const TasksService = {
  getAllTask: async () => {
    const response = await getDocs(collection(fireStore, "tasks"));
    return response;
  },
  insertTasksList: async (list) => {
    const docRef = doc(fireStore, `tasks/${list.id}`);
    await setDoc(docRef, list);
    const consult = await getDoc(docRef);
    return consult.data();
  },
  insertTask: async (listId, task) => {
    const docRef = doc(fireStore, `tasks/${listId}`);
    await updateDoc(docRef, { tasksList: arrayUnion(task) });
    const consult = await getDoc(docRef);
    return consult.data();
  },
};

export default TasksService;
