import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";
import styled from "styled-components";

export function CartControl(){
    const { value } = useLocalStorage('cart-items')
    
    const CartCount = styled.span`
        background: var(--delete-color);
        color: white;
        height: 17px;
        width: 17px;
        position: absolute;
        right: -10px;
        top: 50%;
    `

    const CartItemWithSpan = styled.div`
        position: relative;
    `

    return(
        <div>
            <CartIcon />
            {value.lenght && <CartCount>{value.length}</CartCount>}
        </div>
    )
}