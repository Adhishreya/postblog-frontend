import React, { useState } from 'react'
import styled from 'styled-components';
import {useSelector} from 'react-redux';

const Wrapper = styled.div`
height: fit-content;
position:sticky;
top: 0;
padding:0rem 2rem 0rem 2rem;
border-left: 2px solid #9ca3af;
height: 100%;
gap:2rem;
`;

const InputComponent = styled.div`
display: flex;
padding: 0.5rem;
border:2px solid #9ca3af;
align-items: center;
gap:1rem;
border-radius: 1.5rem;
`;

const Input = styled.input`
border:none;
outline:none;
`;

const TopicsList = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
gap:2rem;
`;
const User = styled.div`
padding: 0.5rem;
color: #9ca3af;
text-align: start;
cursor: pointer;
`;

const Image = styled.img`
cursor: pointer;
width:2rem;
height:2rem;
background:#cbd5e1;
border-radius:50%;

`;

const Button = styled.button`
padding: 0.5rem 0rem;
border-radius: 1.5rem;
background-color: #0f172a;
cursor:pointer;
color: aliceblue;
margin: 0.5rem 0rem;
border: none;
font-weight: 700;
;
`
const Avatar = styled.img`
cursor: pointer;
width:5rem;
height:5rem;
background:#cbd5e1;
border-radius:50%;

`;

const Card = styled.div`
display:flex;
align-items: center;
justify-content: start;
text-align: start;
`;

const UserName = styled.p`
font-size: 20px;
font-weight: 900;
text-align: start;
color: black;
`
const UserBios = styled.div`
color: #a1a1aa;
`;

const Header4 = styled.p`
color: #a1a1aa;
font-size: 18px;
text-align: start;
`;

const ProfileEdit = styled.p`
color: #22c55e;
font-size: 18px;
font-weight: 500;
text-align: start;
`
;

const FlexInfo = styled.div`
display: flex;
align-items: center;
gap:2rem;
margin: 1rem 0rem;
`;

const MyProfielNavigator = () => {

    const [loggedIn,setLoggedIn] = useState();
    const [followers,setFollowers] = useState([]);

    const {user}  = useSelector(state => state.user);
  return (
    <Wrapper className='d-flex flex-column me-3'>
    <Button >Get Unlimited Access</Button>
    <InputComponent>
        <i class="bi bi-search"></i>
        <Input placeholder='Search user/article' />
    </InputComponent>
    <UserBios>
        <FlexInfo>
        <Avatar />
        <UserName>{user && user.username}</UserName>
        </FlexInfo>
    <ProfileEdit>Edit</ProfileEdit>
    </UserBios>
    <Header4>
        Following
    </Header4>
    <TopicsList>
            {followers.map(follow=><FollowComponent username={follow}/>)}
    </TopicsList>
</Wrapper>
  )
}

const FollowComponent = ({username}) =>{
    return(
        <Card>
        <Image/>
        <User>{username}</User>
        </Card>
    )
}

export default MyProfielNavigator;