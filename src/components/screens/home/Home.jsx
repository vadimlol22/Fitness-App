import { useNavigate } from "react-router-dom";
import Layout from "../../layout/Layout";

function Home() {
  const navigate = useNavigate;
  return <Layout bgImage="/images/home-bg.jpg"></Layout>;
}

export default Home;
