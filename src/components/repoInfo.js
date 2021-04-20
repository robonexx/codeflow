import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
position: absolute;
top: 10vh;
right: 0;
height: 20%;
width: fit-content;
padding: 1rem 1rem;
border-left: 1px solid rgba(255,255,255,0.3);

&>div:last-child>a {
    color: ${({theme}) => theme.text}
}
`



const RepoInfo = ({repoDetails, loading}) => {

    if(loading) {
        return (
            <h3>Loading...</h3>
        )
    }
    return ( 
        <Container>
            <h2>REPO INFO</h2>
            <div className="content">
                <label>Name: </label>
                <span>{repoDetails.name}</span>
            </div>
            <div className="content">
                <label>Language: </label>
                <span>{repoDetails.language}</span>
            </div>
            <div className="content">
                <label>Repo Url: </label>
                <div>
                <span><a href={`${repoDetails.html_url}`} target="_blank">{repoDetails.name} URL</a></span>
                </div>
            </div>
             
        </Container>
     );
}
 
export default RepoInfo;