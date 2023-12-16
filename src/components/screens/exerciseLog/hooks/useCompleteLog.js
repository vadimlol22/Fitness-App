import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import exerciseLogService from "../../../../services/exercise/exerciseLogService";

export const useCompleteLog = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { mutate, error: errorCompleted } = useMutation({
    mutationKey: ["complete log"],
    mutationFn: (body) => exerciseLogService.complete(id, body),

    onSuccess: ({ data }) => {
      navigate(`/workout/${data.workoutLogId}`);
    },
  });

  return { completeLog: mutate, errorCompleted };
};
