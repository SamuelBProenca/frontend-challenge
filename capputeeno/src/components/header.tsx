'use client';

import styled from 'styled-components';
import { Saira_Stencil_One } from 'next/font/google';
import { PrimaryInput, PrimaryInputWithSearchIcon } from './primary-input';
import { CartControl } from './cart-control';

const sairaStancil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})

interface HeaderProps {}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;

    > div {
        display: flex;
        align-tems: center;
        justify-content: center;
        gap: 20px;
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`

export function MyHeader(props : HeaderProps){
    return(    
        <TagHeader>
            <Logo className={sairaStancil.className}>Capputeeno</Logo>
            <div>
                <PrimaryInputWithSearchIcon placeholder='Procurando por algo específico?' />
                <CartControl />
            </div>

        </TagHeader>
    );
}