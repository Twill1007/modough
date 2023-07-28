// store.js
import { legacy_createStore as createStore } from "redux";
import rootReducer from "../reducers"; // Update the import path for the reducers

const store = createStore(rootReducer);

export default store;
