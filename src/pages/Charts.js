import React from 'react'
import styled from 'styled-components'
import LineChart from '../LineChart'
import BarChart from '../BarChart'
import PieChart from '../PieChart'
import DoughChart from '../DoughnutChart'



const StyleHome = styled.div`
margin-top: 8vh;
width: 100vw;
height: 100%;
background: ${({theme}) => theme.body};
position: relative;
padding: 5rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 900px) {
    margin: 0;
    width: 100vw;
    
    
  }
`
const Content = styled.div`
width: 100%;
display: flex;
flex-flow: row wrap;
justify-content: center;

@media (max-width: 900px) {
    margin: 3vh 0 0 06vw;
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`


const Charts = () => {
    return ( 
        <StyleHome>
            <h1>Charts</h1>
            <Content>
                <LineChart />
                <BarChart />
                <PieChart />
                <DoughChart />
            </Content>
        </StyleHome>
     );
}
 
export default Charts;