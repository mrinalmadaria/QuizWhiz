import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";

const Container = styled.div`
width:100%;
height:80vh;
display: flex;
align-items: center;
justify-content: center;
background-color:whitesmoke;
overflow:hidden;
background-color: #1e1e1e;
`
const Wrapper = styled.div`
width:60%;
height:90%;        
padding:20 px; 
align-items: center;
justify-content: center;
background-color:#272727;
border-radius:20px;
`
const HeroTitle = styled.h1`
font-size:32px;
font-weight:500;
text-align:center;
padding-top:100px;
padding-bottom:20px;
color:#ffffff;
border-bottom: 1px solid rgba(0,0,0,.25);
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`
const Input = styled.input`
flex:1;
margin:20px 10px 0px 0px;
padding:8px;
border-radius: 10px;
text-align:left;
background-color:#444444;
color:#ffffff;
`
const Button = styled.button`
min-width:40%;
border:none;
border-radius:15px;
margin:20px 10px 0px 0px;
padding:5px;
background-image: linear-gradient(to bottom right, #da22ff, #a82ff2);
color:#ffffff;
cursor:pointer;
`
const FormWrapper = styled.div`
width:40%;
margin:auto;
display: flex;
align-items: center;
justify-content:center;
flex-wrap: wrap;
`
const Link = styled.a`
margin: 20px 0px;
font-size:15px;
text-decoration:underline;
cursor:pointer;
color: teal;
`;

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const userCheck = {
      email: email,
      password: password,
    };
    try {
      axios.post("http://localhost:5000/users/login", userCheck).then((response) => {
        console.log(response.status);
        console.log(response.data);
        login(dispatch, { email, password });
        console.log("data suc")
        navigate("/dashboard")
      });
    } catch {
      alert("yanlış kullanıcı ismi ve/veya şifre")
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <HeroTitle>Welcome Back</HeroTitle>
          <FormWrapper>
            <Form onSubmit={handleLogin}>
              <Input placeholder="Email (username)" type="email" onChange={e => setEmail(e.target.value)} required />
              <Input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} required />
              <Button type="submit">Login</Button>
              <Link href="/register">Create a new account</Link>
            </Form>
          </FormWrapper>
        </Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default Login