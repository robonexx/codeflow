/* import { githubLogIn } from "../utils/firebase.js"; */
import styled from 'styled-components'
import LandingVideo from '../img/codeflow.webm';
import TypeWriter from '../components/TypeWriter/TypeWriter'


const StyledMain = styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;
width: 100vw;
height: 100vh;
background: radial-gradient(ellipse at bottom,  #000 20%, #121212);
`
const LandingHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 10vh;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;

    &>button {
        margin-right: 4rem;
        padding: 0.4rem 0.8rem;
        border: none;
        ouline: none;
        color: #343E59;
        font-size: 1rem;
        background: rgba(75, 192, 192, 1);
        filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.8));
        border-radius: 4px;
    }
    &>button:hover {
        transform: scale(0.94);
        color: #e1e2e3;
        background-color: rgba(75, 192, 192, 0.6);
        outline:none;
        cursor: pointer;
      }
`

const Logo = styled.h1`
padding: 1rem 4rem;
font-size: 3rem;
color: white;
letter-spacing: 0.2rem;
filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.8));
`

const Par = styled.p`
color: #fafafa;
text-shadow: 2px 2px 2px rgba(0,0,0,0.8);
font-size: 2rem;
padding: 10rem 20rem;
`

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;    
    width: 100%;
    height: 100vh;
    background: rgb(5, 5, 20, 0.4);
    color: #fafafa;
    z-index: 5;
    overflow: hidden;
    `

const Landing = () => {
    return (
        <>
            <StyledMain>
                <LandingHeader>
                    <Logo>
                        Code-Flow
                </Logo>
                    {/* <button onClick={githubLogIn}>Log in with github</button> */}
                </LandingHeader>

                <video autoPlay loop muted
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "50%",
                        height: "50%",
                        zIndex: "1",
                        objectFit: "cover",

                    }}
                >
                    <source src={LandingVideo} type="video/webm" />
                </video>
                <Container>
                    <section>
                        <Par>
                            <TypeWriter />
                            {/*
                Full digital overview is the best means to combat these modern issues and optimize your company for the future. */}
                        </Par>
                    </section>
                </Container>
            </StyledMain>
        </>
    )
}

export default Landing;