import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
import { Sun } from '@styled-icons/feather/Sun'
import { Moon } from '@styled-icons/feather/Moon'


const SunLight = styled(Sun)`
outline:none;
`
const MoonDark = styled(Moon)`
outline: none;
`

const Button = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.btnColor};
  background: ${({theme}) => theme.bgBtn};
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  border:none;
  cursor: pointer;
  padding: 0.3rem;
  position: fixed;
  top: 1.5vh;
  right: 2vw;
  z-index: 50;
  outline: none;

  @media (max-width: 900px) {
    width: 2rem;
    height: 2rem;
  }
`;

const ThemeToggler = ({theme,  toggleTheme }) => {
    return (
      <>
      <Button onClick={toggleTheme}>
      {theme === "light" ?
      <MoonDark style={{ fill: "#242424" }}></MoonDark>
      :<SunLight style={{ fill: "#f3f3f3" }}></SunLight>
    } 
    </Button>

    
    </>
    );
};
ThemeToggler.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default ThemeToggler;
