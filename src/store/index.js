import { legacy_createStore as createStore, legacy_createStore } from "redux";

const dataReducer = (state = { data: [] }, action) => {
  if (action.type === "ADD_DATA") {
    const newState = { ...state };
    newState.data = [...newState.data, action.payload];
    return newState;
  } else {
    return state;
  }
};

const store = legacy_createStore(dataReducer);
export default dataReducer;
