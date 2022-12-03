import React, { FC } from "react";
import { IData } from "../../type/types";

interface SkillsProps {
  data: IData;
}

const Skills: FC<SkillsProps> = ({ data }) => {
  return (
    <div className="container flex-auto">
      <div className="m-4 p-6 shadow-2xl shadow-gray-200 text-[22px]">
        <h2 className="my-3">{data?.title}</h2>
        <ul>
          {data?.list?.map((item, index) => {
            return (
              <li className="my-2" key={index}>
                <h3>{item}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Skills;