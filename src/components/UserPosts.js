import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { ListCard } from './Home';

const Avatar = styled.img`
cursor: pointer;
width:2.5rem;
height:2.5rem;
background:#cbd5e1;
border-radius:50%;
`;
const Tab = styled.div`
display: flex;
cursor: pointer;
&:hover{
    font-weight: 500;
}
`;
const Tabs = styled.div`
width: 100%;
display: flex;
border-bottom: 2px solid #9ca3af;
gap: 2rem;
padding: 1rem 0rem;
`;
const Header = styled.div`
display: flex;
gap:2rem;
align-items: center;
`;
const PostBody = styled.div`
display:flex;
width: 100%;
margin: 1rem 0rem;
text-align: start;
justify-content: space-between;
`;
const PostDetails = styled.div` 
width: 60%;
`;
const PostFooter = styled.div`
display:flex;
margin: 1rem 0rem;
align-items: center;
justify-content: space-between;
`;
const PostImage = styled.img`
 width:6rem;
 height:6rem;
 background:#cbd5e1;
 `;

const CustomListGroupItem = styled.div`
width:100%;
border-bottom: 2px solid #9ca3af;
`;

const PostName = styled.div`
font-size: 2rem;
`;

const Topic = styled.div`
padding: 0rem 0.5rem;
gap:2rem;
border-radius: 0.5rem;
background: #cbd5e1;
text-align: center;
`;

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const UserPosts = () => {
    return (
        <Container>
            <Wrapper>
            <Header>
                    <h1>Your stories</h1>
                    <p>bio</p>
                </Header>
                <Tabs>
                    <Tab><Link to="/@username/home" style={{ textDecoration: "none", color: "black" }}>Home</Link></Tab>
                    <Tab><Link to="/@username/followers" style={{ textDecoration: "none", color: "black" }}>Followers</Link></Tab>
                    <Tab><Link to="/@username/following" style={{ textDecoration: "none", color: "black" }}>Following</Link></Tab>
                </Tabs>
                <Routes>
                    <Route element={<Home />} path="home" />
                    <Route element={<Followers />} path="followers" />
                    <Route element={<Following />} path="following" />
                </Routes>


                
                
                
            </Wrapper>

        </Container>
    )
}

const Home = () =>{
    return(
<Link to={`/post/?id=`} style={{ textDecoration: "none", color: "black" }}>
                    <ListCard onClick={() => { }} src="" alt="" topic="topic" username='post.user.username' postedAt="post.postedAt" header="post.postHeader" body="post.postBody" />
                </Link>
    )
}

const Followers = () =>{
    return(
<h2>Followers</h2>
    )
}

const Following = () =>{
    return(
<h2>Following</h2>
    )
}

export default UserPosts