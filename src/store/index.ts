import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./products/products.api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer
  },
  devTools: true,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware)
})

setupListeners(store.dispatch)