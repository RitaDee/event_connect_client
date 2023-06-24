import React, { useEffect } from 'react';
import { Link as link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Icon,
  IconButton,
  Card,
  Image,
  Heading,
  Text,
  Flex,
  Link,
} from '@chakra-ui/react';
import {
  FaPlay, FaTwitter, FaInstagram, FaFacebook,
} from 'react-icons/fa';
import styled from 'styled-components';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import dots from '../../assets/dots.png';
import '../../styles/main.css';
import { fetchEvents } from '../../redux/slice/eventSlice';

const SocialIcons = () => (
  <Flex mt={4} justify="center">
    <Link href="https://twitter.com" mr={2}>
      <FaTwitter size={24} />
    </Link>
    <Link href="https://twitter.com" mr={2}>
      <FaInstagram size={24} />
    </Link>
    <Link href="https://twitter.com" mr={2}>
      <FaFacebook size={24} />
    </Link>
  </Flex>
);

const Index = () => {
  const events = useSelector((state) => state.events.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <StyledContainer>
      <div className="main">
        <h1 className="event-list-title">BROWSE EVENTS</h1>
        <p className="event-list-subtitle">
          Select a event to see details or reserve
        </p>
        <div className="dots-wrapper">
          <img src={dots} alt="dots-bar" className="dots-bar" />
        </div>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={20}
          visibleSlides={3}
        >
          <Slider>
            {events.map((item, idx) => (
              <Slide index={idx} key={item.description}>
                <Box
                  maxWidth="400px"
                  as={link}
                  to={`/events/${item.id}`}
                  cursor="pointer"
                  textDecoration="none"
                  _hover={{ textDecoration: 'none' }}
                >
                  <StyledCard boxShadow="md" borderRadius="md" border="none">
                    <Image
                      src={item.images}
                      alt="Image description"
                      borderRadius="md"
                    />

                    <Box p={4}>
                      <Heading size="md">{item.title}</Heading>

                      <Text mt={2}>{item.description}</Text>

                      <SocialIcons />
                    </Box>
                  </StyledCard>
                </Box>
              </Slide>
            ))}
          </Slider>
          <ButtonBack>
            <StyledDivLeft>
              <StyledIconButtonLeft
                icon={
                  <Icon as={FaPlay} boxSize={16} rounded="full" color="white" />
                }
              />
            </StyledDivLeft>
          </ButtonBack>
          <ButtonNext>
            <StyledDivRight>
              <StyledIconButtonRight
                icon={
                  <Icon as={FaPlay} boxSize={16} rounded="full" color="white" />
                }
              />
            </StyledDivRight>
          </ButtonNext>
        </CarouselProvider>
        {' '}
      </div>
    </StyledContainer>
  );
};

export default Index;

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledIconButtonLeft = styled(IconButton)`
  background-color: grey;
  border: none;
  width: 100px;
  height: 50px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  position: absolute;
  top: 50%;
  left: 0 !important;
  display: block;
`;
const StyledIconButtonRight = styled(IconButton)`
  background-color: limegreen;
  border: none;
  width: 100px;
  height: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  display: block;
`;

const StyledDivLeft = styled.div`
  position: absolute;
  top: 50%;
  left: 0 !important;
`;
const StyledDivRight = styled.div`
  position: absolute;
  top: 50%;
  right: 0 !important;
`;

const StyledCard = styled(Card)`
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 0 10px;
  height: 400px;
`;
