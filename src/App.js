import './App.css';
import { Routes, Route, Link, Navigate, useSearchParams, useRoutes,useNavigate,useLocation } from 'react-router-dom';
import { Authenticate, Home, Login, Register, SideNavigator,Post,SavedPost,Stories,WritePost,UserPosts,UserSideNavigator,MyProfielNavigator,UserProfile } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from 'styled-components';
import { useState } from 'react';

import { useSelector } from 'react-redux';

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
overflow-y: ${(props) => props.overflow && "hidden"};
`
const minNavigationPaths = ["/", "/home", "/me/notifications", '/me/stories/*']

// const NavigationRoute = () => useRoutes([
//   minNavigationPaths.map(route => {
//     return { path: route, element: <SideNavigator /> }
//   }
//   ),
//   { path: '/me/lists', element: <UserSideNavigator /> }
// ])

const App = () => {
  const [overflow, setOverflow] = useState(false);

  const id = (new URL(document.location)).searchParams.get('id');

  const [searchParams,setSearchParams] = useSearchParams();

  const {user} = useSelector(state => state.user);

  return (
    <Container className="App" overflow={overflow}>
      <Wrapper className="d-flex m-2">
        <SideBar
          className="d-flex flex-column w-2 justify-content-evenly">
          <Link className="navbar-brand displa-6 text-center fs-4 fw-bold" style={{ color: "black" }} to="/">BG</Link>
          <Link to="/" className='displa-6 text-center fs-4 fw-bold'><i className="bi bi-house" style={{ color: "black" }}></i></Link>
          <Link to="/me/notifications" className='displa-6 text-center fs-4 fw-bold'><i className="bi bi-bell" style={{ color: "black" }}></i></Link>
          <Link to="/me/lists" className='displa-6 text-center fs-4 fw-bold'><i className="bi bi-bookmarks" style={{ color: "black" }}></i></Link>
          <Link to="/me/stories/drafts" className='displa-6 text-center fs-4 fw-bold'><i className="bi bi-file-text" style={{ color: "black" }}></i></Link>
          <hr />
          <Link to="/p/97ac9feca675/edit" className='displa-6 text-center fs-4 fw-bold'><i className="bi bi-pencil-square" style={{ color: "black" }}></i></Link>
          
          {user && <><hr /><Link to={`/me/@:username`}><Image src={user.image} type="button" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?" /></Link></>}
        </SideBar>
        <div className="container fluid bg-warning.bg-gradient">
          <Routes>
            <Route path='/' element={<Home />}>
            </Route>
            <Route path='/home' element={<Home />} />
            <Route path='/post/*' element={<Post setOverflow={setOverflow} />} />
            <Route path='/me/lists' element={<RequiredAuth><SavedPost /></RequiredAuth>} />
            <Route path='/me/stories/*' element={<RequiredAuth><Stories /></RequiredAuth>} />
            <Route path='/@:username/*' element={<UserPosts />} />            
            <Route path='/p/97ac9feca675/edit' element={<RequiredAuth><WritePost /></RequiredAuth>} />            
            <Route path='/authenticate' element={<Authenticate />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </div>
        <div>
          {/* <NavigationRoute/> */}
          <Routes>
            {minNavigationPaths.map((route,id) => <Route key={id} element={<SideNavigator />} path={route} />
            )}
            <Route path={`/post/:postId`} element={<UserSideNavigator />} />
            <Route path={'/@:username/*'} element={<UserSideNavigator />} />
            <Route path="/me/lists" element={<RequiredAuth><MyProfielNavigator/></RequiredAuth>}/>
            <Route path= "/me/@:username" element={<UserProfile/>}/>
          </Routes>
        </div>
          {/* <Route path="*" element={<p>Nothing here</p>}> */}       
      </Wrapper>
    </Container>
  );
};


const RequiredAuth = ({children}) =>{
  const {user} = useSelector(state => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  if(user=== null){
  return  <Navigate to="/authenticate/login" state={{from : location }} replace/>
  }
  return children;
}

export default App;
