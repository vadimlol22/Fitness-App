import { useExerciseLog } from "./hooks/useExerciseLog";
import HeaderExerciseLog from "./HeaderExerciseLog";
import TableHeader from "./table/TableHeader";
import TableRow from "./table/TableRow";
import Alert from "../../ui/alert/Alert";
import Loader from "../../ui/Loader";

import styles from "./styles.module.scss";

const ExerciseLog = () => {
  const { exerciseLog, isLoading, isSuccess } = useExerciseLog();

  return (
    <>
      <HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
      <div
        className="wrapper-inner-page"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        {/* <ExerciseError errors={[errorChange,
errorCompleted]} /> */}
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.wrapper}>
            <TableHeader />
            {exerciseLog?.times.map((item, index) => (
              <TableRow item={item} key={item.id} />
            ))}
          </div>
        )}

        {isSuccess && exerciseLog?.times?.length === 0 && (
          <Alert type="warning" text="Times not found" />
        )}
      </div>
    </>
  );
};

export default ExerciseLog;
