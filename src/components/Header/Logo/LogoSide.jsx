import { NavLink } from "react-router";
import cl from "./logo.module.scss";
import home2 from "/home-2.png";

export default function LogoSide() {
  return (
    <NavLink to="/" end className={cl.logo}>
      <img src={home2} width={48} height={48} />
    </NavLink>
  );
}
