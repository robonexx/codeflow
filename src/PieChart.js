import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2'
import styled from 'styled-components'


const StyledChart = styled.div`
width: 30vw;
height: 40vh;
background: #f2f2f9;
/* background: #212124; */
margin: 10rem 10rem;
border-radius: 0.8rem;
box-shadow: 3px 3px 6px rgba(0,0,0,0.3), 3px 3px 4px rgba(0,0,0,0.2);

@media (max-width: 900px) {
    margin: 2vh auto;
    width: 80vw;
    height: 40vh;
    display: block;
    
  }
`

const PieChart = () => {

    const [chartData, setChartData ] = useState({})

    

    const chart = () => {

    fetch(`https://api.github.com/repos/robonexx/rupertofolio/languages`)
        .then(res => {
            return res.json()
        })
        .then(json => {

    setChartData({
            labels: Object.keys(json),
            datasets: [{
                label: '# of Votes',
                data: Object.values(json),
                backgroundColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        })
    })
}

   useEffect(() => {
    chart()
   }, [])

    return ( 
        <>
        <StyledChart>
            <Pie 
            data={chartData} 
            options={{
                maintainAspectRatio: false,
                responsive: true,
                title: {text: 'Languages', fontSize: 20, display: true},
                legend: {
                    labels: {
                        fontSize: 10,
                    }
                },
                layout: {
                    padding: 20
                },
                scales: {
                    yAxes: [
                        {
                        ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                },
                gridLines: {
                    display: false
                }
                }],
                xAxes: [
                    {
                    gridLines: {
                        display: false
                    }
                    }
                ]
                }
            }}/>
        </StyledChart>
        </>
     );
}
 
export default PieChart;