import { portfolioType, portfolioActionType, portfolioActionSet, portfolioActionFilterTags } from './../../types/portfolio';


export const setPortfolio = ({ tagsList, label, portfolioList }: portfolioType): portfolioActionSet => {
  return {
    type: portfolioActionType.SET_PORTFOLIO,
    payload: { tagsList, label, portfolioList },
  };
}

export const filterPortfolio = ( portfolio : portfolioType): portfolioActionFilterTags => {
  return {
    type: portfolioActionType.FILTER_PORTFOLIO,
    payload: portfolio
  }
}