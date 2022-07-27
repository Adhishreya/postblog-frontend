import React, { useState } from 'react'

import styled from 'styled-components';
import { getCommentsById } from '../services/commentService';

const Container = styled.div`
position: absolute;
background: aliceblue;
width: 27%;
height: 100%;
top: 0;
right: 0;
z-index: 1;
overflow-y: scroll;
`;

const Image = styled.img`
cursor: pointer;
width:2rem;
height:2rem;
background:#cbd5e1;
border-radius:50%;

`;

const Close = styled.div`
margin-left:auto ;
margin-left: auto;
`;

const List = styled.div`
display: flex;
width: 80%;
margin: 1rem ;
flex-direction: column;
`;

const Header = styled.div`
display: flex;
gap:1rem;
`;

const Button = styled.button`
padding: 0.5rem 1rem;
border-radius: 1.5rem;
height: fit-content;
border:none;
background-color: ${(props)=>props.disabled?"#86efac":" #16a34a"};
cursor:pointer;
color: aliceblue;
margin-left: auto;
margin-top: 1rem;
;
`

const Wrapper = styled.div`
width: 100%;
margin: 4rem auto;
display: flex;
flex-direction: column;
`;

const Details = styled.div`
display: flex;
flex-direction: column;
`;

const CommentBody = styled.div`
text-align: start;
justify-content: start;
align-items: flex-start;
`;


const Footer = styled.div`
display:flex;
margin: 1rem 0rem;
align-items: center;
justify-content: space-between;
`;

const FlexContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Input = styled.textarea`
width: 100%;
height: 8rem;
background: transparent;
border: none;
outline: none;
padding: 1rem;
resize: none;
`;

const Card = styled.div`
width: 80%;
display: flex;
background: white;
flex-direction: column;
margin: 1rem auto;
padding: 1rem 1rem;
box-shadow: 0rem 0rem 1rem 1rem #d1d5db;
`;

const Comments = ({ setCommentsVisible, commentCount }) => {

    const [comments, setComments] = useState([]);

    const logedInUsername = 'username'

    const [postcomment,setPostComment] = useState('');

    useState(()=>{
        const params = (new URL(document.location)).searchParams;
        const id = params.get('id');

        getCommentsById(id).then(res=>setComments(res));
    },[])

    return (
        <Container>
            <Wrapper>
                <FlexContainer>
                    
                <h2>Responses ({commentCount})</h2>
                <Close onClick={() =>setCommentsVisible(false)}
             className='displa-6 text-center fs-1 fw-bold'><i class="bi bi-x"></i></Close>
                
                </FlexContainer>
                <Card>
                <Header>
                    <Image/> 
                    <h6>{logedInUsername}</h6>
                    </Header>
                    <hr/>
                    <Input placeholder='What are your thoughts?' onChange={(e)=>setPostComment(e.target.value)}/>
                    <hr/>
                    <Button disabled={postcomment && postcomment.length>0?false:true}>Respond</Button>
                </Card>
           
                {
                    comments ? comments.map(comment => <CommentItem postedAt={comment.commentedAt} body={comment.comment} username={comment.user.username} image={comment.user.image} id={comment.user.id} commentId={comment.id} postId={comment.postId} likes={comment.likes} />)
                    :
                    <CommentItem postedAt="{comment.commentedAt}" body="{comment.comment}" username="{comment.user.username}" image="{comment.user.image}" id="{comment.user.id}" commentId="{comment.id}" postId="{comment.postId}" likes="{comment.likes}" />
                }
                
            </Wrapper>
        </Container>
    )
}

const CommentItem = ({ postedAt, username, image, body, id, commentId, postId, likes }) => {
    return (
        <List>

            <Header>
                <Image src={image} />
                <Details>
                    <h6>{username}</h6>
                    <p>{postedAt}</p>
                </Details>
            </Header>
            <CommentBody>
                {body}
            </CommentBody>
            <Footer>
                <a>
                    <i class="bi bi-suit-heart"></i>
                    <small style={{ marginLeft: "1rem", cursor: "pointer" }} >
                        {likes}
                    </small>
                </a>

            </Footer>

        </List>)

}

export default Comments;