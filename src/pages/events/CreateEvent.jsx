import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Box,
  useToast,
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { createEvent } from '../../redux/slice/eventSlice';

const EventForm = () => {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
    user_id: 1,
    venue_id: 1,
    images: '',
  });

  const toast = useToast();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setEventData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const formatDate = (date) => {
    if (!date) return '';
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const handleDateChange = (date) => {
    setEventData((prevData) => ({
      ...prevData,
      date,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(createEvent(eventData));
    console.log(res, 'response');
    if (res.payload) {
      toast({
        description: 'Event has been reserved for you successfully',
        status: 'success',
        title: 'Event Created',
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
  };

  useEffect(() => {
    setEventData((prev) => ({
      ...prev,
      user_id: Number(sessionStorage.userId),
    }));
  }, []);

  return (
    <Box mt={12}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="start">
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              value={eventData.title}
              onChange={handleChange}
              placeholder="Enter event title"
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Date</FormLabel>
            <DatePicker
              name="date"
              selected={eventData.date}
              onChange={handleDateChange}
              dateFormat="dd MMMM, yyyy"
              placeholderText="Select event date"
              required
              value={eventData.date ? formatDate(eventData.date) : ''}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Time</FormLabel>
            <Input
              type="text"
              name="time"
              value={eventData.time}
              onChange={handleChange}
              placeholder="Enter event time"
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={eventData.description}
              onChange={handleChange}
              placeholder="Enter event description"
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Images</FormLabel>
            <Input
              type="text"
              name="images"
              value={eventData.images}
              onChange={handleChange}
              placeholder="Enter event image URL"
              required
            />
          </FormControl>

          <Button colorScheme="blue" type="submit">
            Create Event
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default EventForm;
