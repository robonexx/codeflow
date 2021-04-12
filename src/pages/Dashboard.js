import React from 'react'
import styled from 'styled-components'


const StyleHome = styled.div`
width: 100vw;
height: 100vh;
background: ${({theme}) => theme.body};
position: relative;
padding: 5rem;
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
`
const Content = styled.div`
width: 100%;
display: flex;
flex-flow: row wrap;
justify-content: center;

`


const Dashboard = () => {
    return ( 
        <StyleHome>
            <h1>Dashboard</h1>
            <Content>
                Todays todos
            </Content>
        </StyleHome>
     );
}
 
export default Dashboard;