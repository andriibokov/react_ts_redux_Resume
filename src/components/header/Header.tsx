import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import LanguageButtons from "../languageButtons";
import { dataType } from "../../types/data";

const Header: FC<dataType> = ({ data }) => {
  
  return (
    <header className={"bg-gray text-white py-2"}>
      <div className={"flex justify-between container"}>
        <nav>
          <ul className="flex flex-row">
            <li>
              <NavLink
                className="px-2 py-1 rounded hover:bg-grayHover [&.active]:bg-grayHover"
                to="/"
              >
                {data?.about}
              </NavLink>
            </li>
            <li className="ml-1">
              <NavLink
                className="px-2 py-1 rounded hover:bg-grayHover [&.active]:bg-grayHover"
                to="portfolio"
              >
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