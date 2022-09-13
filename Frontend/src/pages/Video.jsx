import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from '../components/Comments';
import  Card  from '../components/Card';


const Container=styled.div`
display: flex;
gap: 24px;
`;
const Content=styled.div`
flex: 5;
@media (max-width: 480px){
    flex-direction:column;
  }
`;
const VideoWrapper=styled.div`

`;
const Title=styled.h1`
 font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Details=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
@media (max-width: 480px){
    flex-direction:column;
  }
`;
const Info=styled.span`
color: ${({ theme }) => theme.textSoft};
`;
const Buttons=styled.div`
display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
  @media (max-width: 480px){
    gap:2px;
  }
`;
const Button=styled.button`
display: flex;
align-items: center;
gap: 5px;
cursor: pointer;
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Recommendation=styled.div`
flex:2;
@media (max-width: 480px){
  display: none;
  }
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px){
    display: flex;
   justify-content: space-around;
  }
  ;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  @media (max-width: 480px){
    width: 30px;
  height: 30px;
  border-radius: 50%;
  }
  
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;

`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
  @media (max-width: 480px){
    font-weight: 200;
    border-radius: 3px;
    height: max-content;
     padding: 5px 10px;
  }
`;
const VideoFrame = styled.video`
  max-height:720px;
  width: 100%;
  object-fit: cover;
`;
const Video = () => {
  return (
    <Container>
      <Content>
      <VideoWrapper>
        <VideoFrame  src="https://youtu.be/yIaXoop8gl4" title='video is fro youtube' controls ></VideoFrame>
      </VideoWrapper>
      <Title>Test Video</Title>
      <Details>
        <Info>954,444 views • 1 day ago</Info>
        <Buttons>
          <Button>
            <ThumbUpOutlinedIcon />123
          </Button>
          <Button>
            <ThumbDownOffAltOutlinedIcon />Dislike
          </Button>
          <Button>
            <ReplyOutlinedIcon />Share
          </Button>
          <Button>
            <AddTaskOutlinedIcon />Save
          </Button>
        </Buttons>
      </Details>
      <Hr />
      <Channel>
          <ChannelInfo>
            <Image src="https://media-exp1.licdn.com/dms/image/C4D03AQE8Umd6k3r3_Q/profile-displayphoto-shrink_200_200/0/1659248874079?e=1668038400&v=beta&t=zwRA6Raz8qYK8Hac8KlkVeyil_EVkpORBaArjstB6UQ" />
            <ChannelDetail>
              <ChannelName>Shri Ram</ChannelName>
              <ChannelCounter>2022 subscribers</ChannelCounter>
              <Description>This channel is belong to rahul kannaujia</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe
          </Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  )
}

export default Video