import React, {useState, useEffect } from 'react';
import Spinner from '../components/Ui/Spinner';
import axios from 'axios'
import styled from 'styled-components'
import './../styles.css'
import RepoInfo from '../components/repoInfo'

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 94vw;
height: 100%;
margin-left: 6vw;
margin-top: 20vh;
color: ${({theme}) => theme.text};
background-color: ${({theme}) => theme.body};

&>form {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

&>form>input {
    outline: none;
    border: none;
    margin-right: 0.3rem;
    background-color: ${({theme}) => theme.btnColor};
    color: ${({theme}) => theme.body};
    padding: 0.4rem 0.6rem;
    border-radius: 2rem;

    &:active,
    &:hover {
       transform: scale(1.3);
       border: 1px dotted lightgreen;
       animation: inputFX 3s infinite ease;
       
    }

    ::placeholder {
        padding-left: 0.3rem;
    }
    
}

&>form>button {
    outline: none;
    border: none;
    width: 100px;
    background-color: ${({theme}) => theme.btnColor};
    color: ${({theme}) => theme.body};
    padding: 0.4rem 0.6rem;
    border-top-left-radius: 1rem;
    border-bottom-right-radius: 1rem;

    &:hover {
        tranform: scale(0.96);
        background: #282828;
        color: white;
    }
`

const Koti = () => {

    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [repoDetails, setRepoDetails ] = useState({});
    const [repoLoading, setRepoLoading ] = useState(false);


    useEffect(() => {
        setRepos([]);
        setRepoDetails({});
    }, [username]);

    function handleSubmit(e) {
        e.preventDefault(true);
        searchRepos();
    };

    function searchRepos() {
     setLoading(true)
     axios({
         method: "get",
         url: `https://api.github.com/users/${username}/repos`,
     })
     .then(resp => {
         setLoading(false);
         setRepos(resp.data);
     });
    }

    function repoData(repo) {
        return(
            
            <div className="list" onClick={() => getDetails(repo.name)} key={repo.id}>
                <h3>{repo.name}</h3>
            </div>
        );
    }

    function getDetails(repoName) {

        const avatar = {}
        setRepoLoading(true);
        axios({
            method: "get",
            url: `https://api.github.com/repos/${username}/${repoName}`,
        })
        .then(resp => {
            setRepoLoading(false);
            setRepoDetails(resp.data);
            console.log(resp.data)
        });
    }


    return ( 
        <StyledDiv>
            <h3>Enter name to get Git repo</h3>
            <form>
            <input 
            className="input"
            value={username}
            placeholder="Search github user"
            onChange={e => setUsername(e.target.value)}
            />
            <button className="btn" onClick={handleSubmit}>{loading ? <Spinner /> : "Search"}</button>
            </form>
            <div className="gitRepos">
                {repos.map(repoData)}
            </div>

            <div>
                <RepoInfo repoDetails={repoDetails} loading={repoLoading}/>
            </div>
        </StyledDiv>
     );
}
 
export default Koti;