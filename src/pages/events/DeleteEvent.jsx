import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Card,
  Image,
  Heading,
  Button,
  Text,
  Grid,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import styled from 'styled-components';

import 'pure-react-carousel/dist/react-carousel.es.css';
import dots from '../../assets/dots.png';
import '../../styles/main.css';
import { fetchEvents, deleteEvent } from '../../redux/slice/eventSlice';
import DeleteModal from './components/DeleteModal';

const DeleteEvent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [event, setEvent] = useState({});
  const events = useSelector((state) => state.events.data);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const handleDelete = (eventId) => {
    dispatch(deleteEvent(eventId));
    onClose();
    toast({
      description: 'Event has been deleted successfully',
      status: 'success',
      title: 'Event Deleted',
      position: 'top',
    });
    onClose();
  };

  const handleModal = (id, title) => {
    onOpen();
    setEvent(({ id, title }));
  };

  return (
    <StyledContainer>
      <div className="main">
        <h1 className="event-list-title">BROWSE EVENTS</h1>
        <p className="event-list-subtitle">
          Select an event to Delete
        </p>
        <div className="dots-wrapper">
          <img src={dots} alt="dots-bar" className="dots-bar" />
        </div>

        <Grid
          templateColumns={['1fr', '1fr', '1fr 1fr 1fr']}
          gap={4}
          width={['100%', '100%', 'auto']}
        >
          {events.map((item) => (
            <StyledCard
              boxShadow="md"
              borderRadius="md"
              border="none"
              key={item.id}
            >
              <Image
                src={item.images}
                alt="Image description"
                borderRadius="md"
              />
              <Box p={4}>
                <Heading size="md">{item.title}</Heading>
                <Text mt={2}>{item.description.substring(0, 50)}</Text>
                <Button
                  colorScheme="red"
                  size="md"
                  onClick={() => handleModal(item.id, item.title)}
                >
                  Delete
                </Button>
              </Box>
            </StyledCard>
          ))}
        </Grid>
      </div>
      <DeleteModal
        isOpen={isOpen}
        onClose={onClose}
        onDelete={handleDelete}
        data={event}
      />
    </StyledContainer>
  );
};

export default DeleteEvent;

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledCard = styled(Card)`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 0 10px;
  height: 400px;
`;
