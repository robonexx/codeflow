import React from 'react'
import styled from 'styled-components'


const Title = styled.h1`
margin-left: 10vw;
font-weight: 200;
letter-spacing: 2px;
font-size: 2rem;
color: ${({ theme }) => theme.text};
filter: drop-shadow(3px 3px 2px #c1c1c1);
z-index: 20;

@media (max-width: 900px) {
    font-size: 2rem;
}
`;
const Logo = () => {
    return ( 
        <>
        <Title>[B-E-V]</Title>
        </>
     );
}
 
export default Logo;