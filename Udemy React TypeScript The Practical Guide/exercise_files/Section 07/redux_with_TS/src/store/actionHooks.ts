import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from './store';

// > MAKE CUSTOM TYPE FOR CART DISPATCH INSTEAD OF REGULAR DISPATCH WHICH IS BEING ACCEPTED BY OTHER SLICERS.
type DispatchFunction = () => AppDispatch;
export const useCartDispatch: DispatchFunction = useDispatch;

// > MAKE CUSTOM STATE ACCESSOR HOOK TYPE INSTEAD OF USING REGUALR USESELECTOR TYPE WHICH COULD BE ACCEPTED BY OTHER SLICERS
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
