import React from 'react'
import styled from 'styled-components'

const StyleHome = styled.div`
width: 100vw;
height: 100vh;
background: #1e2e3e;
position: relative;
`


const Message = () => {
    return ( 
        <StyleHome>
            <h1>Message</h1>
        </StyleHome>
     );
}
 
export default Message;