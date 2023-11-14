import { TfiMenuAlt, TfiClose } from "react-icons/tfi";

import styles from "./styles.module.scss";
import Menu from "./menu";
import useOutside from "../../../hooks/useOutside";

const Hamburger = () => {
  const { isShow, setIsShow, ref } = useOutside(false);

  return (
    <div className={styles.wrapper} ref={ref}>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? <TfiClose /> : <TfiMenuAlt />}
      </button>
      <Menu isShow={isShow} />
    </div>
  );
};

export default Hamburger;
