import React from 'react'
import styled from 'styled-components'
import {Home} from '@styled-icons/ionicons-solid/Home'
import {StatsBars} from '@styled-icons/icomoon/StatsBars'
import {MessageAltEdit} from '@styled-icons/boxicons-solid/MessageAltEdit'
import {Work} from '@styled-icons/material/Work' 
import {Link } from 'react-router-dom';


const HomeBtn = styled(Home)`
width: 2.4rem;
height: 2.4rem;
/* background: -webkit-linear-gradient(#282828, #121212, #282828); */
color: ${({ theme }) => theme.text};

&:hover {
    color: #f2f2f3;
    opacity: 0.8;
    transform: scale(0.92);
}


`;
const ChartsBtn = styled(StatsBars)`
width: 2.4rem;
height: 2.4rem;
color: ${({ theme }) => theme.text};

&:hover {
    color: #f2f2f3;
    opacity: 0.8;
    transform: scale(0.92);
}

`;
const Message = styled(MessageAltEdit)`
width: 2.4rem;
height: 2.4rem;
color: ${({ theme }) => theme.text};

&:hover {
    color: #f2f2f3;
    opacity: 0.8;
    transform: scale(0.92);
}

`;
const Working = styled(Work)`
width: 2.4rem;
height: 2.4rem;
color: ${({ theme }) => theme.text};

&:hover {
    color: #f2f2f3;
    opacity: 0.8;
    transform: scale(0.92);
}
`;

 
const Nav = styled.div`
position: fixed;
left: 0;
top: 0;
width: 6vw;
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

      }
      

`;


const Navbar = () => {   


    return (
        <Nav> 
            <NavStyle>
                <Link to="/"><HomeBtn /></Link>
                <Link to="/charts"><ChartsBtn /></Link>
                <Link to="/message"><Message /></Link>
                <Link to="/work"><Working /></Link>
            </NavStyle>
         </Nav>
     );
}
 
export default Navbar;