import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definisikan tipe status
type CartState = {
    data: any;
}

// Inisialisasi status awal
const initialState: CartState={
    data:[]
}

// Buat slice
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state, action){
            const itemInCart = state.data.find(
                (item:any) => item.kode === action.payload.kode
            )
            if(itemInCart){
                itemInCart.qty++;
            }else{
                state.data.push(action.payload)
            }
        },
        addQty(state, action){
            const itemInCart = state.data.find(
                (item:any) => item.kode === action.payload.kode
            )
            if(itemInCart){
                itemInCart.qty++;
            }
        },
        decreaseQty(state, action){
            const itemInCart = state.data.find(
                (item:any) => item.kode === action.payload.kode
            )
            if(itemInCart){
                itemInCart.qty--;
            }
        },
        deleteItemCart(state, action){
            const itemsCart = state.data.filter(
                (item:any) => item.kode !== action.payload.kode
            )
            state.data =itemsCart;
        },
        deleteAllItemCart(state){
            state.data =[];
        }
    }
})

export const {addToCart, addQty, decreaseQty, deleteItemCart, deleteAllItemCart} = cartSlice.actions;
export default cartSlice.reducer;