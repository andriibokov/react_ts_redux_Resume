import { portfolioAction, portfolioActionType, portfolioType } from './../../types/portfolio';

const initialSatae = {
  tagsList: [],
  label: {},
  portfolioList: {}
}


export const portfolioReduser = ( state = initialSatae, action: portfolioAction ): portfolioType => {
    switch (action.type) {
      case portfolioActionType.SET_PORTFOLIO:
        return {
          ...state,
          tagsList: action.payload.tagsList,
          label: action.payload.label,
          portfolioList: action.payload.portfolioList,
        };
      case portfolioActionType.FILTER_PORTFOLIO:
        return {
          ...state,
          portfolioList: action.payload,
        };
      default:
        return state;
    }
}