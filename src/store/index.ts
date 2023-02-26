import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./products/products.api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productReducer } from "./products/product.slice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    prod: productReducer
  },
  devTools: true,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>