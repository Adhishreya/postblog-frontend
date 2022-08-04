import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getBookMarks } from '../services/bookMarkService';
import { ListCard } from './Home';

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const SavedPost = () => {

  const [post, setPost] = useState([]);
  // const [image, setImage] = useState('');
  // const [body, setBody] = useState();
  // const [header, setHeader] = useState();
  // const [postedAt, setPostedAt] = useState();
  // const [username, setUsername] = useState('');
  // const [topic, setTopics] = useState([]);

  useEffect(() => {
    getBookMarks().then(res => {
      setPost(res.post)
      // setBody(res.post.postBody);
      // setHeader(res.post.postHeader);
      // setPostedAt(res.post.postedAt);
      // // setUsername(res.post.user.username);
      // setTopics(res.post.topics);
      //   alt,
      // username,
      // id,
      // saved

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