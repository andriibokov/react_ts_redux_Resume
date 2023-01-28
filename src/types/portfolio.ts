
export enum portfolioActionType {
  SET_PORTFOLIO = "SET_PORTFOLIO",
}

export interface portfolioActionSet {
  type: portfolioActionType.SET_PORTFOLIO;
  payload: any;
}

export type portfolioAction = portfolioActionSet;

export interface portfolioType {
  tagsList: any[];
  label: any;
  portfolioList: any;
}
