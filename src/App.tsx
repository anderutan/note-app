import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddNote from './pages/AddNote';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='addnote' element={<AddNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
