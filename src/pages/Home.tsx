import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import { useAppSelector } from '../state/hooks';
import NoteCard from '../components/NoteCard';
import type { NotesState } from '../features/notes/notesSlice';

const Home = () => {
  const notes = useAppSelector((state) => state.Notes);

  const renderedNotes = notes.map((note: NotesState) => (
    <NoteCard note={note} key={note.id} />
  ));

  return (
    <main className='w-full h-screen relative p-5 bg-[#E7E7E7]'>
      <section>
        <div>
          <h1 className='text-3xl font-bold text-center pb-5'>My Note</h1>
        </div>
        <div>{renderedNotes}</div>
      </section>
      <Link to='/addnote' className='absolute bottom-10 right-10'>
        <FaPlusCircle className='w-12 h-12 text-[#427DDE]' />
      </Link>
    </main>
  );
};

export default Home;
