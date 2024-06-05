import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddNote from './pages/AddNote';
import SingleNotePage from './pages/SingleNotePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='addnote' element={<AddNote />} />
        <Route path='/note/:noteId' element={<SingleNotePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
