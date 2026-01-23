import { get, ref } from "firebase/database";
import { db } from "../firebase/firebase.js";

export const fetchTeachersDB = async () => {
  try {
    const teachersRef = ref(db, "/");
    const snapshot = await get(teachersRef);

    if (!snapshot.exists()) {
      return [];
    }
    const data = snapshot.val();
    const teachersArray = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));

    return teachersArray;
  } catch (error) {
    console.error("firebase teachers fetch error:", error);
    throw error;
  }
};
