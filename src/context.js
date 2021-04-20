import React, {useState, useEffect } from 'react'
import mockUser from './mockData.js/mockUser'
import mockRepos from './mockData.js/mockRepos'

import axios from 'axios';

const URL = 'https://api.github.com';

const GitHubContext = React.createContext();

const GithubProvider = ({children}) => {

    const [githubUser, setGithubUser] = useState(mockUser);
    const [repos, getRepos] = useState(mockRepos);
    
    return (
            <GitHubContext.Provider value={{githubUser, repos}}>{children}</GitHubContext.Provider>
            )

};

export {GithubProvider, GitHubContext };