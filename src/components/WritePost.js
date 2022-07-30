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
resize: vertical;
height: fit-content;
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

const PostImage = styled.img`
 width:90%;
 height:35rem;
 margin:0rem auto ;
 background:#cbd5e1;
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
    const [preview,setPreview] = useState(false);
    const [image, setImage] = useState('');
    const removeRef = useRef();
    const inputRef = useRef();
    const [count, setCount] = useState(0);
    const [tagCount, setTagCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const [types, setTypes] = useState([]);
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    const [postBody,setPostBody] = useState([]);
    const [embedUrl, setEmbedUrl] = useState('');

    const [values, setValues] = useState([]);

    const areaRef = useRef();

    const modifyInputArray = (e, index) => {
        if (index > values.length)
            setValues([...values, e])
        else {
            let tempValues = values;
            tempValues.splice(index, 1, e);
            setValues(tempValues);
        }
    }

    const handleTags = (value, index) => {
        if (tagCount == index) {
            tags.push(value);
        } else {
            let tempTag = tags;
            tags.splice(index, 1, value);
            setTags(tempTag);
        }
        console.log(count + " , " + index + "  " + tags)
    }

    const publishStory = () => {

        let postDetail = values.map((value, index) => {
            return { value: value, type: types[index] }
        });
        setPostBody(postBody);
        let postDetails = JSON.stringify(postDetail);
        savePost(title, postDetails)

    }
    return (
        <Container>
           {!preview ? <Publish onClick={()=>setPreview(true)}>Preview</Publish> : <Button onClick={()=>setPreview(false)}>Close button</Button>}
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

                            <TagCard>
                                <TagInput onChange={e => handleTags(e.target.value, index)} />
                                <Close onClick={() => { setTagCount(prevValue => prevValue - 1) }}
                                    className='displa-6 text-center fs-1 fw-bold'><i class="bi bi-x"></i></Close>
                                <Button onClick={() => { setTagCount(prevValue => prevValue + 1) }}>
                                    <i class="bi bi-plus-circle"></i>
                                </Button>
                            </TagCard>

                        )
                    }
                </TagEditOptions>
                <Input placeholder='Title' name='title' style={{ fontSize: "4rem" }} onChange={e => setTitle(e.target.value)} />
                {types.length === 0 && <StartButton onClick={c => {
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
                                    console.log(types)
                                    types.splice(index, 1);
                                    setTypes(types);
                                    setCount(prevValue => prevValue - 1);
                                }}> <i class="bi bi-dash-circle"></i>
                                </Button>
                                :
                                <Button id={index + 1} ref={removeRef} onClick={c => {
                                    setVisible(true);
                                }}>
                                    <i class="bi bi-plus-circle"></i>
                                </Button>
                            }

                            {
                                types[index] === 'text' &&
                                <TextArea id={`area-text-${index}`} key={index + 1} type={types[index]} placeholder='Write your story' onChange={e => modifyInputArray(e.target.value, index + 1)}
                                    style={{ fontSize: "2rem" }} ref={areaRef}
                                />
                            }
                            {
                                types[index] === 'file' &&
                                <Input id={index + 1} ref={inputRef} type={types[index]} accept="image/*"
                                    style={{ fontSize: "2rem" }}
                                />
                            }
                            {
                                types[index] === 'search' &&
                                <InputComponent>
                                    <i class="bi bi-search"></i>
                                    <Input placeholder='Paste external image url' onChange={e => modifyInputArray(e.target.value, index + 1)} />
                                </InputComponent>
                            }
                            {
                                types[index] === 'embed' &&
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
                        <i onClick={() => setVisible(false)} class="bi bi-x-circle"></i>
                        <i onClick={() => {
                            setVisible(false);
                            setCount(prevValue => prevValue + 1);
                            setTypes([...types, 'file']);
                        }} class="bi bi-camera"></i>
                        <i onClick={() => {
                            setVisible(false);
                            setCount(prevValue => prevValue + 1);
                            setTypes([...types, 'embed']);
                        }} class="bi bi-code"></i>
                        <i onClick={() => {
                            setVisible(false);
                            setCount(prevValue => prevValue + 1);
                            setTypes([...types, 'search']);
                        }} class="bi bi-search"></i>
                        <i onClick={() => {
                            setVisible(false);
                            setCount(prevValue => prevValue + 1);
                            setTypes([...types, 'text']);
                        }} class="bi bi-fonts"></i>
                    </EditOptions>}
            </Wrapper>
            :
            <Preview header={title}  postBody={postBody} tags={tags}/>}
        </Container>
    )
}


const Preview = ({ header, postBody,tags }) => {

    return (
        <Wrapper>
            <PostName>{header}</PostName>

            <TopicsList>
                {tags.map(tag => <Topic>{tag}</Topic>)}
            </TopicsList>
            {/* <PostImage /> */}
            <Body>{postBody.map(body => <>

                {
                    body.type === "text" && <p>{body.value}</p>
                }
                {
                    body.type === "search" && body.value.length>0 && <img>{body.value}</img>
                }
                {
                    body.type === "file" && body.value.length>0 && <img>{body.value}</img>
                }
            </>)
            }</Body>
        </Wrapper>
    )

}


export default WritePost;