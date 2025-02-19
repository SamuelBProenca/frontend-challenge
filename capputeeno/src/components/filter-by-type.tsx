'use client';
import { styled } from "styled-components";

interface FilterItemProps {
  selected: boolean;
}

interface FilterByProps {}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;
`;

const FilterItem = styled.li<FilterItemProps>`
  color: var(--text-dark);
  text-transform: uppercase;
  text-align: center;
  line-height: 22px;
  font-family: inherit;
  font-size: 16px;
  cursor: pointer;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  border-bottom: ${(props) => (props.selected ? "4px solid var(--orange-low)" : "")};
`;

export function FilterByType(props: FilterByProps) {
  return (
    <FilterList>
      <FilterItem selected={true}>Todos os Produtos</FilterItem>
      <FilterItem selected={false}>Camisetas</FilterItem>
      <FilterItem selected={false}>Canecas</FilterItem>
    </FilterList>
  );
}
