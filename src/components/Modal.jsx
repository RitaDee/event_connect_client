import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
  Input,
  useToast,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createTicket } from '../redux/slice/ticketSlice';

const initialValues = {
  user_id: null,
  event_id: null,
  quantity: 1,
  price: null,
  ticket_type: '',
};

const ModalComponent = ({ isOpen, onClose }) => {
  const [state, setState] = useState(initialValues);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const dispatch = useDispatch();
  const toast = useToast();
  const { id } = useParams();

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!state.price || !state.quantity || !state.ticket_type) {
      toast({
        description: 'Please fill in all the required fields',
        status: 'error',
        title: 'Incomplete Form',
        position: 'top',
      });
      return; // Prevent form submission
    }
    const res = await dispatch(createTicket(state));
    if (res) {
      toast({
        description: `${state.ticket_type} ticket has been created`,
        status: 'success',
        title: 'Ticket Created',
        position: 'top',
      });
    } else {
      toast({
        description: `${state.ticket_type} could not be created`,
        status: 'error',
        title: 'Ticket not Created',
        position: 'top',
      });
    }
    onClose();
  };

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      event_id: id,
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
          <FormControl>
            <FormLabel>Price</FormLabel>
            <Input
              ref={initialRef}
              type="number"
              value={state.price}
              onChange={handleChange}
              name="price"
              required
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Quantity</FormLabel>
            <Input
              ref={initialRef}
              type="number"
              value={state.quantity}
              onChange={handleChange}
              name="quantity"
              required
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Ticket Type</FormLabel>
            <Input
              type="text"
              value={state.ticket_type}
              onChange={handleChange}
              name="ticket_type"
              required
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Create
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
