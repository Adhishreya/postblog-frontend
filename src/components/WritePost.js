import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

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

const WritePost = () => {

    const [image, setImage] = useState('');
    const removeRef = useRef();
    const inputRef = useRef();
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const [types, setTypes] = useState([]);

    const [embedUrl,setEmbedUrl] = useState('');

    return (
        <Container>
            <Headers>
                <Publish>Publish</Publish>
                <Avatar />
            </Headers>

            <Wrapper>
                <Input placeholder='Title' name='title' style={{ fontSize: "4rem" }} />
                <NewInputItem>
                    <Button onClick={c => {
                        setVisible(true);
                    }}>
                        <i class="bi bi-plus-circle"></i>
                    </Button>
                    <Input placeholder='Write your story' style={{ fontSize: "2rem" }} />
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
                                <Input id={index + 1} ref={inputRef} type={types[index]} placeholder='Write your story'
                                    style={{ fontSize: "2rem" }}
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
                                <Input placeholder='Paste external image url' />
                            </InputComponent>
                            }
                            {
                            types[index] === 'embed' && 
                            <>
                                <Input placeholder='Paste source url to embed' onChange={e=>setEmbedUrl(e.target.value)}/>
                                {embedUrl.length>0 && <iframe src={embedUrl} width="100%" height="300" style={{border:"1px solid black"}}>
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