import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { fetchById } from '../services/postService';
import Comments from './Comments';
import Likes from './Likes';
import RelatedTopics from './RelatedTopics';

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
overflow-y: ${(props) => props.likesVisible && "hidden"};
height: ${(props) => props.likesVisible && "100%"};
`;

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
justify-content: space-between;
align-items: center;
`;

const Body = styled.div` 

margin: 1rem 0rem;
text-align: start;

`;
const PostFooter = styled.div`
display:flex;
margin: 1rem 0rem;
align-items: center;
justify-content: space-between;
`;
const PostImage = styled.img`
 width:100%;
 height:35rem;
 margin:0rem auto ;
 background:#cbd5e1;
 `;

const PostName = styled.h3`
width: fit-content;
margin-bottom: 0.5rem;
font-weight: 700;
font-size: 2rem;
margin: 1rem 0rem;
`;

const AlignRight = styled.div`
gap: 1rem;
justify-self: end;
display: flex;
`;

const AlignLeft = styled.div`
justify-self: end;
display: flex;
gap:2rem;
align-items: center;
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


const Post = ({ setOverflow }) => {

    const [src, setSrc] = useState('');
    const [alt, setAlt] = useState('');
    const [username, setUsername] = useState('username');
    const [postedAt, setPostedAt] = useState('postedAtAt');
    const [likes, setLikes] = useState(0);
    const [header, setHeader] = useState('header of the post');
    const [postBody, setPostBody] = useState([])
    const [commentCount, setCommentCount] = useState(0);
    const [topics,setTopics] = useState([]);
    const [likesVisible, setLikesVisible] = useState(false);
    const [commentsVisible, setCommentsVisible] = useState(false);


    useEffect(() => {
        const id = (new URL(document.location)).pathname.split('/')[2].split('@')[1];
        fetchById(id).then(res => {
            setHeader(res.postHeader);
            // setPostBody(res.postBody);
            setTopics(res.topics);
            setPostedAt(res.setPostedAtAt);
            setLikes(res.likes);
            setCommentCount(res.commentCount);

            let stringified = '[' + res.postBody.replace(/'/g, '"') + ']';


            //    let services = JSON.parse(new Object(eval(postBody)))[0];
            // console.log(JSON.parse(new Object(eval(postBody)))[0]);

            // console.log(JSON.parse(stringified))
            setPostBody(JSON.parse(stringified)[0])
            // console.log(postBody[0])    

        })
    }, []);

    useEffect(() => {
        likesVisible ? setOverflow(true) : setOverflow(false);
    }, [likesVisible])

    return (
        <Wrapper likesVisible={likesVisible}>
            <Header>
                <AlignLeft>
                    <Avatar src={src} alt={alt} />
                    <small>{username}</small>
                    <small >{postedAt}</small>
                </AlignLeft>
                <AlignRight>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-linkedin"></i>
                    <i className="bi bi-link-45deg"></i>
                    <i className="bi bi-bookmark-plus"></i>
                </AlignRight>
            </Header>
            <PostName>{header}</PostName>
            {/* <PostImage /> */}
            <TopicsList>
                {topics.map(topic => <Topic>{topic}</Topic>)}
            </TopicsList>
            <Body>{postBody && postBody.length > 0 && postBody.map(body =><>
                    {
                        body.type === "text" && <p>{body.value}</p>
                    }
                    {
                        body.type === "image" || body.type === "search" && <PostImage src={body.value} />
                    }
                </>
                
            )
            }
            </Body>
            <PostFooter>
                <a><i className="bi bi-suit-heart"></i><small style={{ marginLeft: "1rem", cursor: "pointer" }} onClick={() =>
                    setLikesVisible(true)
                }>{likes}</small></a>
                <a><i className="bi bi-chat"></i><small style={{ marginLeft: "1rem", cursor: "pointer" }} onClick={() => {
                    setCommentsVisible(true);
                }
                }>{commentCount}</small></a>
                <a><i className="bi bi-bookmark-plus"></i></a>
            </PostFooter>
            <hr />
            <RelatedTopics />
            <RelatedTopics />
            {likesVisible && <Likes setLikesVisible={setLikesVisible} header={header} />}
            {commentsVisible && <Comments commentCount={commentCount} setCommentsVisible={setCommentsVisible} header={header} />}
        </Wrapper>
    )
}

export default Post;