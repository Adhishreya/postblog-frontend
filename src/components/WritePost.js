import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { savePost } from '../services/postService';

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const Wrapper = styled.div`
width: 90%;
display: flex;
flex-direction: column;
margin: 0rem auto;
`;

const Input = styled.input`
border:none;
outline:none;

`;

const TextArea = styled.textarea`
width: 100%;
border:none;
outline:none;
height:auto;
resize: vertical;
`;

const Button = styled.button`
font-size: 2rem;
cursor: pointer;
border:none;
background-color: transparent;
`;
const NewInputItem = styled.div`
display: flex;
align-items: center;
gap: 2rem;
`;

const EditOptions = styled.div`
display: flex;
margin: 0rem auto;
align-items: center;
gap: 2rem;
&>*{
    font-size: 2rem;
}
`;

const Headers = styled.div`
display: flex;
justify-content: flex-end;
gap: 2rem;
`;

const Avatar = styled.img`
cursor: pointer;
width:3rem;
height:3rem;
background:#cbd5e1;
border-radius:50%;
top: 0;
`;

const Publish = styled.button`
padding: 0.5rem 1rem;
border-radius: 1.5rem;
width:fit-content;
height: fit-content;
border:2px solid #16a34a;
background-color:#16a34a;
color: aliceblue;
cursor:pointer;
`;

const InputComponent = styled.div`
display: flex;
padding: 0.5rem;
border:2px solid #9ca3af;
align-items: center;
width: 80%;
gap:2rem;
border-radius: 0.5rem;
`;

const Close = styled.div`
`;

const TagCard = styled.div`
display:flex;
align-items: center;
`;

const TagInput = styled(Input)`
border-bottom:1px solid black;
width:2.5rem;
`;

const TagEditOptions = styled(EditOptions)`
flex-direction:row;
flex-wrap: wrap;
margin:0rem 0rem;
`;

const StartButton = styled(Button)`
margin:0rem 0rem;
width:fit-content;
color:#9ca3af;
`;

const PostName = styled.h3`
width: fit-content;
margin-bottom: 0.5rem;
font-weight: 700;
font-size: 2rem;
margin: 1rem 0rem;
`;

