import React from 'react'
import styled from 'styled-components'
import {Home} from '@styled-icons/ionicons-solid/Home'
import {StatsBars} from '@styled-icons/icomoon/StatsBars'
import {MessageAltEdit} from '@styled-icons/boxicons-solid/MessageAltEdit'
import {Work} from '@styled-icons/material/Work'  


const HomeBtn = styled(Home)`
width: 2.4rem;
height: 2.4rem;
color: #f2f2f3;

&:hover {
    color: #f2f2f3;
    opacity: 0.8;
    transform: scale(0.92);
}

@media (max-width: 900px) {
    transform: scale(0.8);
}
`;
const StatsBtn = styled(StatsBars)`
width: 2.4rem;
height: 2.4rem;
color: #f2f2f3;

&:hover {
    color: #f2f2f3;
    opacity: 0.8;
    transform: scale(0.92);
}
@media (max-width: 900px) {
    transform: scale(0.8);
}
`;
const Message = styled(MessageAltEdit)`
width: 2.4rem;
height: 2.4rem;
color: #f2f2f3;

&:hover {
    color: #f2f2f3;
    opacity: 0.8;
    transform: scale(0.92);
}
@media (max-width: 900px) {
    transform: scale(0.8);
}
`;
const Working = styled(Work)`
width: 2.4rem;
height: 2.4rem;
color: #f2f2f3;

&:hover {
    color: #f2f2f3;
    opacity: 0.8;
    transform: scale(0.92);
}
@media (max-width: 900px) {
    transform: scale(0.8);
}
`;

 
const Nav = styled.div`
position: fixed;
left: 0;
top: 0;
width: 6vw;
height: 100%;
background-color: rgba(0,0,0,0.7);
z-index: 10;
text-align: center;

@media (max-width: 900px) {
    position: fixed;
    top: 94vh;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 0;
    width: 100vw;
    height: 6vh;
    display: flex;
    justify-content: flex-end;
    background-color: rgba(0,0,0,0.9);
  }
` 

const UL = styled.ul`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
list-style: none;
padding: 5rem 2rem;

&>li {
    margin-bottom: 2rem;
}

@media (max-width: 900px) {
    position-absolute:
    display: flex;
    flex-direction: row-reverse;
    align-items: center; 
    padding: 1rem;

    &>li {
        padding-right: 2rem;
    }
}
`

const Navbar = () => {
    return (  
            <>
                <Nav>
                    <UL>
                        <li><HomeBtn /></li>
                        <li><StatsBtn /></li>
                        <li><Message /></li>
                        <li><Working /></li>
                    </UL>
                </Nav>
            </>
    );
}
 
export default Navbar;