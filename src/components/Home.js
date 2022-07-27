import React, { useEffect, useState } from 'react'
import { Alert, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { fetchPosts } from '../services/postService';
import { Link } from 'react-router-dom';

const Avatar = styled.img`
cursor: pointer;
width:2.5rem;
height:2.5rem;
background:#cbd5e1;
border-radius:50%;
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

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchProducts = () => {
            fetchPosts().then(res => setPosts(res));
        }
        fetchProducts();
    }, [])
    return (
        <div className="container">
            <ListGroup>
                {!posts &&
                    <Alert variant="danger">
                        No posts available</Alert>

                }
                {posts && posts!==null && posts.length>0?
                    posts.map((post, index) =>
                        <Link to={`/post/?id=${post.id}`} style={{ textDecoration: "none", color: "black" }}>
                            <ListCard onClick={() => { }} src="" alt="" topic="topic" username={post.user.username} postedAt={post.postedAt} header={post.postHeader} body={post.postBody} />
                        </Link>
                    )
                    :
                    <Link to={`/post/?id=""`} style={{ textDecoration: "none", color: "black" }}>
                        <ListCard onClick={() => { }} src="" alt="" topic=" " username="username" postedAt="" header="" body="" />
                    </Link>
                }
            </ListGroup>
        </div>
    )
}

export const ListCard = ({ src,
    alt,
    username,
    postedAt,
    header,
    topic,
    body,
    saved }) => {
    return (
        <CustomListGroupItem className="mt-3 w-100 mx-auto" onClick={() => { }}>
            <div className=" w-full ">
                <Header>
                    <Avatar src={src} alt={alt} />
                    <Link style={{color:"black" ,textDecoration:"none"}} to={`/@${username}/home`}><small>{username}</small></Link>
                    <small >{postedAt}</small>
                </Header>
                <PostBody>
                    <PostDetails>
                        <PostName className="fw-bold ">{header}</PostName>
                        <div className='text-start'>{body}</div>
                        <PostFooter>
                            <Topic>{topic?topic:"  "}</Topic>
                            {saved ? <a><i class="bi bi-bookmark-fill"></i></a> : <a><i class="bi bi-bookmark-plus"></i></a>}
                        </PostFooter>
                    </PostDetails>
                    <PostImage />
                </PostBody>
            </div>
        </CustomListGroupItem>
    )
}

export default Home