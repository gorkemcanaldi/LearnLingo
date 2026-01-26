import React from "react";
import { useSelector } from "react-redux";
import TeachersCard from "../TeachersCard/TeachersCard";

function Favorites() {
  const allTeachers = useSelector((state) => state.teachers.allTeachers) || [];
  const favorites = useSelector((state) => state.teachers.favorites) || [];

  const favTeachers = allTeachers.filter((teacher) =>
    favorites.includes(teacher.id),
  );

  if (favTeachers.length === 0) {
    return <p>You have no favorite teachers yet.</p>;
  }

  return (
    <div>
      {favTeachers.map((teacher) => (
        <TeachersCard key={teacher.id} teacher={teacher} />
      ))}
    </div>
  );
}

export default Favorites;
