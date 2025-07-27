import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    addProduct: (state, action) => {
      state.items.unshift(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.items.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) state.items[index] = action.payload;
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
  },
});

export const { setProducts, deleteProduct, addProduct, updateProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
