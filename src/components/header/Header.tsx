import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import LanguageButtons from "../languageButtons";
import { dataType } from "../../types/data";

const Header: FC<dataType> = ({ data }) => {
  
  return (
    <header className={"bg-gray text-white py-10"}>
      <div className={"flex justify-between container"}>
        <nav>
          <ul className="flex flex-row">
            <li>
              <NavLink className="p-4 rounded hover:bg-grayHover" to="/">
                {data?.about}
              </NavLink>
            </li>
            <li className="ml-1">
              <NavLink
                className="p-4 rounded hover:bg-grayHover"
                to="experience"
              >
                {data?.experience}
              </NavLink>
            </li>
            <li className="ml-1">
              <NavLink className="p-4 rounded hover:bg-grayHover" to="skills">
                {data?.skills}
              </NavLink>
            </li>
            <li className="ml-1">
              <NavLink className="p-4 rounded hover:bg-grayHover" to="portfolio">
                {data?.portfolio}
              </NavLink>
            </li>
          </ul>
        </nav>
        <LanguageButtons />
      </div>
    </header>
  );
};

export default Header;