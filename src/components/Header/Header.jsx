import LogoSide from "./Logo/LogoSide";
// import SideBar from "./SideBar/SideBar";
import cl from "./Header.module.scss";
import { useEffect, useState } from "react";
import { cities } from "../../constants/cities";
import { useLocation } from "react-router";

export default function Header() {
  const [city, setCity] = useState("");
  let { pathname } = useLocation();
  const segments = pathname.split("/");
  const page = segments[2];

  useEffect(() => {
    if (!page) return;
    const area = cities.filter((el) => el.path === page);
    console.log(area);
    setCity(area[0].city);
  }, [page]);
  console.log(page, city);
  return (
    <div className={cl.wrapper}>
      <LogoSide />
      <p className={cl.area}>{city}</p>
    </div>
  );
}
