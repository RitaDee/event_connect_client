// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// function EventDetailsPage() {
//   const { eventId } = useParams();
//   const [event, setEvent] = useState(null);

//   useEffect(() => {
//     // Fetch event details from the API
//     const fetchEventDetails = async () => {
//       try {
//         const response = await api.get(`/events/${eventId}`);
//         setEvent(response.data);
//       } catch (error) {
//         console.log('Error fetching event details:', error);
//       }
//     };

//     fetchEventDetails();
//   }, [eventId]);

//   return (
//     <div>
//       <h1>Event Details</h1>
//       {event ? (
//         <EventDetails event={event} />
//       ) : (
//         <p>Loading event details...</p>
//       )}
//     </div>
//   );
// }

// export default EventDetailsPage;
