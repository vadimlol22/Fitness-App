import { useNavigate } from "react-router-dom";

import Layout from "../../layout/Layout";
import Button from "../../ui/button/button";
import styles from "./styles.module.scss";
import Statistics from "../profile/statistics/Statistics";

function Home() {
  const navigate = useNavigate();

  return (
    <Layout bgImage="/images/home-bg.jpg">
      <Button
        clickHandler={() => {
          navigate("/new-workout");
        }}
      >
        New
      </Button>
      <h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
      <Statistics />
    </Layout>
  );
}

export default Home;
