import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import EventDetails from './pages/events/EventDetailsPages';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
