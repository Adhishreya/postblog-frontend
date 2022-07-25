import React, { useRef, useState } from 'react'
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

const WritePost = () => {

    const [image,setImage] = useState('');

    const removeRef = useRef();
    const inputRef = useRef();
    const [current,setCurrent] = ('');
    const [count, setCount] = useState(0);
    const [inputType, setInputType] = useState('text');
    const [visible, setVisible] = useState(false);

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
                        setCount(prevValue => prevValue + 1);
                        setVisible(true);
                    }}>
                        <i class="bi bi-plus-circle"></i>
                    </Button>
                    <Input placeholder='Write your story' style={{ fontSize: "2rem" }} />
                </NewInputItem>
                {
                    Array.from({ length: count }).map((tally,index) =>
                        <NewInputItem key={index}>
                            <Button id={index + 1} ref={removeRef} onClick={c => {
                                setCount(prevValue => prevValue + 1);
                                setVisible(true);
                            }}>
                                <i class="bi bi-plus-circle"></i>
                            </Button>
                            <Input id={index+1} ref={inputRef} type={inputType} placeholder='Write your story' onChange={(e)=>{

                                // console.log(e.target.value);
                                setImage(e.target.value);
                                setCurrent(removeRef.current);
                                
                            }} style={{ fontSize: "2rem" }} />
                        </NewInputItem>)
                }
                {visible &&
                    <EditOptions>
                        <i onClick={() => setVisible(false)} class="bi bi-x-circle"></i>
                        <i onClick={() => {
                            setVisible(false);
                            setInputType('file');
                            // inputRef
                            console.log(current)
                        }} class="bi bi-camera"></i>
                        <i onClick={() => setVisible(false)} class="bi bi-code"></i>
                        <i onClick={() => setVisible(false)} class="bi bi-search"></i>
                        <i onClick={() =>{ 
                            setVisible(false);
                            setInputType('text');
                            }} class="bi bi-fonts"></i>
                    </EditOptions>}

                    <img scr= {image}/>
            </Wrapper>

        </Container>
    )
}

export default WritePost;