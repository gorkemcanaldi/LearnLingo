import style from "./TeachersCard.module.css";

function LevelsList({ levels }) {
  return (
    <div className={style.levelsWrapper}>
      {levels.map((level, index) => (
        <div
          key={level}
          className={
            index === 0
              ? `${style.levelItem} ${style.levelItemActive}`
              : style.levelItem
          }
        >
          {level}
        </div>
      ))}
    </div>
  );
}
export default LevelsList;
