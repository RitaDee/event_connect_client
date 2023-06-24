import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box, Center, Text, Wrap, WrapItem, VStack,
} from '@chakra-ui/react';
import { fetchReservations } from '../../redux/slice/reservationSlice';

const Index = () => {
  const reservations = useSelector((state) => state.reservations.data);
  const dispatch = useDispatch();

  const formatDateTime = (dateTime) => new Date(dateTime).toLocaleString();

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
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                maxW="sm"
                w="100%"
                boxShadow="lg"
              >
                <VStack spacing={4}>
                  <Text fontWeight="bold">
                    Reservation ID:
                    {' '}
                    {reservation.id}
                  </Text>
                  <Text>
                    Event ID:
                    {reservation?.event_id}
                  </Text>
                  <Text>
                    User ID:
                    {reservation?.user_id}
                  </Text>
                  <Text>
                    Quantity:
                    {reservation?.quantity}
                  </Text>
                  <Text>
                    Price: $
                    {reservation?.price?.toFixed(2)}
                  </Text>
                  <Text>
                    Ticket Type:
                    {reservation?.ticket_type}
                  </Text>
                  <Text>
                    {`Booked At: 
                    ${formatDateTime(reservation?.created_at)}`}
                  </Text>
                  <Text>
                    Updated At:
                    {reservation?.updated_at}
                  </Text>
                </VStack>
              </Box>
            </WrapItem>
          ))
        )}
      </Wrap>
    </Center>
  );
};

export default Index;
