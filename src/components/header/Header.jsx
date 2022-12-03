import React, { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import st from './Header.module.scss';
import LanguageButtons from "../languageButtons";
import { IData } from "../../type/types";

interface HeaderProps {
  data: IData;
}

const Header: FC<HeaderProps> = ({ data }) => {
  return (
    <header className={"bg-gray text-white py-10"}>
      <div className={"flex justify-between container"}>
        <nav>
          <ul className="flex flex-row">
            <li>
              <Link className="p-4 rounded hover:bg-grayHover" to="/">
                {data?.about}
              </Link>
            </li>
            <li className="ml-1">
              <Link className="p-4 rounded hover:bg-grayHover" to="experience">
                {data?.experience}
              </Link>
            </li>
            <li className="ml-1">
              <Link className="p-4 rounded hover:bg-grayHover" to="skills">
                {data?.skills}
              </Link>
            </li>
          </ul>
        </nav>
        <LanguageButtons />
      </div>
    </header>
  );
};

export default Header;