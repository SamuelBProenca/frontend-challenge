import styled from "styled-components";
import { SearchIcon } from "./search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
    width: 352px;
    background: var(--bg-secondary);
    border-radius: 8px;
    padding: 10px 16px;
    font-family: inherit;
    font-weight: 400;
    border: none;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
`

const InputContainer = styled.div`
    position: relative;
    width: 352px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}

export function PrimaryInputWithSearchIcon(props: InputProps){
    return(
        <InputContainer>
            <PrimaryInput {...props}/>
            <SearchIcon />
        </InputContainer>
    )
}