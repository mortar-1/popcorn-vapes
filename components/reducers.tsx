import { CartAction, CartState } from "@/globals/types";

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case "ADD_ITEM": {
            const existing = state.items.find(item => item.id === action.id);

            if (existing) {
                return {
                    items: state.items.map(item =>
                        item.id === action.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }

            return {
                items: [
                    ...state.items,
                    { id: action.id, name: action.name, price: action.price, quantity: 1 },
                ],
            };
        }

        case "REMOVE_ITEM":
            return {
                items: state.items.filter(item => item.id !== action.id),
            };

        case "UPDATE_QUANTITY":
            return {
                items: state.items
                    .map(item =>
                        item.id === action.id
                            ? { ...item, quantity: action.quantity }
                            : item
                    )
                    .filter(item => item.quantity > 0),
            };

        case "CLEAR_CART":
            return { items: [] };

        default:
            return state;
    }
};

export default cartReducer;