/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { ITicketInCart } from "../interfaces";

// Define a type for the slice state
interface CartState {
  tickets: ITicketInCart[];
}

// Define the initial state using that type
const initialState: CartState = {
  tickets: [],
};

const cacheState = (state: CartState) => {
  localStorage.setItem("cart", JSON.stringify(state.tickets));
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    rehydrate: (state) => {
      const listFromLocalStorage = localStorage.getItem("cart");
      if (listFromLocalStorage) {
        const list = JSON.parse(listFromLocalStorage);
        state.tickets = list;
      }
    },
    addToCart: (state, action: PayloadAction<ITicketInCart>) => {
      const existingTicket = state.tickets.find(
        (ticket) => ticket.id === action.payload.id
      );
      if (existingTicket) {
        state.tickets[state.tickets.indexOf(existingTicket)].quantity += 1;
      } else {
        state.tickets.push(action.payload);
      }

      cacheState(state);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const existingTicket = state.tickets.find(
        (ticket) => ticket.id === action.payload
      );
      if (existingTicket) {
        state.tickets = state.tickets.filter(
          (ticket) => ticket.id !== action.payload
        );
      }

      cacheState(state);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      state.tickets = state.tickets.map((ticket) => {
        if (ticket.id === action.payload.id) {
          return { ...ticket, quantity: action.payload.quantity };
        }
        return ticket;
      });

      cacheState(state);
    },
  },
});

export const { rehydrate, addToCart, removeFromCart, updateQuantity } =
  cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
