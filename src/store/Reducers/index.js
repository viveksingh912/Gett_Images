
import changeProgress from "./Data";
import { combineReducers } from "redux";
import changeLoading from "./Loaderc";

const reducers = combineReducers(
    {
    //   myNumber:changeTheNumber
        changeProgress,changeLoading
    }
);

export default reducers;