export enum dataActionTypes {
  SET_DATA = "SET_DATA",
}

export interface dataActionSet {
  type: dataActionTypes.SET_DATA;
  payload: any;
}

export type dataAction = dataActionSet;

export interface dataType {
  data: any;
}
