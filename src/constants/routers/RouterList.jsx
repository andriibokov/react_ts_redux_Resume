import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../../components/about";
import Experience from "../../components/experience";
import Skills from "../../components/skills";
import { IData } from "../../type/types.tsx";

interface RouterListProps {
  data: IData;
}

const RouterList: FC<RouterListProps> = ({ data }) => {
  return (
    <Routes>
      <Route path="/" element={<About data={data?.about} />} />
      <Route
        path="experience"
        element={<Experience data={data?.experience} />}
      />
      <Route path="skills" element={<Skills data={data?.skills} />} />
      <Route>404 Not Found!</Route>
    </Routes>
  );
};

export default RouterList;
