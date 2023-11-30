import { useQuery } from "@tanstack/react-query";

import UserService from "../../../services/userService";

// export const useProfile = () => {
//   return useQuery("get profile", () => UserService.getProfile(), {
//     select: (list) => list.data,
//   });
// };

export const useProfile = () => {
  return useQuery({
    queryKey: ["get profile"],
    queryFn: () => UserService.getProfile(),
    select: ({ data }) => data,
  });
};
