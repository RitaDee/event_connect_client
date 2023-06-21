/* eslint-disable import/extensions */
import { Routes, Route } from 'react-router-dom';
import EventDetails from './pages/events/EventDetails';
import Layout from './components/Layout';
import Body from './components/Body';
import SignIn from './components/SigIn';
import SignUp from './components/SignUp';
import Index from './pages/events';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
