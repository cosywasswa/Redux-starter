import { configureStore } from "@reduxjs/toolkit";
import cartreducer from './features/cart/cartSlice';
import modalReducer from './features/Modal/ModalSlice';

export const store = configureStore({
    reducer: {
     cart: cartreducer,   
     modal: modalReducer,
    },
});