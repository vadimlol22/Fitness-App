import Layout from "../../../layout/Layout";
import Alert from "../../../ui/alert/Alert";
import WorkoutItem from "./WorkoutItem";
import { useWorkouts } from "./useWorkouts";

import styles from "../detail/styles.module.scss";
import Loader from "../../../ui/Loader";

const ListWorkouts = () => {
  const { data, error, isLoading, isSuccess, isSuccessMutate, mutate } =
    useWorkouts();

  return (
    <>
      <Layout bgImage="/images/workout-bg.jpg" heading="Workout list" />

      <div
        className="wrapper-inner-page"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        {error && <Alert type="error" text={error} />}
        {isSuccessMutate && <Alert text="Workout log created" />}
        {isLoading && <Loader />}
        {isSuccess && (
          <div className={styles.wrapper}>
            {data.map((workout) => (
              <WorkoutItem key={workout.id} workout={workout} mutate={mutate} />
            ))}
          </div>
        )}

        {isSuccess && data?.length === 0 && (
          <Alert type="warning" text="Workouts not found" />
        )}
      </div>
    </>
  );
};

export default ListWorkouts;
