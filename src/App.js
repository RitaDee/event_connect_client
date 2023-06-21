import { Routes, Route } from 'react-router-dom';
import EventDetails from './pages/events/EventDetails';
import Layout from './components/Layout';
import Index from './pages/events';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
