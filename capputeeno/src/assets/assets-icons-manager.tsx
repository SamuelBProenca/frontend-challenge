import React from 'react';

interface SvgIconProps {
  name: string;
  [key: string]: any;
}

// Um objeto que contém todos os ícones SVG disponíveis
const svgs = {
  CartIcon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V7" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M20 7H4C3.44772 7 3 7.44772 3 8V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V8C21 7.44772 20.5523 7 20 7Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  SearchIcon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11.059" cy="11.0586" r="7.06194" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.0034 20.0033L16.0518 16.0517" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  ArrowIcon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 10L12 14L16 10" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // Adicione outros ícones aqui
};

/**
 * Componente SvgIcon
 * 
 * Este componente renderiza um ícone SVG baseado no nome fornecido.
 * As propriedades adicionais passadas ao componente serão aplicadas ao ícone SVG.
 * 
 * @param {SvgIconProps} props - As propriedades para o componente SvgIcon.
 * @param {string} props.name - O nome do ícone SVG a ser renderizado.
 * @returns {React.ReactElement | null} O ícone SVG renderizado ou null se o ícone não for encontrado.
 * 
 * @example
 * <SvgIcon name="CartIcon" width="30" height="30" fill="red" />
 * 
 * @example
 * <SvgIcon name="SearchIcon" width="20" height="20" stroke="blue" />
 */
export function SvgIcon({ name, ...props }: SvgIconProps) {
  const Icon = svgs[name as keyof typeof svgs];
  return Icon ? React.cloneElement(Icon, props) : null;
}
