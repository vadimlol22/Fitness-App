import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import styles from "./styles.module.scss";
import workoutLogService from "../../../../services/workout/workoutLogService";
import HeaderWorkout from "./HeaderWorkout";
import Loader from "../../../ui/Loader";
import { Fragment } from "react";
import ExerciseItem from "./ExerciseItem";

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

  console.log(data);

  return (
    <>
      <HeaderWorkout workoutLog={workoutLog} isSuccess={isSuccess} />
      <div
        className="wrapper-inner-page"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <div style={{ width: "90%", margin: "0 auto" }}>
          {/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.wrapper}>
            {workoutLog?.exerciseLogs?.map((exerciseLog, index) => (
              <Fragment key={exerciseLog.id}>
                <ExerciseItem exerciseLog={exerciseLog} />
                {index % 2 !== 0 &&
                  index !== workoutLog.exerciseLogs.length - 1 && (
                    <div className={styles.line} />
                  )}
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Workout;
