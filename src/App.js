import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./redux/action/dataActions";

import Header from "./components/header/Header";
import RouterList from "./constants/routers/RouterList";
import { dataLanguages } from "./languages/languages";

interface AppProps {
  data: Object;
  dispatch: () => void;
  fetchData: () => void;
}

const App: FC<AppProps> = ({ data, dispatch, fetchData }) => {
  data = useSelector((state) => state.allData.data);
  dispatch = useDispatch();

  fetchData = async () => {
    dispatch(setData(dataLanguages()));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header data={data.tittlePage} />
      <RouterList data={data} />
    </div>
  );
};

export default App;
