import styled from 'styled-components'
import { Person, School, Group } from '@mui/icons-material';

const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
background-color: #1e1e1e;
`
const Section = styled.div`
   flex:1;
   margin:25px;
   height:60vh;
`
const Image = styled.div`
margin-left:22%;
width:40%;
height:40%;
`
const Info = styled.div`
    margin-top:-100px;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const Title = styled.h1`
color:#ffffff;
    margin-bottom:20px;
`;

const Description = styled.div`
text-align:center;
color:#ffffff;
`

const WhoUsesTitle = styled.div`
font-size:42px;
font-weight:200;
text-align:center;
color: #ffffff;
background-color: #1e1e1e;
padding-top:5%;
padding-bottom:2%;
`

const QuickInfo = () => {
    return (
        <>
            <WhoUsesTitle>Who uses <b>QuizWhiz?</b></WhoUsesTitle>
            <Container>
                <Section>
                    <Image><Person style={{ fontSize: "200px", color: "#ffffff" }} /></Image>
                    <Info>
                        <Title>Individuals</Title>
                        <Description>Create fun social quizzes and send quizzes to your friends The review feature allows your friends to review their answers after they have completed the quiz.</Description>
                    </Info>
                </Section>
                <Section>
                    <Image><School style={{ fontSize: "200px", color: "#ffffff" }} /></Image>
                    <Info>
                        <Title>Teachers</Title>
                        <Description>Quickly create online tests for your students. And you can publish your test for free. The auto-grading function will save you time and allow you to concentrate on your other business.</Description>
                    </Info>
                </Section>
                <Section>
                    <Image><Group style={{ fontSize: "200px", color: "#ffffff" }} /></Image>
                    <Info>
                        <Title>Businesses</Title>
                        <Description>Create online training and assessments to ensure your staff are always up to date with the right skills. The powerful reporting allows you to track your staff participation and progress.</Description>
                    </Info>
                </Section>
            </Container>
        </>
    )
}

export default QuickInfo