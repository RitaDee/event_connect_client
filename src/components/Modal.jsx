/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { createTicket } from '../redux/slice/ticketSlice';
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
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const initialValues = {
  user_id: null,
  event_id: null,
  quantity: 1,
  price: null,
  ticket_type: '',
};

const ModalComponent = ({ isOpen, onClose, onOpen }) => {
  const [state, setState] = useState(initialValues);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    dispatch(createTicket(state));
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
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Ticket Type</FormLabel>
            <Input
              type="text"
              value={state.ticket_type}
              onChange={handleChange}
              name="ticket_type"
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

export default ModalComponent;
