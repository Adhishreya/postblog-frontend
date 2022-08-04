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

const Button = styled.div`
font-size: 2rem;
cursor: pointer;
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
/* margin-left:auto ;
margin-left: auto; */
`;

const TagCard = styled.div`
display:flex;
align-items: center;
`;

const TagInput = styled(Input)`
border-bottom:1px solid black;
/* width:2rem; */
`;

const TagEditOptions = styled(EditOptions)`
flex-direction:row;
flex-wrap: wrap;
margin:0rem 0rem;
`;


const WritePost = () => {

    const [image, setImage] = useState('');
    const removeRef = useRef();
    const inputRef = useRef();
    const [count, setCount] = useState(0);
    const [tagCount, setTagCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const [types, setTypes] = useState(['text']);
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);

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
        console.log(areaRef.current)

    }


    const handleTags = (value,index) =>{
        if (tagCount == index  ) {
            tags.push(value);
        } else {
            let tempTag = tags;
            tags.splice(index, 1, value);
            setTags(tempTag);
        }
        console.log(count+ " , "+index +"  "+tags)
    }

    const publishStory = () => {

        let postBody = values.map((value, index) => {
            return { value: value, type: types[index] }
        });
        let postDetails = JSON.stringify(postBody);
        savePost(title, postDetails)

    }



    return (
        <Container>
            <Headers>
                <Publish onClick={() => publishStory()}>Publish</Publish>
                <Avatar />
            </Headers>

            <Wrapper>

                <TagEditOptions>
                    {/* <TagCard>
                        <TagInput onChange={e => {
                            if (tags.length === 0) {
                                tags.push(e.target.value);
                            } else {
                                let tempTag = tags;
                                tags.splice(0, 1, e.target.value);
                                setTags(tempTag);
                            }
                        }} />
                        <Close 
                            className='displa-6 text-center fs-1 fw-bold'><i class="bi bi-x"></i></Close> */}
                    {tagCount ===0 &&    <Button onClick={() => { setTagCount(prevValue => prevValue + 1) }}>
                            Add Tags
                        </Button>}
                    {/* </TagCard> */}
                    {
                        Array.from({ length: tagCount }).map((tag,index) =>

                            <TagCard>
                                <TagInput onChange={e => handleTags(e.target.value,index)} />
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
                <NewInputItem>
                    <Button onClick={c => {
                        setVisible(true);
                    }}>
                        <i class="bi bi-plus-circle"></i>
                    </Button>
                    <Input placeholder='Write your story' style={{ fontSize: "2rem" }} onChange={e => modifyInputArray(e.target.value, 0)} />
                </NewInputItem>
                {
                    Array.from({ length: count }).map((tally, index) =>
                        <NewInputItem key={index}>
                            {(index + 1) < count
                                ?

                                <Button id={index + 1} ref={removeRef} onClick={c => {
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

                {/* <iframe id="myIframe" src="https://medium.com/bitsrc/stop-using-function-parameters-now-d320cf0932df"></iframe>

                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", maxWidth: "100%" }}>
                    <iframe style={{ border: "none", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src='' ></iframe>
                </div> */}

            </Wrapper>
        </Container>
    )
}

export default WritePost;