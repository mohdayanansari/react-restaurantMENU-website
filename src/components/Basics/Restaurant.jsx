import { useState } from "react";
import Menu from "../menuApi";
import MenuCard from "./MenuCard";
import "./style.css";

function Restaurant() {
  const [menuData, setMenuData] = useState(Menu);

  const filterItem = (category) => {
    const updatedList = Menu.filter((curEle) => {
      return curEle.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item"
            onClick={() => filterItem("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("lunch")}
          >
            Lunch
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("evening")}
          >
            Evening
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("dinner")}
          >
            Dinner
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("all")}
          >
            All
          </button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </>
  );
}

export default Restaurant;
