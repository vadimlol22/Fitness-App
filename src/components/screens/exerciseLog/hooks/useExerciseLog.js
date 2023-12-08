import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import exerciseLogService from "../../../../services/exercise/exerciseLogService";

export const useExerciseLog = () => {
  const { id } = useParams();

  const {
    data: exerciseLog,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["get exercise log", id],
    queryFn: () => exerciseLogService.getById(id),
    select: ({ data }) => data,
  });

  return {
    exerciseLog,
    isSuccess,
    isLoading,
  };
};
