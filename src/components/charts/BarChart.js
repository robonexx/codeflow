import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import styled from 'styled-components'


const StyledChart = styled.div`
width: 30vw;
height: 40vh;
background: #f2f2f9;
/* background: #212124; */
color: ${({ theme }) => theme.text};
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

const BarChart = () => {

    const [chartData, setChartData ] = useState({})

    
    const chart = () => {

    setChartData({
        labels: ['mon', 'tue', 'wed', 'thu', 'fri'],
        datasets: [
            {
                label: 'Rebecca',
                data: [4, 5, 8, 7, 6],
                backgroundColor: ['#143d59', '#143d59', '#143d59', '#143d59', '#143d59'],
                borderWidth: 0.5,
                borderColor: '#fafafa',
                hoverBorderWidth: 2,
                hoverBackgroundColor: '#143d59a0'

            },
            {
                label: 'Filip',
                data: [3, 3, 6, 5, 3],
                backgroundColor: ['#f4b41a','#f4b41a','#f4b41a','#f4b41a','#f4b41a'],
                borderWidth: 0.5,
                borderColor: '#fafafa',
                hoverBorderWidth: 2,
                hoverBackgroundColor: '#f4b41aa0'
            },
            {
                label: 'Robert',
                data: [5, 3, 8, 1, 1],
                backgroundColor: ['#f93800','#f93800','#f93800','#f93800','#f93800',],
                borderWidth: 0.5,
                borderColor: '#fafafa',
                hoverBorderWidth: 2,
                hoverBackgroundColor: '#f93800a0'
            },
            {
                label: 'Kevin',
                data: [1, 2, 3, 4, 5],
                backgroundColor: ['#6dd47e','#6dd47e','#6dd47e','#6dd47e','#6dd47e',],
                borderWidth: 0.5,
                borderColor: '#fafafa',
                hoverBorderWidth: 2,
                hoverBackgroundColor: '#6dd47ea0'
            },
            {
                label: 'Jesper',
                data: [8, 7, 6, 5, 4],
                backgroundColor: ['#f2bc94','#f2bc94','#f2bc94','#f2bc94','#f2bc94',],
                borderWidth: 0.5,
                borderColor: '#fafafa',
                hoverBorderWidth: 2,
                hoverBackgroundColor: '#f2bc94a0'
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
            <Bar 
            data={chartData} 
            options={{
                maintainAspectRatio: false,
                responsive: true,
                title: {text: 'Daily hours', display: true},
                layout: {
                    padding: 10
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
 
export default BarChart;