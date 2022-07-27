import React from 'react';


const Wrapper = styled.div`
height: fit-content;
position:sticky;
padding:0rem 2rem 0rem 2rem;
border-left: 2px solid #9ca3af;
justify-content: space-between;
`;

const InputComponent = styled.div`
display: flex;
padding: 0.5rem;
border:2px solid #9ca3af;
justify-content: space-between;
align-items: center;
gap:2rem;
border-radius: 1.5rem;
`;

const Input = styled.input`
border:none;
outline:none;
/* border-bottom: 2px solid #9ca3af; */
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

const Image = styled.img`
cursor: pointer;
width:2rem;
height:2rem;
background:#cbd5e1;
border-radius:50%;

`;

const Button = styled.button`
padding: 0.5rem 0rem;
border-radius: 1.5rem;
background-color: #0f172a;
cursor:pointer;
color: aliceblue;
margin: 0.5rem 0rem;
;
`
const OutLinedButton = styled.button`
padding: 0.5rem 1rem;
border-radius: 1.5rem;
height: fit-content;
border:2px solid #16a34a;
color:#16a34a;
cursor:pointer;
;
`

const Card = styled.div`
display:flex;
align-items: center;
width: 100%;
justify-content: space-between;
cursor: pointer;
`;

const Avatar = styled.img`
cursor: pointer;
width:3rem;
height:3rem;
background:#cbd5e1;
border-radius:50%;

`;

const UserInfo = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content: start;
`;

const UserName = styled.p`
font-size: 16px;
font-weight: 900;
`
const UserBios = styled.div`
color: #a1a1aa;

`;

const Post  = styled.div`
display:flex;
margin-top: 1rem;
 width: 100%;
 gap:1rem;
 cursor: pointer;
 align-items: center;
`;

const PostName = styled.h3`
width: fit-content;
margin-bottom: 0.5rem;

`;

const UserSideNavigator = () => {
    return (
        <Wrapper className='d-flex flex-column me-3'>
            <Button >Get Unlimited Access</Button>
      <InputComponent>
        <i class="bi bi-search"></i>
        <Input placeholder='Search user/article' />
      </InputComponent>
            <Avatar/>
            <Button style={{backgroundColor:"green"}}>Follow</Button>
            <Button style={{backgroundColor:"green",borderRadius:"50%"}}><i class="bi bi-envelope-plus"></i></Button>
        </Wrapper>
    )
}

export default UserSideNavigator;