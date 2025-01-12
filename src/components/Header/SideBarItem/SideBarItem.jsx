import { NavLink } from "react-router";
import cl from "./SideBarItem.module.scss";

export default function SideBarItem({ item, page }) {
  return (
    <NavLink
      to={`${item.to}`}
      className={item.to === page ? `${cl.nav} ${cl.active}` : `${cl.nav}`}
    >
      {item.value}
    </NavLink>
  );
}
