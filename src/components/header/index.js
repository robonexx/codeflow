import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Navbar from '../nav/Navbar'
import MenuBtn from '../nav/MenuBtn'
import { useMediaQuery } from 'react-responsive'
import Logo from './Logo'


const Content = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 6vh;
    border-bottom:${({ theme }) => theme.borderBottom};
    display: flex;
    justify-content center;
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    z-index: 20;
    `;

    
const Users = styled.div`
position: relative;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
  `

const User = styled.div`
position: relative;
display: flex;
align-items: center;
margin-right: 1rem;
`

const ProfileName = styled.h3`
  display: flex;
  font-size: 0.6rem;
  padding-left: 0.3rem;
  filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.4));
  text-transform: uppercase;
  `

const UserCircle = styled.img`
  border: 1px solid #1e2e3e;
  margin-left: 0.2rem;
  filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.4));
  border-radius: 50%;
  width: 32px;
  height: 32px;`

    const API_URL = `https://api.github.com/users/robonexx`;

const Header = (props) => {

    const [data, setData ] = useState([]);

    useEffect(() => {
        loadData();
        // getData();
},[])

const loadData = async () => {
    await fetch(API_URL)
    .then(res => res.json())
    .then(data => setData(data));
}

const isDesktopOrLaptop = useMediaQuery({

    query: '(min-width: 899px)'
})
const isMobileOrTablet = useMediaQuery({
    
    query: '(max-width : 900px)'
}) 

    return ( 
        <Content key={data.id}>
            
         <Logo />
         <Users >                       
                    {
                        props.members ?
                            props.members.map(member => {
                                return (
                                
                                    <User>
                                        <UserCircle src={data.avatar_url}/>
                                        <ProfileName>{data.name}</ProfileName>
                                    </User>
                                
                                )
                            }) : null
                    }
                </Users>
                
         {isDesktopOrLaptop && <Navbar />}
         {isMobileOrTablet && <MenuBtn />}
        </Content>
     );
}
 
export default Header;