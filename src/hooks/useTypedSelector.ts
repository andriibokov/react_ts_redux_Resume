import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from './../redux/redusers/index';


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;