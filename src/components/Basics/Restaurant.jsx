import { useState } from "react";
import Menu from "../menuApi";
import MenuCard from "./MenuCard";
import "./style.css";

function Restaurant() {
  const [menuData, setMenuData] = useState(Menu);

  return (
    <>
      <MenuCard />
    </>
  );
}

export default Restaurant;
