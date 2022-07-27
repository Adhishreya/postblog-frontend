import './App.css';
import { Routes, Route, Link, Navigate,useSearchParams } from 'react-router-dom';
import { Authenticate, Home, Login, Register, SideNavigator } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from 'styled-components';
import Post from './components/Post';
import SavedPost from './components/SavedPost';
import Stories from './components/Stories';
import { useState } from 'react';
import WritePost from './components/WritePost';
import UserPosts from './components/UserPosts';

const Image = styled.img`
cursor: pointer;
width:2rem;
height:2rem;
background:#cbd5e1;
border-radius:50%;
top: 0;
`;

const Button = styled.img`
cursor: pointer;
width:2rem;
height:2rem;
background:#cbd5e1;
border-radius:50%;
top: 0;
`;

const SideBar = styled.div`
height: 90%;
position:sticky;
padding:0rem 2rem 0rem 2rem;
border-right: 2px solid #9ca3af;
`;

const Wrapper = styled.div`
height: 100%;
`;

const Container = styled.div`
height: 100%;
overflow-y: ${(props)=>props.overflow && "hidden"};
`

const App = () => {

  const [overflow,setOverflow] = useState(true);

  return (
    <Container className="App" overflow={overflow}>
      <Wrapper className="d-flex m-2">
        <SideBar
          className="d-flex flex-column w-2 justify-content-evenly">
          <Link className="navbar-brand displa-6 text-center fs-4 fw-bold" style={{ color: "black" }} to="/">BG</Link>
          <Link to="/" className='displa-6 text-center fs-4 fw-bold'><i className="bi bi-house" style={{ color: "black" }}></i></Link>
          <Link to="/me/notifications" className='displa-6 text-center fs-4 fw-bold'><i class="bi bi-bell" style={{ color: "black" }}></i></Link>
          <Link to="/me/lists" className='displa-6 text-center fs-4 fw-bold'><i class="bi bi-bookmarks" style={{ color: "black" }}></i></Link>
          <Link to="/me/stories/drafts" className='displa-6 text-center fs-4 fw-bold'><i class="bi bi-file-text" style={{ color: "black" }}></i></Link>
          <hr />
          <Link to="/p/97ac9feca675/edit" className='displa-6 text-center fs-4 fw-bold'><i class="bi bi-pencil-square" style={{ color: "black" }}></i></Link>

          <hr />
          <Image type="button" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?" />
        </SideBar>
        <div className="container fluid bg-warning.bg-gradient">
          <Routes>
            <Route path='/' element={<Home />}>
            </Route>
            <Route path='/home' element={<Home />} />
            <Route path='/post/*' element={<Post setOverflow={setOverflow}/>} />
            <Route path='/me/lists' element={<SavedPost />} />
            <Route path='/me/stories/*' element={<Stories />} />
            <Route path='/@:username/*' element={<UserPosts />} />
            <Route path='/p/97ac9feca675/edit' element={<WritePost/>}/>
            <Route path='/authenticate' element={<Authenticate />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </div>
        <div>
          
          <SideNavigator/>
        </div>
      </Wrapper>
    </Container>
  );
}

export default App;
