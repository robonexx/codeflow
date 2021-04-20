import React from 'react'
import {GitHubContext, GithubProvider} from './context'
import styled from 'styled-components'




const UserInfo = () => {

    const {githubUser} = React.useContext(GitHubContext)
    const {puclic_repos, avatar_url} = githubUser;
    console.log(githubUser)

    return <h3>user info component </h3>
}

export default UserInfo;