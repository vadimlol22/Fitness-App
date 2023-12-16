import { TfiMenuAlt, TfiClose } from "react-icons/tfi";

import styles from "./styles.module.scss";
import Menu from "./menu";
import useOutside from "../../../hooks/useOutside";

const Hamburger = () => {
  const { isShow, setIsShow, ref } = useOutside(false);

  return (
    <div className={styles.wrapper} ref={ref}>
      <button onClick={() => setIsShow(!isShow)} aria-label="Open menu">
        {isShow ? <TfiClose /> : <TfiMenuAlt />}
      </button>
      <Menu isShow={isShow} setIsShow={setIsShow} />
    </div>
  );
};

export default Hamburger;
