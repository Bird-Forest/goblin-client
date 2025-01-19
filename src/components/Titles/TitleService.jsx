import React from "react";
import cl from "./Titles.module.scss";
import { useLocation } from "react-router";
import { categoryPerson } from "../../constants/category-person";
import { categoryHome } from "../../constants/category-home";

const getCategoryByPath = (page, route) => {
  switch (page) {
    case "person":
      return categoryPerson.find((category) => category.path === route);
    case "home":
      return categoryHome.find((category) => category.path === route);
  }
};

export default function TitleService() {
  const { pathname } = useLocation();
  const segments = pathname.split("/");
  // console.log(segments);

  const page = segments[3];
  const route = segments[4];

  const item = getCategoryByPath(page, route);
  // console.log(item);
  return (
    <div className={cl.wrapTitle}>
      <span className={cl.box}>
        <item.icon />
      </span>
      <h2>{item.title}</h2>
    </div>
  );
}
