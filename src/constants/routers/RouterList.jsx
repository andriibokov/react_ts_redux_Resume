import { Routes, Route } from "react-router-dom";
import About from "../../pages/about";
import Experience from "../../pages/experience";
import Skills from "../../pages/skills";
import PortfolioList from "../../pages/portfolio";
import PortfolioItem from "../../pages/portfolioItem";

const RouterList = ({ data, portfolio }) => {
  return (
    <Routes>
      <Route path="/" element={<About data={data?.about} />} />
      <Route
        path="experience"
        element={<Experience data={data?.experience} />}
      />
      <Route path="skills" element={<Skills data={data?.skills} />} />
      <Route
        path="portfolio"
        element={
          <PortfolioList
            data={portfolio?.portfolioList}
            tags={portfolio?.tagsList}
            constants={data?.constants}
          />
        }
      />
      <Route
        path="portfolio/:id"
        element={
          <PortfolioItem
            data={data?.portfolio}
            constants={data?.constants}
          />}
      />
      <Route>404 Not Found!</Route>
    </Routes>
  );
};

export default RouterList;
