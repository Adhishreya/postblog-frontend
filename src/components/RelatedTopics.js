import React, { useState } from 'react'
import styled from 'styled-components';
import { ListCard } from './Home';


const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const RelatedTopics = () => {

    const [recommended, setRecommended] = useState([]);

    return (
        <Wrapper>
            <ListCard src="" alt="" topic="topic" username="username" saved={false} postedAt="postedAt" header="postHeader" body="body" />
        </Wrapper>
    )
}

export default RelatedTopics;