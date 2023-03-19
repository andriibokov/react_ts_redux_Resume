import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import PortfolioList from "../../pages/portfolio";
import PortfolioItem from "../../pages/portfolioItem";

const RouterList = ({ data, portfolio }) => {
  return (
    <Routes>
      <Route path="/" element={<Home data={data?.about} />} />
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
