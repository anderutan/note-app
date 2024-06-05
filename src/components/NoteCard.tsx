import type { NotesState } from '../features/notes/notesSlice';
import { FaRegTrashCan } from 'react-icons/fa6';
import truncateString from '../utils/truncateString';
import { Link } from 'react-router-dom';

interface NoteCardProps {
  note: NotesState;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  return (
    <div className='flex p-3 bg-white shadow-xl mb-3 rounded-lg'>
      <button className='w-3 h-3 bg-[#A3A3A3] rounded-full mt-2 mr-3'></button>
      <Link to={`/note/${note.id}`} className='flex-1'>
        <h3 className='text-lg font-medium'>{note.title}</h3>
        <p className='text-sm mb-1'>{truncateString(note.description, 80)}</p>
        <p className='text-xs font-light'>{note.lastModifiedTime}</p>
      </Link>
      <button className='mt-auto ml-3'>
        <FaRegTrashCan className='text-lg' />
      </button>
    </div>
  );
};

export default NoteCard;
