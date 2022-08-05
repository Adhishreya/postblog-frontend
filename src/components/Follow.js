import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getLikesById } from '../services/likesService';

import { useSelector } from 'react-redux'

const Container = styled.div`
position: absolute;
background: rgb(241, 245, 249,0.9);
width: 100%;
height: 100%;
top: 0;
left: 0;
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
gap:1rem;
margin: 1rem 0rem;
align-items: center;
`;

const Button = styled.button`
padding: 0.5rem 1rem;
border-radius: 1.5rem;
height: fit-content;
border:2px solid #16a34a;
background-color:#16a34a;
cursor:pointer;
color: aliceblue;
margin-left: auto;
;
`

const Wrapper = styled.div`
width: 50%;
margin: 4rem auto;
display: flex;
flex-direction: column;
`;

const Follow = ({ setLikesVisible, header }) => {

    const [likedBy, setLikedBy] = useState([]);
    const [count, setCount] = useState(0);

    const {post} = useSelector(state => state.post);

    useEffect(() => {
        if(post)
        getLikesById(post.id).then(res => {
            setLikedBy(res);
            likedBy &&  setCount(likedBy.length);
        });


    }, [])

    return (
        <Container>
            <Wrapper>
            <Close onClick={() =>setLikesVisible(false)}
             className='displa-6 text-center fs-1 fw-bold'><i class="bi bi-x"></i></Close>
            <h2>{count} users Liked this {header}</h2>
                {
                    likedBy && likedBy.map(like => <LikedUsers key={like.id} username={like.userDto.username} id={like.userDto.id} image={like.userDto.image} />)

                }

                <LikedUsers username=" {like.userDto.username}" id="{like.userDto.id}" image="{like.userDto.image}" />
                <LikedUsers username=" {like.userDto.username}" id="{like.userDto.id}" image="{like.userDto.image}" />
                <LikedUsers username=" {like.userDto.username}" id="{like.userDto.id}" image="{like.userDto.image}" />
                <LikedUsers username=" {like.userDto.username}" id="{like.userDto.id}" image="{like.userDto.image}" />
                <LikedUsers username=" {like.userDto.username}" id="{like.userDto.id}" image="{like.userDto.image}" />
                <LikedUsers username=" {like.userDto.username}" id="{like.userDto.id}" image="{like.userDto.image}" />
                <LikedUsers username=" {like.userDto.username}" id="{like.userDto.id}" image="{like.userDto.image}" />
                <LikedUsers username=" {like.userDto.username}" id="{like.userDto.id}" image="{like.userDto.image}" />
                <LikedUsers username=" {like.userDto.username}" id="{like.userDto.id}" image="{like.userDto.image}" />
                <LikedUsers username=" {like.userDto.username}" id="{like.userDto.id}" image="{like.userDto.image}" />
                <LikedUsers username=" {like.userDto.username}" id="{like.userDto.id}" image="{like.userDto.image}" />
                <LikedUsers username=" {like.userDto.username}" id="{like.userDto.id}" image="{like.userDto.image}" />
            </Wrapper>
        </Container>
    )
}
const FollowUsers = ({ username, id, image }) => {
    return (
        <List>
            <Image src={image} />
            <h6>{username}</h6>
            <Button>Follow</Button>
        </List>
    )
}

export default Follow;