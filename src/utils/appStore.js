import { configureStore } from "@reduxjs/toolkit";

import cartReducer, { clearCart } from './createAppSlice'


let appStore = configureStore({
   reducer: {
      Cart: cartReducer
   }
})

export default appStore