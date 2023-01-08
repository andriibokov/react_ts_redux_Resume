import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button";
import { useDispatch } from "react-redux";
import { filterPortfolio } from "../../redux/action/portfolioAction";

const PortfolioList = ({data, tags}) => {
  const dispatch = useDispatch();
  const filterTags = (tag) => {
   const filtredArray = Object.values(data).filter(item => {
    return item.tags.includes(tag)
   });
    dispatch(filterPortfolio(filtredArray))
  }
  return (
    <div className="container mt-10">
      <div>
        <ul className="flex flex-wrap mb-10">
          {
            tags?.map((tag) => {
              return (
                <li key={tag}>
                  <Button
                    className="mr-2 hover:text-red-500"
                    onClick={() => filterTags(tag)}
                  >
                    {tag}{" "}
                  </Button>
                </li>
              );
            })
          }
        </ul>
      </div>
      <ul className="grid grid-cols-portfolio1-1 gap-6">
        {!data
          ? "Loading..."
          : Object.values(data)?.map((item, index) => {
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
}

export default PortfolioList;