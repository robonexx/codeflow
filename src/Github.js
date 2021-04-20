import styled from 'styled-components'

const UL = styled.ul`
display: flex;
flex-direction: column;
list-style: none;
justify-content: center;
align-items: flex-start;
`

const Github = (props) => {


    return (
        <>
            <UL>
                {
                    props.repos.map(repo => {
                        return (
                            <li onClick={e => props.getLanguages(props.username, repo.name)}>{repo.name}</li>
                        )
                    })



                }
            </UL>

            {
                props.languages ? Object.entries(props.languages).map((t, k) => <p key={k}>{t}</p>) : null
            }
        </>
    )
}

export default Github