import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { fireStore } from "../firebase/Config";

const TasksService = {
  getAllTask: async () => {
    const response = await getDocs(collection(fireStore, "tasks"));
    return response;
  },
  getAllTasksByUid: async (uid) => {
    const docRef = collection(fireStore, "tasks");
    const consult = query(
      docRef,
      where("uid", "==", uid),
      orderBy("date", "asc")
    );
    const response = getDocs(consult);
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
