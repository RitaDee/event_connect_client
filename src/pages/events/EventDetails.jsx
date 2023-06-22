import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card, Flex, Heading, Image, Button, Grid,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import ProgressBar from '../../components/circularBar';
import { fetchEventDetail } from '../../redux/slice/eventDetailSlice';
import left from '../../assets/arrow-left.png';

const EventDetails = () => {
  const { id } = useParams();
  const event = useSelector((state) => state.eventDetail.event);
  const dispatch = useDispatch();

  const eventsContainerRef = useRef(null);

  useEffect(() => {
    dispatch(fetchEventDetail(id));
  }, [dispatch, id]);

  const scrollLeft = () => {
    if (eventsContainerRef.current) {
      eventsContainerRef.current.scrollLeft -= eventsContainerRef.current.offsetWidth / 3;
    }
  };

  return (
    <Grid templateColumns="1fr 2fr" gap={8} p={4} width="100%" boxSizing="border-box">
      <Flex flexDirection="column" mr={8}>
        <Card pt={180}>
          <Image width={500} src={event?.images} />
        </Card>
      </Flex>

      <Flex flexDirection="column" pt={80} width="80%" pl={70}>
        <Heading variant="primary" alignSelf="flex-end">
          {event?.title}
        </Heading>
        <Flex bg="gray" justify="space-between" p={8} mt={10}>
          <span>Date</span>
          <span>{event?.date}</span>
        </Flex>
        <Flex justify="space-between" p={8} mt={10}>
          <span>Time</span>
          <span>{event?.time}</span>
        </Flex>
        <Flex bg="gray" justify="space-between" p={8} mt={10}>
          <span>Description</span>
          <span>{event?.description}</span>
        </Flex>
        <Flex
          pt={50}
          pl="80%"
          mt={10}
        >
          <ProgressBar />
        </Flex>
        <Button
          p={8}
          ml="auto"
          marginTop="50px"
          alignItems="center"
          textAlign="center"
          // pt={60}
          borderRadius={50}
          width="30%"
        >
          Book Event
        </Button>
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
            <Image src={left} alt="arrow-left" />
          </Button>
        </Flex>
      </Flex>
    </Grid>
  );
};

export default EventDetails;
