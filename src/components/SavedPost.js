import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getBookMarks } from '../services/bookMarkService';
import { ListCard } from './Home';
import {useDispatch,useSelector} from 'react-redux';
import { loginFailure } from '../redux/userSlice';


const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const SavedPost = () => {

  const [post, setPost] = useState([]);

  const dispatcher = useDispatch();

  const {user} = useSelector(state => state.user);

  useEffect(() => {
    if(user !== null)
    getBookMarks(user.accessToken).then(res => {
      if(res!==null)
      setPost(res.post);
      else{
        dispatcher(loginFailure());
      }
    });
  }, [])

  return (
    <Wrapper>
      {
        post && post.length > 0 && post.map(item =>
          <>
            <ListCard src="" alt="" topics={item.topics} username={item.user.username} postedAt={item.postedAtAt} userId={item.user.id} header={item.postHeader} id={item.id} body={item.postBody} saved={true} />
          </>
        )
      }
    </Wrapper>
  )
}

export default SavedPost;