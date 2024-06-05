import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import { useAppSelector } from '../state/hooks';
import NoteCard from '../components/NoteCard';
import type { NotesState } from '../features/notes/notesSlice';

const Home = () => {
  const notes = useAppSelector((state) => state.Notes);

  const orderedNotes = notes.slice().sort((a, b) => {
    const dateA = a.lastModifiedDate ? new Date(a.lastModifiedDate) : null;
    const dateB = b.lastModifiedDate ? new Date(b.lastModifiedDate) : null;

    // Compare lastModifiedDate
    if (dateA && dateB) {
      const dateComparison = dateB.getTime() - dateA.getTime();
      if (dateComparison !== 0) {
        return dateComparison;
      }
    } else if (dateA && !dateB) {
      return -1; // Move undefined dates to the end
    } else if (!dateA && dateB) {
      return 1; // Move undefined dates to the end
    }

    // Compare lastModifiedTime
    return (b?.lastModifiedTime || '').localeCompare(a?.lastModifiedTime || '');
  });

  const renderedNotes = orderedNotes.map((note: NotesState) => (
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
