import { configureStore } from "@reduxjs/toolkit";
import { habitreducer } from "./reducer";
export const Store=configureStore({
    reducer:{
       habits: habitreducer
        
    }

})