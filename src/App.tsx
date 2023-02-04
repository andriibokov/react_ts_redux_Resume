import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData } from "./redux/action/dataActions";

import Header from "./components/header/Header";
import { dataLanguages } from "./languages/languages";
import { dataType } from "./types/data";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { setPortfolio } from "./redux/action/portfolioAction";
import NumberColumn from "./components/numberColumn";
import RouterList from "./constants/routers/RouterList";

function App() {
  const data = useTypedSelector((state: dataType) => state?.data?.data);
  const portfolio = useTypedSelector((state: any) => state?.portfolio);
  
  const dispatch = useDispatch();
  
  const fetchData = async () => {
    dispatch(setData(dataLanguages()));
  };
  const fetchPortfolio = async () => {    
    dispatch(setPortfolio(dataLanguages().portfolio));
  };
  
  useEffect(() => {
    fetchData();
    fetchPortfolio();
  }, []);

  return (
    <div className="flex flex-1 flex-col">
      <Header data={data?.tittlePage} />
      <div className="grid grid-cols-[auto,_1fr] flex-1">
        <NumberColumn />
        <RouterList data={data} portfolio={portfolio} />
      </div>
    </div>
  );
};

export default App;

