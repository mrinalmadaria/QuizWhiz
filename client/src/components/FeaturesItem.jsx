import styled from 'styled-components'

const Container =styled.div`
   flex:1;
   margin:25px;
   height:60vh;
`
const Image =styled.img`
margin-left:110px;
margin-top: 7%;
width:50%;
height:50%;
`
const Info =styled.div`
    margin-top:-100px;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const Title =styled.h1`
color:#ffffff;
    margin-bottom:20px;
`;

const Description = styled.div`
text-align:center;
color:#ffffff;
`

const FeaturesItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Description>{item.desc}</Description>
        </Info>
    </Container>
  )
}

export default FeaturesItem