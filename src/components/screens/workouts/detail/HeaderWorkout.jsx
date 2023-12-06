import cn from "clsx";

import stylesLayout from "../../../layout/styles.module.scss";
import Header from "../../../layout/header/Header";

import styles from "./styles.module.scss";

const HeaderWorkout = ({ workoutLog, isSuccess }) => {
  return (
    <div
      className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
      style={{
        backgroundImage: `url('/images/workout-bg.jpg')`,
        height: 356,
      }}
    >
      <Header backLink="/workouts" />

      {isSuccess && (
        <div>
          <time className={styles.time}>{workoutLog.minute + " min."}</time>
          <h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
        </div>
      )}
    </div>
  );
};

export default HeaderWorkout;
