import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";
import styled from "styled-components";

const CartCount = styled.span`
    background: var(--delete-color);
    color: white;
    height: 17px;
    width: 17px;
    position: absolute;
    right: -10px;
    top: 50%;
    border-radius: 50%;
    font-size: 12px;
    paddig: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CartItemWithSpan = styled.div`
    display: flex;
    position: relative;
    align-items: center;
`;

export function CartControl() {
    const { value } = useLocalStorage<any[]>("cart-items");

    return (
        <CartItemWithSpan>
            <CartIcon />
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </CartItemWithSpan>
    );
}
