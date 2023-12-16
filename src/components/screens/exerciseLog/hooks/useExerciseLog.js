import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";

import exerciseLogService from "../../../../services/exercise/exerciseLogService";
import { useUpdateLogTime } from "./useUpdateLogTime";

export const useExerciseLog = () => {
  const { id } = useParams();

  const [times, setTimes] = useState([]);

  const {
    data: exerciseLog,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["get exercise log", id],
    queryFn: () => exerciseLogService.getById(id),
    select: ({ data }) => data,
    onSuccess: (data) => {
      if (data?.times?.length) setTimes(data.times);
    },
  });

  const { error, updateTime } = useUpdateLogTime(exerciseLog?.times);

  const onChangeState = (timeId, key, value) => {
    const newTimes = times.map((time) => {
      if (time.id === timeId) {
        return { ...time, [key]: value };
      }

      return time;
    });

    setTimes(newTimes);
  };

  const getTime = (timeId) => {
    return times.find((time) => time.id === timeId);
  };

  const getState = (timeId, key) => {
    const time = getTime(timeId);
    return time ? time[key] : key === "isCompleted" ? false : 0;
  };

  const toggleTime = (timeId, isCompleted) => {
    const time = getTime(timeId);
    updateTime({
      timeId,
      body: {
        isCompleted,
        repeat: +time.repeat,
        weight: +time.weight,
      },
    });
  };

  return {
    exerciseLog,
    isSuccess,
    isLoading,
    toggleTime,
    error,
    onChangeState,
    getState,
  };
};
