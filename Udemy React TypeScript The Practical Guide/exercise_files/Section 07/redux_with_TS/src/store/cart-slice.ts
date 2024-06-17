import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
	id: string;
	title: string;
	price: number;
	quantity: number;
};

type CartState = {
	items: CartItem[];
};

const initialState: CartState = { items: [] };

// CREATE A STATE SLICE
export const cartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		addToCart(state, action: PayloadAction<{ id: string; title: string; price: number }>) {
			const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
			if (itemIndex >= 0) {
				state.items[itemIndex].quantity++;
			} else {
				state.items.push({ ...action.payload, quantity: 1 });
			}
		},
		removeFromCart(state, action: PayloadAction<string>) {
			const itemIndex = state.items.findIndex((item) => item.id === action.payload);
			if (state.items[itemIndex].quantity === 1) {
				state.items.splice(itemIndex, 1);
			} else {
				state.items[itemIndex].quantity--;
			}
		},
	},
});

// MAKE SLICER DISPATCH ACTION FUNCTIONS AVAILABLE TO COMPONENTS' USE
export const { addToCart, removeFromCart } = cartSlice.actions;
