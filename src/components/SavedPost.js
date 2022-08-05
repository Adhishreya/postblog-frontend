import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getBookMarks } from '../services/bookMarkService';
import { ListCard } from './Home';
import {useDispatch,useSelector} from 'react-redux';


const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const SavedPost = () => {

  const [post, setPost] = useState([]);

  const {user} = useSelector(state => state.user);

  useEffect(() => {
    if(user)
    getBookMarks(user.accessToken).then(res => {
      setPost(res.post);
    });
  }, [])

  return (
    <Wrapper>
      {
        post && post.length > 0 && post.map(item =>
          <>
            <ListCard src="" alt="" topic={item.topics} username={item.user.username} postedAt={item.postedAt} header={item.postHeader} body={item.postBody} saved={true} />
          </>
        )
      }
    </Wrapper>
  )
}

export default SavedPost;