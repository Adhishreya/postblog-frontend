import React from 'react'
import styled from 'styled-components';
import { ListCard } from './Home';

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const SavedPost = () => {
  return (
    <Wrapper>
        <ListCard src="" alt="" topic="topic" username="username" postedAt="postedAt" header="postHeader" body="body" saved={true}/>
        <ListCard src="" alt="" topic="topic" username="username" postedAt="postedAt" header="postHeader" body="body" saved={true}/>
        <ListCard src="" alt="" topic="topic" username="username" postedAt="postedAt" header="postHeader" body="body" saved={true}/>
        <ListCard src="" alt="" topic="topic" username="username" postedAt="postedAt" header="postHeader" body="body" saved={true}/>
    </Wrapper>
  )
}

export default SavedPost;