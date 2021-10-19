import { useState } from "react";
import Menu from "../menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
import "./style.css";

const uniqueList = [
  ...new Set(
    Menu.map((curEle) => {
      return curEle.category;
    })
  ),"All"
];
console.log(uniqueList)
function Restaurant() {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const filterItem = (category) => {
    if(category==="All"){
      setMenuData(Menu);
      return
    }
    const updatedList = Menu.filter((curEle) => {
      return curEle.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
}

export default Restaurant;
