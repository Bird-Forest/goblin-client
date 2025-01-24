import { Link } from "react-router";
import cl from "./buttons.module.scss";
import search from "/search.jpg";
import service from "/service.jpg";

export default function ButtonsMain({ city }) {
  const goToServicePage = () => {
    console.log(city.path);
  };

  const goToMasterAuth = () => {
    console.log(city.path);
  };

  return (
    <div className={cl.wrapBtn}>
      <Link to={`/service/${city.path}`} className={cl.btnMain}>
        <img src={search} alt="" />
        <span>Шукаю послугу</span>
      </Link>
      <Link to="auth" className={cl.btnMain}>
        <img src={service} alt="" />
        <span>Надаю послугу</span>
      </Link>
    </div>
  );
}
