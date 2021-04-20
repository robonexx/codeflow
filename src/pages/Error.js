import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
margin-left: 8vw;
width: 92vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #3cc194;
background: #372543;
z-index: 100;

&>h1 {
    text-align: center;
}

&>a {
    text-decoration: none;
    background: #3cc194;
    color: #372543;
    padding: 0.4rem 0.8rem;
    border-radius: 0.4rem;
    box-shadow: 0px 0px 8px 3px white;

    &:hover {
        transform: scale(0.96);
        box-shadow: 0px 0px 0px 1px white;
    }
}
`;

const Error = () => {

    return ( 
        <Wrapper>
        <h1>Error 404</h1>
        <h2>Page does not exist please follow the link below</h2>
        <Link to="/">Back to page</Link>
        </Wrapper>
     );
}
 
export default Error;