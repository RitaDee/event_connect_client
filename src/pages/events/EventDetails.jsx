import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Flex,
  Heading,
  Image,
  Button,
  Grid,
  GridItem,
  useDisclosure,
  HStack,
  Box,
  Container,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import ProgressBar from '../../components/circularBar';
import { fetchEventDetail } from '../../redux/slice/eventDetailSlice';
import left from '../../assets/arrow-left.png';
import Modal from '../../components/Modal';
import BookModal from './components/BookModal';
import { fetchtickets } from '../../redux/slice/ticketSlice';

const EventDetails = () => {
  const { id } = useParams();
  const event = useSelector((state) => state.eventDetail.event);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpenBook, onOpen: onOpenBook, onClose: onCloseBook } = useDisclosure();

  const eventsContainerRef = useRef(null);

  useEffect(() => {
    dispatch(fetchEventDetail(id));
    dispatch(fetchtickets(id));
  }, [dispatch, id]);

  const scrollLeft = () => {
    if (eventsContainerRef.current) {
      eventsContainerRef.current.scrollLeft
        -= eventsContainerRef.current.offsetWidth / 3;
    }
  };

  return (
    <Container maxW="90%" py={20}>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <Image src={event?.images} />
          {' '}
        </GridItem>
        <GridItem justifySelf="end">
          <Box p={4} textAlign="right">
            <Heading variant="primary">{event?.title}</Heading>
            <HStack bg="grey" justifyContent="space-between" my={4}>
              <span>Date</span>
              <span>{event?.date}</span>
            </HStack>
            <HStack bg="grey" justifyContent="space-between" my={4}>
              <span>Time</span>
              <span>{event?.time}</span>
            </HStack>
            <HStack bg="grey" justifyContent="space-between" my={4}>
              <span>Description</span>
              <span>{event?.description}</span>
            </HStack>
            <HStack bg="grey" justifyContent="space-between" my={4}>
              <span>Date</span>
              <span>{event?.date}</span>
            </HStack>
            <Flex justifyContent="end">
              <ProgressBar />
            </Flex>
          </Box>
          <Flex>
            {' '}
            <StyledButton onClick={onOpen}>Add Ticket</StyledButton>
            <StyledButton onClick={onOpenBook}>Book Event</StyledButton>
          </Flex>
        </GridItem>
        <Modal
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
        <BookModal
          isOpen={isOpenBook}
          onOpen={onOpenBook}
          onClose={onCloseBook}
        />
        <Flex justify="flex-end">
          <Button
            onClick={scrollLeft}
            type="button"
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            right={1170}
            border="none"
            background="none"
            outline="none"
            boxShadow="none"
            position="absolute"
            bottom={-9}
            mb={30}
          >
            <Link to="/events">
              <Image src={left} alt="arrow-left" />
            </Link>
          </Button>
        </Flex>
      </Grid>
    </Container>
  );
};

export default EventDetails;

const StyledButton = styled(Button)`
  margin-left: auto;
  margin-top: 50px;
  align-items: center;
  text-align: center;
  border-radius: 50px;
  padding: 18px;
  cursor: pointer;
`;