const Body = styled.div` 

margin: 1rem 0rem;
text-align: start;

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

const WritePost = () => {
    const [preview, setPreview] = useState(false);
    const removeRef = useRef();
    const inputRef = useRef();
    const [count, setCount] = useState(0);
    const [tagCount, setTagCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    const [postBody, setPostBody] = useState([]);
    const [embedUrl, setEmbedUrl] = useState('');

    const areaRef = useRef();
    const tagsRef = useRef();

    const modifyInputArray = (e, index) => {
        if (index > postBody.length)
            setPostBody([...postBody, { type: postBody[index].type, value: e }])
        else {
            let tempValues = postBody;
            tempValues.splice(index, 1, { type: postBody[index].type, value: e });
            setPostBody(tempValues);
        }
    }

    const handleTags = (value, index) => {
        if (tagCount === index) {
            tags.push(value);
        } else {
            let tempTag = tags;
            tags.splice(index, 1, value);
            setTags(tempTag);
        }
    }

    const publishStory = () => {
        let postDetails = JSON.stringify(postBody);
        savePost(title, postDetails, tags);
    }


    // useEffect(()=>{
    //     areaRef.current.style.height = "10px"
    //     // areaRef.current.style.scrollHeight + "px";
    //     // this.scrollHeight + "px
    // },[postBody]);

    return (
        <Container>
            {!preview ? <Publish onClick={() => setPreview(true)}>Preview</Publish> : <Button onClick={() => setPreview(false)}>Close button</Button>}
            <Headers>
                <Publish onClick={() => publishStory()}>Publish</Publish>
                <Avatar />
            </Headers>
            {!preview ? <Wrapper>
                <TagEditOptions>
                    {tagCount === 0 && <StartButton onClick={() => { setTagCount(prevValue => prevValue + 1) }}>
                        Add Tags
                    </StartButton>}
                    {
                        Array.from({ length: tagCount }).map((tag, index) =>

                            <TagCard key={index}>
                                <TagInput defaultValue={tags[index] ? tags[index] : ''} ref={tagsRef} style={{width:`${tagsRef.current && parseInt(tagsRef.current.value.length)+1}em`}} onChange={e => {
                                    handleTags(e.target.value, index);
                                    console.log(tagsRef.current.value.length );
                                    // tagsRef.current.style.width = parseInt(tagsRef.current.style.width+1)+"em";
                                }
                                }
                                />
                                <Close onClick={() => { 
                                    setTagCount(prevValue => prevValue - 1) ;
                                    let tempTags = tags;
                                    tags.splice(index,1);
                                    setTags(tempTags)
                                }
                                }
                                    className='displa-6 text-center fs-1 fw-bold'><i className="bi bi-x"></i></Close>
                                <Button onClick={() => { setTagCount(prevValue => prevValue + 1) }}>
                                    <i className="bi bi-plus-circle"></i>
                                </Button>
                            </TagCard>

                        )
                    }
                </TagEditOptions>
                <Input placeholder='Title' value={title ? title : ""} name='title' style={{ fontSize: "4rem" }} onChange={e => setTitle(e.target.value)} />
                {postBody.length === 0 && <StartButton onClick={c => {
                    setVisible(true);
                }}>
                    Write Your story Here
                </StartButton>}
                {
                    Array.from({ length: count }).map((tally, index) =>
                        <NewInputItem key={index}>
                            {(index + 1) < count
                                ?

                                <Button id={index + 1} ref={removeRef} onClick={c => {
                                    postBody.splice(index, 1);
                                    setPostBody(postBody);
                                    setCount(prevValue => prevValue - 1);
                                }}> <i className="bi bi-dash-circle"></i>
                                </Button>
                                :
                                <Button id={index + 1} ref={removeRef} onClick={c => {
                                    setVisible(true);
                                }}>
                                    <i className="bi bi-plus-circle"></i>
                                </Button>
                            }

                            {
                                postBody[index].type === 'text' &&
                                <TextArea id={`area-text-${index}`} defaultValue={postBody[index].value ? postBody[index].value : ""}
                                    key={index + 1}
                                    type={postBody[index].type}
                                    placeholder='Write your story'
                                    onChange={e => 
                                        {
                                            modifyInputArray(e.target.value, index);
                                            // areaRef.current.height = areaRef.current.scrollHeight + "px";
                                        }
                                    }
                                    style={{ fontSize: "2rem" ,height : `${areaRef.current && areaRef.current.scrollHeight +  5}px`}} ref={areaRef}
                                />
                            }
                            {
                                postBody[index].type === 'file' &&
                                <Input id={index + 1} ref={inputRef} type={postBody[index].type} accept="image/*"
                                    style={{ fontSize: "2rem" }}
                                />
                            }
                            {
                                postBody[index].type === 'search' &&
                                <InputComponent>
                                    <i className="bi bi-search"></i>
                                    <Input defaultValue={postBody[index].value ? postBody[index].value : ""} placeholder='Paste external image url' onChange={e => modifyInputArray(e.target.value, index)} />
                                </InputComponent>
                            }
                            {
                                postBody[index].type === 'embed' &&
                                <>
                                    <Input placeholder='Paste source url to embed' onChange={e => setEmbedUrl(e.target.value)} />
                                    {embedUrl.length > 0 && <iframe src={embedUrl} width="100%" height="300" style={{ border: "1px solid black" }}>
                                    </iframe>}
                                </>
                            }

                        </NewInputItem>
                    )
                }
                {visible &&
                    <EditOptions>
                        <i onClick={() => setVisible(false)} className="bi bi-x-circle"></i>
                        <i onClick={() => {
                            setVisible(false);
                            setCount(prevValue => prevValue + 1);
                            setPostBody([...postBody, { type: 'file', value: '' }]);
                        }} className="bi bi-camera"></i>
                        <i onClick={() => {
                            setVisible(false);
                            setCount(prevValue => prevValue + 1);
                            setPostBody([...postBody, { type: 'embed', value: '' }]);
                        }} className="bi bi-code"></i>
                        <i onClick={() => {
                            setVisible(false);
                            setCount(prevValue => prevValue + 1);
                            setPostBody([...postBody, { type: 'search', value: '' }]);
                        }} className="bi bi-search"></i>
                        <i onClick={() => {
                            setVisible(false);
                            setCount(prevValue => prevValue + 1);
                            setPostBody([...postBody, { type: 'text', value: '' }]);
                        }} className="bi bi-fonts"></i>
                    </EditOptions>}
            </Wrapper>
                :
                <Preview header={title} postBody={postBody} tags={tags} />}
        </Container>
    )
}


const Preview = ({ header, postBody, tags }) => {
    return (
        <Wrapper>
            <PostName>{header}</PostName>

            <TopicsList>
                {tags.map((tag,index) => <Topic key={index}>{tag}</Topic>)}
            </TopicsList>
            {/* <PostImage /> */}
            <Body>{postBody.map(body => <>

                {
                    body.type === "text" && <p>{body.value}</p>
                }
                {
                    body.type === "search" && body.value.length > 0 && <img style={{ width: "100%" }} src={body.value} />
                }
                {
                    body.type === "file" && body.value.length > 0 && <img src={body.value} />
                }
            </>)
            }</Body>
        </Wrapper>
    )

}


export default WritePost;