import React from 'react'
import styled from 'styled-components'
import LineChart from '../components/charts/LineChart'
import BarChart from '../components/charts/BarChart'
import PieChart from '../components/charts/PieChart'
import DoughChart from '../components/charts/DoughnutChart'



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
width: 100vw;
display: flex;
flex-flow: row wrap;
justify-content: center;

@media (max-width: 900px) {
    padding: 3vh 0 0 6vw;
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