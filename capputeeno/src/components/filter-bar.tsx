'use client'
import { styled } from "styled-components"
import { FilterByType } from "./filter-by-type"
import { FilterByPriority } from "./filter-by-priority"

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: start;
`

export function FilterBar(){
    return(
        <FilterContainer>
            <FilterByType />
            <FilterByPriority />
        </FilterContainer>
    )
}