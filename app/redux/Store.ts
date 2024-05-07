import { configureStore } from "@reduxjs/toolkit/react";
import CartSlice from "./slices/CartSlice";

const store = configureStore({
    reducer:{cart: CartSlice},
})

// console.log('oncreate store : ', store.getState())

// store.subscribe(
//     ()=> {
//         console.log('STORE CHANGE : ', store.getState())
//     }
// );

export default store;