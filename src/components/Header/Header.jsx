import LogoSide from "./Logo/LogoSide";
import cl from "./header.module.scss";
// import { useEffect, useState } from "react";
// import { cities } from "../../constants/cities";
// import { Link, useLocation } from "react-router";

export default function Header() {
  // const [city, setCity] = useState("");
  // let { pathname } = useLocation();
  // const segments = pathname.split("/");
  // const page = segments[2];

  // useEffect(() => {
  //   if (!page) return;
  //   const area = cities.filter((el) => el.path === page);
  //   // console.log(area);
  //   setCity(area[0].city);
  // }, [page]);
  // console.log(page, city);
  return (
    <div className={cl.wrapper}>
      <LogoSide />
      <p className={cl.oiRegular}>Домовик</p>
      {/* {page ? (
        <Link to={`${page}`} className={cl.area}>
          {city}
        </Link>
      ) : (
        <p className={cl.oiRegular}>Домовик</p>
      )} */}
    </div>
  );
}
