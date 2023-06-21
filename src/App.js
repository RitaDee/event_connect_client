import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import EventDetails from './pages/events/EventDetailsPages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Main />} />
          <Route path="/events/:id" element={<EventDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
