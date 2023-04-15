import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button";
import classNames from "classnames";

const PortfolioList = ({ data, tags, constants }) => {
  const [active, setActive] = useState("All");
  const [filterPortfolio, setFilterPortfolio] = useState(null);
  const filterTags = (tag) => {
    setActive(tag);
    if (tag === "All") return setFilterPortfolio(null);
    const filtredArray = Object.values(data).filter((item) => {
      return item.tags.includes(tag);
    });
    setFilterPortfolio(filtredArray);
  };
  return (
    <div className="container mt-4 pb-4 lg:mt-10 lg:pb-10">
      <div>
        <ul className="flex flex-wrap mb-6 md:mb-10">
          {tags?.map((tag) => {
            return (
              <li key={tag}>
                <Button
                  className={classNames(
                    { active: active === tag },
                    "hover:bg-gray-100 hover:shadow py-0.3 px-1 lg:py-1 lg:px-2 mx-1 border current:text-red-500"
                  )}
                  onClick={() => filterTags(tag)}
                >
                  {tag}
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
      <ul
        className="grid gap-4 md:grid-cols-portfolio1-1 md:gap-6"
      >
        {!data
          ? constants?.empty?.loading
          : (filterPortfolio || Object.values(data))?.map((item, index) => {
              return (
                <li
                  key={index}
                  className="shadow-xl transition duration-500 ease-in-out transform hover:shadow-sm hover:scale-105 rounded-[12px] overflow-hidden"
                >
                  <Link to={`/portfolio/${item.title}`}>
                    <img src={`./images/${item.title}.png`} alt={item.title} />
                  </Link>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default PortfolioList;