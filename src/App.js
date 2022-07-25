import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { Authenticate, Home, Login, Register, SideNavigator } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from 'styled-components';

const Image = styled.img`
cursor: pointer;
width:2rem;
height:2rem;
background:#cbd5e1;
border-radius:50%;

`;

const SideBar = styled.div`
height: 90%;
position:sticky;
padding:0rem 2rem 0rem 2rem;
border-right: 2px solid #9ca3af;
`;

const Wrapper  = styled.div`
height: 100%;
`;


const App = () => {
  return (
    <div className="App h-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          
          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item"><a className="nav-link active"
                aria-current="page" href="/home">Home</a></li> */}
            </ul>
            <div className="d-flex justify-content-between">
              <Link to="/authenticate/login" className="btn btn-success me-2">Login</Link>
              <Link to="/authenticate/register" className="btn btn-success">Register</Link>
            </div>
          </div>
        </div>
      </nav>
      <Wrapper className="d-flex m-2">
        <SideBar
          className="d-flex flex-column w-2 justify-content-evenly">
            <Link className="navbar-brand displa-6 text-center fs-4 fw-bold" style={{ color: "black" }} to="/">BG</Link>
          <Link to="/" className='displa-6 text-center fs-4 fw-bold'><i className="bi bi-house" style={{ color: "black" }}></i></Link>
          <Link to="/me/notifications" className='displa-6 text-center fs-4 fw-bold'><i class="bi bi-bell" style={{ color: "black" }}></i></Link>
          <Link to="/me/lists" className='displa-6 text-center fs-4 fw-bold'><i class="bi bi-bookmarks" style={{ color: "black" }}></i></Link>
          <Link to="/me/stories/drafts" className='displa-6 text-center fs-4 fw-bold'><i class="bi bi-file-text" style={{ color: "black" }}></i></Link>
          <hr />
          <Link to="/new-story" className='displa-6 text-center fs-4 fw-bold'><i class="bi bi-pencil-square" style={{ color: "black" }}></i></Link>

          <hr />
          <Image />

          {/* <a className="displa-6 text-center fs-1 fw-bold" ><i className=" bi bi-download"></i></a> */}

          {/* <a className="displa-6 text-center fs-1 fw-bold" href="http://localhost:3000/"> <i className="bi bi-image-fill"></i>
          </a>  */}

          {/* <a className="displa-6 text-center fs-1 fw-bold"><i className="bi bi-archive"></i></a>  */}
          {/* <a className="displa-6 text-center fs-1 fw-bold"><i className="bi bi-bookshelf"></i></a> */}
        </SideBar>
        <div className="container fluid bg-warning.bg-gradient">
          <Routes>
            <Route path='/' element={<Home />}>
              {/* <Navigate to="/home" replace={true} /> */}
              {/* <Redirect  */}
            </Route>
            <Route path='/home' element={<Home />} />
            <Route path='/authenticate' element={<Authenticate />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </div>
        <div>
          <SideNavigator />
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
