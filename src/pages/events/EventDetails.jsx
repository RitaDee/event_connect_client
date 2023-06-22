import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card, Flex, Heading, Image, Button,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEventDetail } from '../../redux/slice/eventDetailSlice';
// import bananaImage from '../../images/banana.png';
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
      eventsContainerRef.current.scrollLeft
        -= eventsContainerRef.current.offsetWidth / 3;
    }
  };

  return (
    <Flex justify="space-around" alignItems="center" p="4">
      <Card pt={180}>
        <Image width={500} src={event?.images} />
      </Card>

      <Flex flexDirection="column" pb={150}>
        <Heading
          variant="primary"
          style={{ alignSelf: 'flex-end' }}
        >
          {event?.title}
        </Heading>
        <Flex
          bg="gray"
          justify="space-between"
          height="14px"
          padding={8}
          alignItems="center"
          mt={10}
        >
          Date
          <Flex>{event?.date}</Flex>
        </Flex>
        <Flex
          justify="space-between"
          height="14px"
          padding={8}
          alignItems="center"
          mt={10}
        >
          Time
          <Flex>{event?.time}</Flex>
        </Flex>
        <Flex
          bg="gray"
          justify="space-between"
          height="14px"
          padding={8}
          alignItems="center"
          mt={10}
        >
          Description
          <Flex>{event?.description}</Flex>
        </Flex>
        <Flex>
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
            <img src={left} alt="arrow-left" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EventDetails;
