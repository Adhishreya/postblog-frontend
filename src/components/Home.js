import React, { useEffect, useState } from 'react'
import { Alert, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { fetchPosts } from '../services/postService';
import { Link } from 'react-router-dom';
import { addBookmark } from '../services/bookMarkService';
import { formatDate } from '../utility/formatDate';
import { useDispatch,useSelector } from 'react-redux'
import {selected} from '../redux/postSlice';

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


const TopicsList = styled.div`
display: flex;
flex-wrap: wrap;
gap:2rem;
`;
const Topic = styled.div`
padding: 0.5rem;
border:2px solid #9ca3af;
gap:2rem;
border-radius: 1.5rem;
background: #cbd5e1;
text-align: center;
cursor: pointer;
`;

const Home = () => {
    const [posts, setPosts] = useState([]);

    const dispatcher = useDispatch();

    useEffect(() => {
        dispatcher(selected(null));

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
                {posts && posts !== null && posts.length > 0 ?
                    posts.map((post, index) =>
                        <Link key={post.id} to={`/post/${post.postHeader}@${post.id}`} style={{ textDecoration: "none", color: "black" }}>
                            <ListCard id={post.id} onClick={() => { }} src={post.user.image} alt="" topics={post.topics} username={post.user.username} userId = {post.user.id} postedAt={post.postedAtAt} header={post.postHeader} body={post.postBody} />
                        </Link>
                    )
                    :
                    <Link to={`/post/id=""`} style={{ textDecoration: "none", color: "black" }}>
                        {/* <ListCard id='' onClick={() => { }} src="" alt="" topics="" username="username" postedAt="" header="" body="" /> */}
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
    topics,
    body,
    userId,
    id,
    saved }) => {


    const [post, setPost] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        if (body) {
            let stringified = '[' + body.replace(/'/g, '"') + ']';

            stringified = JSON.parse(stringified)[0];

            stringified.forEach(item => {
                if (item.type === "text") {
                    setPost(item.value);
                    return false;
                }
            });

            stringified.forEach(item => {
                if (item.type === "search" || item.type === "image") {
                    setImage(item.value);
                    return false;
                }
            })
        }

    }, []);

    const bookMarkPost = (id) => {
        addBookmark(id);
    }

    return (
        <CustomListGroupItem className="mt-3 w-100 mx-auto" onClick={() => { }}>
            <div className=" w-full ">
                <Header>
                    <Avatar src={src} alt={alt} />
                    <Link style={{ color: "black", textDecoration: "none" }} to={`/@${username}-${userId}/profile`}><small>{username}</small></Link>
                    <small >{formatDate(postedAt)}</small>
                </Header>
                <PostBody>
                    <PostDetails>
                        <PostName className="fw-bold ">{header}</PostName>
                        <div className='text-start'>{post.slice(0, 150)}.....</div>
                        <PostFooter>
                            <TopicsList>
                                {topics && topics.length > 0 && topics.map((topic, index) => <Topic key={index}>{topic}</Topic>)}
                            </TopicsList>
                            {saved ? <button ><i className="bi bi-bookmark-fill"></i></button> : <div onClick={() => bookMarkPost(id)}><i className="bi bi-bookmark-plus"></i></div>}
                        </PostFooter>
                    </PostDetails>
                    <PostImage src={image} />
                </PostBody>
            </div>
        </CustomListGroupItem>
    )
}

export default Home