import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
display: flex;
gap:10px;
margin: 30px 0px;
`;
const Avatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
@media (max-width: 480px){
  width: 30px;
  height: 30px;
  border-radius: 50%;
  }
`;
const Details=styled.div`
display: flex;
flex-direction: column;
gap: 10px;
color: ${({ theme }) => theme.text};
`;
const Name=styled.span`
font-size: 13px;
font-weight: 500;
`;
const Date=styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.p`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQE8Umd6k3r3_Q/profile-displayphoto-shrink_200_200/0/1659248874079?e=1668038400&v=beta&t=zwRA6Raz8qYK8Hac8KlkVeyil_EVkpORBaArjstB6UQ" />
      <Details>
        <Name>Rahul Kannaujia <Date>1 day ago</Date></Name>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam saepe rem nihil consectetur placeat iste nulla, possimus at quibusdam et, incidunt sit temporibus quo unde ipsam? Fuga ab laborum officia!</Text>
      </Details>
    </Container>
  )
}

export default Comment