import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box, Center, Text, Wrap, WrapItem, Flex,
} from '@chakra-ui/react';
import { fetchReservations } from '../../redux/slice/reservationSlice';

const Index = () => {
  const reservations = useSelector((state) => state.reservations.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations(Number(sessionStorage.userId)));
  }, [dispatch]);

  return (
    <Center py={8}>
      <Wrap spacing={8} justify="center">
        {reservations.length === 0 ? (
          <Text>No reservations found.</Text>
        ) : (
          reservations.map((reservation) => (
            <WrapItem key={reservation.id}>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                shadow="md"
              >
                <img src={reservation.ticket.event.images} alt="Event" />
                <Flex direction="column" p="4">
                  <Box mt="4">
                    <Text fontSize="lg" fontWeight="bold" mb="2">
                      Ticket Details
                    </Text>

                    <Flex align="center" mb="2">
                      <Text fontWeight="bold">Ticket Type:</Text>
                      <Text ml="2">{reservation.ticket.ticket_type}</Text>
                    </Flex>

                    <Flex align="center" mb="2">
                      <Text fontWeight="bold">Quantity:</Text>
                      <Text ml="2">{reservation.ticket.quantity}</Text>
                    </Flex>

                    <Flex align="center" mb="2">
                      <Text fontWeight="bold">Price:</Text>
                      <Text ml="2">
                        $
                        {reservation.ticket.price}
                      </Text>
                    </Flex>
                  </Box>

                  <Box mt="4">
                    <Text fontSize="md" fontWeight="bold" mb="2">
                      {reservation.ticket.event.title}
                    </Text>
                    <Text fontSize="sm">{reservation.ticket.event.description}</Text>
                  </Box>
                </Flex>
              </Box>
            </WrapItem>
          ))
        )}
      </Wrap>
    </Center>
  );
};

export default Index;
