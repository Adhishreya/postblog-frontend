import React, { useState } from 'react';
import styled from 'styled-components';


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
const Card = styled.div`
display:flex;
align-items: center;
width: 100%;
justify-content: space-between;
cursor: pointer;
`;

const Avatar = styled.img`
cursor: pointer;
width:5rem;
height:5rem;
background:#cbd5e1;
border-radius:50%;

`;

const UserInfo = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
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

const UserHeader = styled.p`
color: #a1a1aa;
font-size: 18px;
text-align: start;
`;



const Header4 = styled.p`
color: #a1a1aa;
font-size: 18px;
text-align: start;
`;

const TopicList = styled.div`
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

const FollowCard = styled.div`
display:flex;
align-items: center;
justify-content: start;
text-align: start;
`;

const UserSideNavigator = () => {
    const [followers,setFollowers] = useState(['demo1',"demo2","demo3","demo4"]);

    return (
        <Wrapper className='d-flex flex-column me-3'>
            <Button >Get Unlimited Access</Button>
            <InputComponent>
                <i className="bi bi-search"></i>
                <Input placeholder='Search user/article' />
            </InputComponent>
            <Avatar />
            <UserBios>
            <UserName>username</UserName>
            <UserHeader>0 Followers</UserHeader>
            <UserInfo>bio</UserInfo>
            </UserBios>
            <Card>
            <Button style={{ backgroundColor: "green"  ,width:"8rem"}}>Follow</Button>
            <Button style={{ backgroundColor: "green", borderRadius: "50%" ,width:"2.5rem"}}><i className="bi bi-envelope-plus"></i></Button>
            </Card>
            <Header4>
        Following
    </Header4>
    <TopicList>
            {followers.map((follow,id)=><FollowComponent key={id} username={follow}/>)}
    </TopicList>
           
        </Wrapper>
    )
}

const FollowComponent = ({username}) =>{
    return(
        <FollowCard>
        <Image/>
        <User>{username}</User>
        </FollowCard>
    )
}

export default UserSideNavigator;