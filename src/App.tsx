import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddNote from './pages/AddNote';
import SingleNotePage from './pages/SingleNotePage';
import EditNote from './pages/EditNote';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='addnote' element={<AddNote />} />
        <Route path='/note/:noteId' element={<SingleNotePage />} />
        <Route path='/editnote/:noteId' element={<EditNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
