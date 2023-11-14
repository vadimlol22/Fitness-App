import { useClickAway } from "@uidotdev/usehooks";
import { useState } from "react";

const useOutside = (isInitialValue) => {
  const [isShow, setIsShow] = useState(isInitialValue);

  const ref = useClickAway(() => {
    setIsShow(false);
  });

  return { isShow, setIsShow, ref };
};

export default useOutside;
