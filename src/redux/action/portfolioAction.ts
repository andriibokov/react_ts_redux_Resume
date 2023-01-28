import { portfolioType, portfolioActionType, portfolioActionSet } from './../../types/portfolio';


export const setPortfolio = ({ tagsList, label, portfolioList }: portfolioType): portfolioActionSet => {
  return {
    type: portfolioActionType.SET_PORTFOLIO,
    payload: { tagsList, label, portfolioList },
  };
}