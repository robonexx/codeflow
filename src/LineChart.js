import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'


const StyledChart = styled.div`
width: 30%;
height: 40%;
/* background: #f2f2f9; */
background: #212124;
margin: 1rem;
padding: 0.5rem;
border-radius: 0.8rem;
box-shadow: 3px 3px 6px rgba(0,0,0,0.3), 3px 3px 4px rgba(0,0,0,0.2);

@media (max-width: 900px) {
    margin: 2.5%;
    padding: 2%;
    width: 80%;
    display: block;
    
  }
`

const LineChart = () => {

    const [chartData, setChartData ] = useState({})

    
    const chart = () => {

    setChartData({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
            {
                label: 'Rebecca',
                data: [4, 5, 8, 7, 6],
                backgroundColor: ['#143d59a0'],
                borderColor: ['#143d59'],
                borderWidth: 2
            },
            {
                label: 'Filip',
                data: [3, 3, 6, 5, 3],
                backgroundColor: ['#f4b41aa0'],
                borderColor: ['#f4b41a'],
                borderWidth: 2
            },
            {
                label: 'Robert',
                data: [5, 3, 8, 1, 1],
                backgroundColor: ['#f93800a0'],
                borderColor: ['#f93800'],
                borderWidth: 2
            },
            {
                label: 'Kevin',
                data: [1, 2, 3, 4, 5],
                backgroundColor: ['#6dd47ea0'],
                borderColor: ['#6dd47e'],
                borderWidth: 2
            },
            {
                label: 'Jesper',
                data: [8, 7, 6, 5, 4],
                backgroundColor: ['#f2bc94a0'],
                borderColor: ['#f2bc94a0'],
                borderWidth: 2
            },
        ]
    })
}

   useEffect(() => {
        chart()
   }, [])

    return ( 
        <>
        <StyledChart>
            <Line 
            data={chartData}
            options={{
                maintainAspectRatio: true,
                responsive: true,
                title: {text: 'Commits / week', fontColor: 'white', fontSize: 20, display: true},
                legend: {
                    labels: {
                        fontColor: '#e1e2e3'
                    }
                },
                layout: {
                    padding: 5
                },
                scales: {
                    yAxes: [
                        {
                        ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
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
 
export default LineChart;