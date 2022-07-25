import React, { useEffect, useState } from 'react'
import { Alert, ListGroup, ListGroupItem } from 'react-bootstrap';
import styled from 'styled-components';
import { fetchPosts } from '../services/postService';

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
justify-content: space-between;
`;
const PostDetails = styled.div` 

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
    const fetchProducts = () => {
        fetchPosts().then(res => setPosts(res));
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <div className="container">
            <ListGroup>
                {!posts &&
                    <Alert variant="danger">
                        No posts available</Alert>

                }
                {posts &&
                    posts.map((post, index) =>
                        <ListGroupItem className="list-group-item mt-3 w-75 mx-auto" onClick={() => { }}>
                            <div className="d-flex w-full ">
                                <div>
                                    <img className='w-25' src={post.user.image} alt={`${post.user.image} photo`} />
                                    <small>{post.user.username}</small>
                                    <div className="fw-bold">{post.postHeader}</div>
                                    <div className='text-start'>{post.postBody}</div>
                                    ~<small >{post.postedAtAt}</small>
                                    <div className="d-flex w-100">
                                        <i className="bi bi-heart mx-2"></i>
                                        <div>{post.likes}</div>
                                        <a href={`http://localhost:8080/commentList/${post.id}`}><i
                                            class="bi bi-menu-up mx-2"></i></a>
                                    </div>
                                </div>
                            </div>
                        </ListGroupItem>
                    )
                }

                <ListCard />


            </ListGroup>
        </div>
    )
}

const ListCard = () => {
    return (
        <CustomListGroupItem className="mt-3 w-100 mx-auto" onClick={() => { }}>
            <div className=" w-full ">
                <Header>
                    <Avatar src="" alt="" />
                    <small>username</small>
                    <small >postedAtAt</small>
                </Header>
                <PostBody>
                    <PostDetails>
                        <PostName className="fw-bold">postHeader</PostName>
                        <div className='text-start'>post.postBody</div>
                        <PostFooter>
                            <Topic>Topic</Topic>
                            <a><i class="bi bi-bookmark-plus"></i></a>
                        </PostFooter>
                    </PostDetails>
                    <PostImage />
                </PostBody>
            </div>
        </CustomListGroupItem>
    )
}

export default Home