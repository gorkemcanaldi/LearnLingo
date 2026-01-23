import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachersDB } from "../../services/teachersService";
import { setAllTeachers } from "../../redux/teachersSlice";

function Teachers() {
  const dispatch = useDispatch();

  const { teachersLoad, allTeachers } = useSelector((s) => s.teachers);
  console.log("teachersLoad:", teachersLoad);

  useEffect(() => {
    const loadTeachers = async () => {
      try {
        const teachers = await fetchTeachersDB();

        dispatch(setAllTeachers(teachers));
      } catch (error) {
        console.log("Teachers yüklenemdi");
      }
    };
    loadTeachers();
  }, [dispatch]);

  return (
    <div>
      <h1>{teachersLoad.name}</h1>
    </div>
  );
}

export default Teachers;
