import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  cart: [],
  user: null,
  loading: false,
  error: null,
  cartCount: 0,
  totalPrice: 0,
  cartItemsCount: 0,
  cartTotalAmount: 0,
  cartTotalSum: 0,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }

      state.cartCount = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.cartItemsCount = state.cart.length;
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.cartTotalAmount = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.cartTotalSum = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);

      state.cartCount = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.cartItemsCount = state.cart.length;
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.cartTotalAmount = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.cartTotalSum = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
      }

      state.cartCount = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.cartItemsCount = state.cart.length;
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.cartTotalAmount = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.cartTotalSum = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    clearCart: (state) => {
      state.cart = [];
      state.cartCount = 0;
      state.cartItemsCount = 0;
      state.totalPrice = 0;
      state.cartTotalAmount = 0;
      state.cartTotalSum = 0;
    },
  },
});

export const selectProducts = (state) => state.app.products;
export const selectCart = (state) => state.app.cart;
export const selectCartCount = (state) => state.app.cartCount;
export const selectCartItemsCount = (state) => state.app.cartItemsCount;
export const selectTotalPrice = (state) => state.app.totalPrice;
export const selectCartTotalAmount = (state) => state.app.cartTotalAmount;
export const selectCartTotalSum = (state) => state.app.cartTotalSum;
export const selectUser = (state) => state.app.user;
export const selectLoading = (state) => state.app.loading;
export const selectError = (state) => state.app.error;

export const {
  setProducts,
  addToCart,
  removeFromCart,
  updateQuantity,
  setUser,
  setLoading,
  setError,
  clearCart,
} = appSlice.actions;

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});
