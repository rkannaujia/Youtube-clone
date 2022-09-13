import React from 'react'
import styled from 'styled-components'
import Comment from './Comment';

const Container = styled.div``;
const NewComment = styled.div`
 display: flex;
 align-items: center;
 gap: 10px;
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
const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;
const Comments = () => {
  return (
    <Container>
     <NewComment>
        <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQE8Umd6k3r3_Q/profile-displayphoto-shrink_200_200/0/1659248874079?e=1668038400&v=beta&t=zwRA6Raz8qYK8Hac8KlkVeyil_EVkpORBaArjstB6UQ" />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  )
}

export default Comments