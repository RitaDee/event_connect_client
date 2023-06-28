import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Select,
  useToast,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createReservation } from '../../../redux/slice/reservationSlice';

const initialValues = {
  user_id: null,
  ticket_id: null,
};

const ModalComponent = ({ isOpen, onClose }) => {
  const [state, setState] = useState(initialValues);
  const tickets = useSelector((state) => state.tickets.data);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const dispatch = useDispatch();
  const toast = useToast();
  const { id } = useParams();

  const handleSubmit = async () => {
    const res = await dispatch(createReservation(state));
    if (res.payload.status === 201) {
      toast({
        description: 'Ticket has been reserved for you successfully',
        status: 'success',
        title: 'Ticket Reserved',
        position: 'top',
      });
    } else {
      toast({
        description: res.error.message,
        status: 'error',
        title: 'Ticket not Reserved',
        position: 'top',
      });
    }
    onClose();
  };

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      user_id: Number(sessionStorage.userId),
    }));
  }, [id]);

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Ticket</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl mt={4}>
            <FormLabel>Ticket</FormLabel>
            <Select
              placeholder="Select Ticket"
              value={state.ticket_id}
              onChange={(e) => setState((prev) => ({ ...prev, ticket_id: e.target.value }))}
              required
            >
              {tickets?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.ticket_type}
                  {' '}
                  (
                  $
                  {item.price}
                  )
                </option>
              ))}
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Buy Ticket
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

ModalComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalComponent;
