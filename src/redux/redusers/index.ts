import { portfolioReduser } from './portfolioReduser';
import { dataReduser } from './dataReduser';
import { combineReducers } from "redux";

export const rootReduser = combineReducers({
  data: dataReduser,
  portfolio: portfolioReduser
});

export type RootState = ReturnType<typeof rootReduser>