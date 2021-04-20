import React from 'react'
import styled from 'styled-components'


const Title = styled.h1`
margin-left: 0vw;
width: 100%;
font-weight: 200;
letter-spacing: 2px;
font-size: 2rem;
color: ${({ theme }) => theme.text};
filter: drop-shadow(2px 2px 2px #c1c1c1);
z-index: 20;

@media (max-width: 900px) {
    font-size: 2rem;
}
`;
const Logo = () => {
    return ( 
        <>
        <Title>[Kriːeɪˈtɪv Code-Flow]</Title>
        </>
     );
}
 
export default Logo;