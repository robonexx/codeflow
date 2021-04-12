import React from 'react'
import styled from 'styled-components'
import Navbar from '../nav/Navbar'
import MenuBtn from '../nav/MenuBtn'
import { useMediaQuery } from 'react-responsive'
import Logo from './Logo'

const Content = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 6vh;
    border-bottom:${({ theme }) => theme.borderBottom};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    z-index: 20;
    `;

const Header = () => {

  const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 899px)'
    })
    const isMobileOrTablet = useMediaQuery({
        query: '(max-width : 900px)'
    }) 

    return ( 
        <Content>
         <Logo />
         {isDesktopOrLaptop && <Navbar />}
         {isMobileOrTablet && <MenuBtn />}
        </Content>
     );
}
 
export default Header;