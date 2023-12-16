import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import exerciseLogService from "../../../../services/exercise/exerciseLogService";
import { useCompleteLog } from "./useCompleteLog";

export const useUpdateLogTime = (times) => {
  const { id } = useParams();

  const queryClient = useQueryClient();

  const { completeLog, errorCompleted } = useCompleteLog();

  const { mutate, error: errorChange } = useMutation({
    mutationKey: ["update log time"],
    mutationFn: ({ timeId, body }) =>
      exerciseLogService.updateTime(timeId, body),

    onSuccess: () => {
      queryClient.invalidateQueries(["get exercise log", id]).then(() => {
        const filteredTimes = times.filter((time) => time.isCompleted);

        if (filteredTimes.length === times.length - 1) {
          completeLog({ isCompleted: true });
        }
      });
    },
  });

  return { updateTime: mutate, error: errorChange || errorCompleted };
};
