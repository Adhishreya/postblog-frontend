import React from 'react';
import { Routes ,Route,Link} from 'react-router-dom';
import styled from 'styled-components';
import Drafts from './Drafts';
import Published from './Published';
import Responses from './Responses';

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const Button = styled.button`
padding: 0.5rem 1rem;
border-radius: 1.5rem;
background-color: #16a34a;
cursor:pointer;
border: none;
color: aliceblue;
margin: 0.5rem 0rem;
;
`
const Tabs = styled.div`
width: 100%;
display: flex;
border-bottom: 2px solid #9ca3af;
gap: 2rem;
padding: 1rem 0rem;
`;

const Header = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;

const Tab = styled.div`
display: flex;
cursor: pointer;
&:hover{
    font-weight: 500;
}
`;


const Stories = () => {
  return (
    <Wrapper>
        <Header>
        <h1>Your stories</h1>
        <Button>Write a story</Button>
        </Header>        
        <Tabs>
            <Tab><Link to="/me/stories/drafts" style={{textDecoration:"none",color:"black"}}>Drafts</Link></Tab>
            <Tab><Link to="/me/stories/published" style={{textDecoration:"none",color:"black"}}>Published</Link></Tab>
            <Tab><Link to="/me/stories/responses" style={{textDecoration:"none",color:"black"}}>Responses</Link></Tab>
        </Tabs>
        <Routes>
            <Route element={<Drafts/>} path="drafts"/>
            <Route element={<Published/>} path="published"/>
            <Route element={<Responses/>} path="responses"/>
        </Routes>   
        </Wrapper>
  )
}

export default Stories