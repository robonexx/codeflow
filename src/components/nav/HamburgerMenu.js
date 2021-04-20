import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  position: fixed;
  bottom: 0;
  right: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.menuColor};
  color: ${({ theme }) => theme.text};
  letter-spacing: 1px;;
  transform: ${({isOpen }) => (isOpen ? "translateY(10%)" : "translateY(110%)")};
  height: 50%;
  width: 100vw;
  text-align: center;
  transition: transform 0.6s ease;
  z-index: 10;

  div {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items-center;
    
  }

  a {
  width: 10vw;
  margin-bottom: 3rem;
  text-decoration: none;
  position: relative;
  font-size: 1.4;
  color: ${({ theme }) => theme.text};
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 4px 6px;
  align-items: center;
  text-align: center;
  transform: ${({isOpen }) => (isOpen ? "translateY(0%)" : "translateY(100%)")};
  transition: transform 0.2s ease;
}
a:hover,
a:focus {
  transform: scale(0.92);
  opacity: 0.8;
}

 
a:nth-of-type(4n+1) {
  
  transition-delay: 0.2s;  
}
a:nth-of-type(4n+2) {
  margin-left: 2rem;
  transition-delay: 0.3s;
}
a:nth-of-type(4n+3) {
  margin-left: 4rem;
  transition-delay: 0.4s;
}
a:nth-of-type(4n+4) {
  margin-left: 6rem;
  transition-delay: 0.5s;
}
`;


function HamburgerMenu({ isOpen }) {


  return (

    <Ul isOpen={isOpen}  >
                <div>
                <Link to="/">Home</Link>
                <Link to="/charts">Charts</Link>
                <Link to="/message">Message</Link>
                <Link to="/work">Work</Link>
                </div>
    </Ul>
  );
}

export default HamburgerMenu;
