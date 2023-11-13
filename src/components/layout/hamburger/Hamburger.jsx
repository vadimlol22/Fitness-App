import { useState } from "react";
import { TfiMenuAlt, TfiClose } from "react-icons/tfi";

import styles from "./styles.module.scss";
import Menu from "./menu";

const Hamburger = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? <TfiClose color="white" /> : <TfiMenuAlt color="white" />}
      </button>
      <Menu isShow={isShow} />
    </div>
  );
};

export default Hamburger;
