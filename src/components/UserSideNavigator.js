import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux'
import { follow, getFollowers, getFollowing } from '../services/userService';

const Wrapper = styled.div`
height: fit-content;
position:sticky;
top: 0;
padding:0rem 2rem 0rem 2rem;
border-left: 2px solid #9ca3af;
height: fit-content;
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
width: 14rem;
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

const FlexInfo = styled.div`
display: flex;
align-items: center;
gap:2rem;
margin: 1rem 0rem;
`;

const Container = styled.div`
position: absolute;
background: rgb(241, 245, 249,0.9);
width: 100%;
height: 100%;
top: 0;
left: 0;
z-index: 1;
overflow-y: scroll;
`;

const Close = styled.div`
margin-left:auto ;
margin-left: auto;
`;

const List = styled.div`
display: flex;
gap:1rem;
margin: 1rem 0rem;
align-items: center;
`;


const FollowWrapper = styled.div`
width: 50%;
margin: 4rem auto;
display: flex;
flex-direction: column;
`;

const UserSideNavigator = () => {
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);

    const [username, setUsername] = useState();
    const [src, setSrc] = useState();
    const [bio, setBio] = useState();

    const [viewFollowers,setViewFollowers] = useState(false);

    const { post } = useSelector(state => state.post);
    const { user } = useSelector(state => state.user);

    useEffect(() => {
        if (post) {
            setUsername(post.user.username);
            setSrc(post.user.image);
            setBio(post.user.bio);
            getFollowers(post.user.id).then(res => setFollowers(res));
            getFollowing(post.user.id).then(res => setFollowing(res));
        }
    }, []);

    const followUser = () => {
        follow(post.user.id, user.accessToken);
    }

    return (
        <Wrapper className='d-flex flex-column me-3'>
            <Button >Get Unlimited Access</Button>
            <InputComponent>
                <i className="bi bi-search"></i>
                <Input placeholder='Search user/article' />
            </InputComponent>
            <FlexInfo>
                <Avatar src={src} />
                <UserName>{username}</UserName>
            </FlexInfo>
            <UserBios>
                <UserHeader onClick={()=>setViewFollowers(true)}>{followers && followers.length} Followers</UserHeader>
                <UserInfo>{bio}</UserInfo>
            </UserBios>
            <Card>
                <Button style={{ backgroundColor: "green", width: "8rem" }} onClick={() => followUser()}>Follow</Button>
                <Button style={{ backgroundColor: "green", borderRadius: "50%", width: "2.5rem" }}><i className="bi bi-envelope-plus"></i></Button>
            </Card>
            <Header4>
                Following
            </Header4>
            {/* <TopicList>
                {followers.map((follow, id) => <FollowComponent key={id} username={follow} />)}
            </TopicList> */}
            {
                viewFollowers && <FollowComponent followers={followers} setViewFollowers = {setViewFollowers}/>
            }

        </Wrapper>
    )
}

const FollowComponent = ({ followers,setViewFollowers }) => {
    return (
        // <FollowCard>
        //     <Image />
        //     <User>{username}</User>
        // </FollowCard>
        <Container>
            <FollowWrapper>
                <Close onClick={() => setViewFollowers(false)}
                    className='displa-6 text-center fs-1 fw-bold'><i class="bi bi-x"></i></Close>
                {
                    followers && followers.map(follower => <FollowUser key={follower.id} username={follower.username} id={follower.id} image={follower.image} />)

                }
            </FollowWrapper>
        </Container>
    )
}

const FollowUser = ({ username, id, image }) => {
    return (
        <List>
            <Avatar src={image} />
            <h6>{username}</h6>
            <Button style={{ backgroundColor: "green", width: "8rem" }}>Follow</Button>
        </List>
    )
}


export default UserSideNavigator;