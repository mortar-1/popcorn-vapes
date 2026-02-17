import React from "react";
import { useCart } from "@/globals/contexts/Cart";
import Page from "../page/page";

const ShoppingCart = () => {
    const { state, dispatch, subtotal } = useCart();

    return (
        <div style={{ padding: 16 }}>
            <h2>Shopping Cart</h2>

            {state.items.length === 0 && <p>Cart is empty</p>}

            {state.items.map(item => (
                <div key={item.id} style={{ marginBottom: 12 }}>
                    <strong>{item.name}</strong>
                    <p>
                        ${item.price} × {item.quantity}
                    </p>

                    <button
                        onClick={() =>
                            dispatch({
                                type: "UPDATE_QUANTITY",
                                payload: { id: item.id, quantity: item.quantity - 1 },
                            })
                        }
                    >
                        -
                    </button>

                    <button
                        onClick={() =>
                            dispatch({
                                type: "UPDATE_QUANTITY",
                                payload: { id: item.id, quantity: item.quantity + 1 },
                            })
                        }
                    >
                        +
                    </button>

                    <button
                        onClick={() =>
                            dispatch({ type: "REMOVE_ITEM", payload: item.id })
                        }
                    >
                        Remove
                    </button>
                </div>
            ))}

            <h3>Subtotal: ${subtotal.toFixed(2)}</h3>

            {state.items.length > 0 && (
                <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
                    Clear Cart
                </button>
            )}
        </div>
    );
};

export default ShoppingCart;
