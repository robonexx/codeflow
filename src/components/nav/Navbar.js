import React from 'react'
import styled from 'styled-components'
import {Link } from 'react-router-dom'; 
import { HomeIcon, ChartIcon, MsgIcon, WorkIcon } from '../Ui//icons'
/* import { githubProvider, googleProvider } from '../../config/AuthMethods';
import socialAuth from '../../Authentication/Auth'
 */
 
const Nav = styled.div`
position: fixed;
left: 0;
top: 0;
width: 8vw;
height: 100%;
background-color: ${({ theme }) => theme.body};
z-index: 1;
text-align: center;
display: flex;
` 

const NavStyle = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
list-style: none;
margin-top: 10vh;



     a {
        margin: 4vh 2vw;
        text-decoration: none;
        color: white;
        position: relative;
        height: 26px;
        font-size: 0.7rem;
        font-weight: 500;
        color: ${({ theme }) => theme.text};
        letter-spacing: 1px;
        text-align: center;
        transition: outline-offset 0.3s ease;
      }
      
      a:hover,
      a:focus {
       transform: scale(0.92);
       opacity: 0.8;

      }`;

/* const Login = styled.div`
background-color: ${({ theme }) => theme.body};
color: ${({ theme }) => theme.text};
z-index: 1;
text-align: center;
display: flex;
flex-direction: column;
border: 1px solid #e1e2e3a0;
padding: 5px; 

`; */


const Navbar = () => {   

    /* const handleOnClick = async (provider) => {
        const res = await socialAuth(provider);
        console.log(res)
      } */


    return (
        <Nav> 
            <NavStyle>
                <Link to="/"><HomeIcon /></Link>
                <Link to="/charts"><ChartIcon /></Link>
                <Link to="/message"><MsgIcon /></Link>
                <Link to="/work"><WorkIcon /></Link>
            </NavStyle>
         </Nav>
     );
}
 
export default Navbar;