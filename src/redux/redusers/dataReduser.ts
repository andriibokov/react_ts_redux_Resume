import { dataAction, dataActionTypes, dataType } from "../../types/data";

const initialSatae = {
  data: [],
};

export const dataReduser = (state = initialSatae, action: dataAction): dataType => {
  switch (action.type) {
    case dataActionTypes.SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}