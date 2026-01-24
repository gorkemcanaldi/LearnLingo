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
    const teacherData = data.map((teacher, index) => ({
      id: index.toString(),
      ...teacher,
    }));

    return teacherData;
  } catch (error) {
    console.error("firebase teachers fetch error:", error);
    throw error;
  }
};
