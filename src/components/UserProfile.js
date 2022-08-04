import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';


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

const UserProfile = () => {

    const [followingCount, setFllowingCount] = useState(0);
    const [followerCount, setFollowerCount] = useState(0);

    return (
        <Wrapper>

        </Wrapper>
    )
}

export default UserProfile;