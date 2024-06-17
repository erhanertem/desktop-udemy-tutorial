import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';

// MAKE CUSTOM TYPE FOR CART DISPATCH INSSTEAD OF REGULAR DISPATCH WHICH IS BEING ACCEPTED BY OTHERS AS WELL.
type DispatchFunction = () => AppDispatch;
export const useCartDispatch: DispatchFunction = useDispatch;
