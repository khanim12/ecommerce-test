import { createSlice } from "@reduxjs/toolkit";
import productsData from '../data/product.json';

const initialState = {
  products: productsData || []
};

export const FlashSlider = createSlice({
  name: 'flash',
  initialState,
  reducers: {
    // addToCart: (state, action) => {
    // }
  }
});

export default FlashSlider.reducer;
