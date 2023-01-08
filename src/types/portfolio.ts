
export enum portfolioActionType {
  SET_PORTFOLIO = "SET_PORTFOLIO",
  FILTER_PORTFOLIO = "FILTER_PORTFOLIO",
}

export interface portfolioActionSet {
  type: portfolioActionType.SET_PORTFOLIO;
  payload: any;
}

export interface portfolioActionFilterTags {
  type: portfolioActionType.FILTER_PORTFOLIO;
  payload: any;
}

export type portfolioAction = portfolioActionSet | portfolioActionFilterTags;

export interface portfolioType {
  tagsList: any[];
  label: any;
  portfolioList: any;
}
