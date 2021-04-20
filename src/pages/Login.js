import React from 'react'
import styled from 'styled-components'
import {GithubIcon, GoogleIcon } from '../components/Ui/icons'
import { githubProvider, googleProvider } from '../config/AuthMethods';
import socialAuth from '../Authentication/Auth'

const Wrapper = styled.div`
margin-left: 8vw;
width: 92vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #2a9d8f;
background: #e9c46a;
z-index: 100;
`

const Content = styled.div`
/* background-color: ${({ theme }) => theme.body};
color: ${({ theme }) => theme.text}; */
z-index: 1;
width: 50%;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid #264653;
padding: 1rem;
`;

const Box = styled.div`
display: flex;
transform: scale(1.5);
color: #e76f51;
`


const Login = () => {

    const handleOnClick = async (provider) => {
        const res = await socialAuth(provider);
        console.log(res)
      }
    return ( 
        <Wrapper>
           <Content>
                <h1>Log in</h1>
                <Box>
                    <GithubIcon onClick={() => handleOnClick(githubProvider)} />
                    <GoogleIcon onClick={() => handleOnClick(googleProvider)} />
                </Box>
                </Content>
        </Wrapper>
     );
}
 
export default Login;