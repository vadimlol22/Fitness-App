import { useQuery } from "@tanstack/react-query";
import cn from "clsx";
import { useParams } from "react-router-dom";

import stylesLayout from "../../layout/styles.module.scss";
import styles from "./styles.module.scss";
import Header from "../../layout/header/Header";
import workoutLogService from "../../../services/workout/workoutLogService";

const Workout = () => {
  const { id } = useParams();

  const {
    data: workoutLog,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["get workout log", id],
    queryFn: () => workoutLogService.getById(id),
    select: ({ data }) => data,
  });

  return (
    <>
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
      <div
        className="wrapper-inner-page"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <div style={{ width: "90%", margin: "0 auto" }}>
          {/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
        </div>
      </div>
    </>
  );
};

export default Workout;
