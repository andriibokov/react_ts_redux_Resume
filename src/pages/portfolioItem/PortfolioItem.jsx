import React from "react";
import { Link, useParams } from "react-router-dom";

const PortfolioItem = ({ data, constants }) => {
  const id = useParams().id;
  const label = data?.label;
  const portfolioList = data?.portfolioList;
  const portfolio = portfolioList?.[id];
  return (
    <div className="container">
      <Link
        to="/portfolio"
        className="flex justify-center items-center w-[120px] my-6 p-2 bg-purple-500 text-white rounded-[6px] hover:bg-purple-100 cursor-pointer"
      >
        {constants?.buttons?.back}
      </Link>
      <h2 className="text-5xl font-bold my-10">
        <a
          className="text-[#319795] underline hover:no-underline"
          href={portfolio?.url}
          target={portfolio?.url === "#" ? "_self" : "_blank"}
        >
          {portfolio?.title}
        </a>
      </h2>
      <div className="grid grid-cols-portfolio1-1 gap-20">
        <img src={`../images/${portfolio?.title}.png`} alt={portfolio?.title} />
        <div className="flex flex-col">
          <h4 className="text-xl font-medium mb-4">
            {constants?.label?.technologies}
          </h4>
          <ul className="mb-5 flex flex-col">
            {portfolio?.tags.map((item) => {
              return (
                <li key={item} className="my-2 ml-3">
                  {item}
                </li>
              );
            })}
          </ul>
          <div>
            <h4 className="text-xl font-medium mb-4">
              {constants?.label?.tasks}
            </h4>
            <ul>
              {portfolio?.tasks.map((item, index) => {
                return (
                  <li key={index} className="my-2 ml-3">
                    {index + 1}. {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;