import {configureStore} from "@reduxjs/toolkit";
import { movieReducer } from "./reducer";

const store = configureStore({
   reducer: {
    reducer: movieReducer
   }
});

export default store;