import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const LS_FAV_KEY = 'rfk'

interface IProductState {
  favourites: string[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initialState: IProductState = {
  favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const productSlice = createSlice({
  name: '@@product',
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
    },
    removeFavourite(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter(f => f !== action.payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
    }
  }
})

export const productActions = productSlice.actions
export const productReducer = productSlice.reducer