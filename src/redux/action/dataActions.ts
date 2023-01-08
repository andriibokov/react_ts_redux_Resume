import { dataActionSet, dataActionTypes, dataType } from '../../types/data';


export const setData = (data: dataType): dataActionSet => {
  return {
    type: dataActionTypes.SET_DATA,
    payload: data,
  };
};