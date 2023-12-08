import cn from "clsx";

import stylesLayout from "../../layout/styles.module.scss";

import styles from "./styles.module.scss";
import Header from "../../layout/header/Header";

const HeaderExerciseLog = ({ isSuccess, exerciseLog }) => {
  return (
    <div
      className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
      style={{
        backgroundImage: `url('/images/ex-bg-1.jpg')`,
        height: 300,
      }}
    >
      <Header
        backLink={
          isSuccess ? `/workout/${exerciseLog.workoutLog}` : "/workouts"
        }
      />

      {isSuccess && (
        <div className={styles.heading}>
          <img
            src={
              import.meta.env.VITE_SERVER_URL + exerciseLog.exercise.iconPath
            }
            height="34"
            alt=""
            draggable={false}
          />
          <h1 className={stylesLayout.heading}>{exerciseLog.exercise.name}</h1>
        </div>
      )}
    </div>
  );
};

export default HeaderExerciseLog;
