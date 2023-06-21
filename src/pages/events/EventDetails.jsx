import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card, Flex, Heading, Image,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEventDetail } from '../../redux/slice/eventDetailSlice';
import bananaImage from '../../images/banana.png';

const EventDetails = () => {
  const { id } = useParams();
  const event = useSelector((state) => state.eventDetail.event);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEventDetail(id));
  }, [dispatch, id]);

  return (
    <Flex
      justify="space-around"
      alignItems="center"
      p="4"
    >
      <Card
        pt={180}
      >
        <Image width={500} src={bananaImage} />
      </Card>

      <Flex
        flexDirection="column"
        pb={150}
      >
        <Heading variant="primary">{event?.title}</Heading>
        <Flex bg="gray" justify="space-between">
          Date
          {' '}
          <Flex>
            {event?.date}
          </Flex>
        </Flex>
        <Flex>
          Time
          {' '}
          <Flex>
            {event?.time}
          </Flex>
        </Flex>
        <Flex bg="gray" justify="space-between">
          Description
          {' '}
          <Flex>
            {event?.description}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EventDetails;
