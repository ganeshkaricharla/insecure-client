import Home from './pages/Home/Home';
import Message from './pages/Message/Message';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/message/:id" exact element={<Message />} />
      </Routes>
    </Router>
  );
}

export default App;
