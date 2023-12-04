import { useQuery } from "@tanstack/react-query";

import exerciseService from "../../../services/exercise/exerciseService";

export const useListExercises = () =>
  useQuery({
    queryKey: ["list exercises"],
    queryFn: () => exerciseService.getAll(),
    select: ({ data }) => data,
  });
