import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden; 

`

const Wrapper = styled.div`
height:100%;
display:flex;

`



const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color: #1e1e1e;
background-image: url("https://www.transparenttextures.com/patterns/black-mamba.png");
`



const ImgContainer = styled.div`
height:100%;
flex:1;
`

const Image = styled.img`
height:73%;
margin-top:7%;
margin-left: 15%;
`



const Title = styled.h1`
font-size:70px;
color:#EEEEEE;
margin-left:5%;
`

const InfoContainer = styled.div`
flex:1;
padding:50px;
`;

const Description = styled.p`
    margin:30px 0px;
    font-size:32px;
    font-weight:600;
    letter-spacing:3px;
    color:#EEEEEE;
    margin-left:5%;
`
const Button = styled.button`
    padding:15px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
    color:#EEEEEE;
    background-image: linear-gradient(to bottom right, #da22ff, #a82ff2);
    border:none;
    border-radius:50px;
    margin-left:5%;
`

const Hero = () => {
    return (
        <Container>
            <Wrapper>
                <Slide>
                    <InfoContainer>
                        <Title>
                        Online test and quiz platform
                        </Title>
                        <Description style={{color: "#B2B2B2"}}>
                        Create, send and analyze your tests, quizzes and assessments for free with QuizWhiz
                        </Description>
                        <Button>
                            <Link to="/register" style={{ textDecoration: "none", color:"#EEEEEE"}}>
                            Get Started for Free
                            </Link>
                        </Button>
                    </InfoContainer>
                    <ImgContainer>
                        <Image src="https://i.ibb.co/tHxMp9Q/girlpng.png" />
                    </ImgContainer>
                </Slide>
            </Wrapper>
        </Container>
    )
}

export default Hero