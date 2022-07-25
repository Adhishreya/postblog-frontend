import React, { useState } from 'react'
import styled from 'styled-components';
import RelatedTopics from './RelatedTopics';

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
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
 width:90%;
 height:35rem;
 margin:0rem auto ;
 background:#cbd5e1;
 `;

const Topic = styled.div`
padding: 0rem 0.5rem;
gap:2rem;
border-radius: 0.5rem;
background: #cbd5e1;
text-align: center;
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

const Post = () => {

    const [src, setSrc] = useState('');
    const [alt, setAlt] = useState('');
    const [username, setUsername] = useState('username');
    const [postedAt, setPostedAtAt] = useState('postedAtAt');
    const [header, setHeader] = useState('header of the post');
    const [postBody, setPostBody] = useState('What is the key to healthy living? The most common answer to that is healthy diet. Eating right kind of food at the right time help you go a longer way. This brings up a question, what is right kind of food?! According to health experts, right kind of food is a diet that provides our body with every essential nutrient including protein, micro and macronutrients, fluid, fibre et al. These factors further help maintain and improve our overall health. The World Health Organisation states that healthy diet helps protect us against several "chronic non-communicable diseases" like diabetes, cancer and others. "Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet," an article on WHO official website reads.')

    return (
        <Wrapper>
            <Header>
                <AlignLeft>
                <Avatar src={src} alt={alt} />
                <small>{username}</small>
                <small >{postedAt}</small>
                </AlignLeft>                
                <AlignRight>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-linkedin"></i>
                <i class="bi bi-link-45deg"></i>
                <i class="bi bi-bookmark-plus"></i>
                </AlignRight>
            </Header>
            <PostName>{header}</PostName>
            <PostImage />
            <Body>{postBody}</Body>
            <PostFooter>
                <a><i class="bi bi-suit-heart"></i></a>
                <a><i class="bi bi-chat"></i></a>
                <a><i class="bi bi-bookmark-plus"></i></a>
            </PostFooter>
            <hr/>
            <RelatedTopics/>
            <RelatedTopics/>
        </Wrapper>
    )
}

export default Post;