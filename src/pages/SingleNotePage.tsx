import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Button from '../components/Button';
import { noteDeleted } from '../features/notes/notesSlice';

const SingleNotePage = () => {
  const { noteId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const note = useAppSelector((state) =>
    state.Notes.find((note) => note.id === noteId)
  );

  const handleDeleteBtn = () => {
    if (confirm('Are you sure to remove this note?')) {
      dispatch(noteDeleted(noteId));
      navigate('/');
    }
  };

  if (!note) {
    return (
      <section>
        <h2>Note not found!</h2>
      </section>
    );
  }

  return (
    <section className='w-full h-screen flex flex-col'>
      <div className='py-4 px-8 border-b-2'>
        <Link to='/'>
          <FaLongArrowAltLeft className='text-xl' />
        </Link>
      </div>
      <article className='flex-1 px-8 pt-3'>
        <h2 className='text-xl font-medium mb-2'>{note?.title}</h2>
        <p className='text-justify'>{note?.description}</p>
        <div className='text-xs text-slate-400 text-right mt-3'>
          <p>{`Last Modified: ${note?.lastModifiedDate} ${note?.lastModifiedTime}`}</p>
          <p>{`Created: ${note?.createdDate} ${note?.createdTime}`}</p>
        </div>
      </article>
      <div className='px-8'>
        <Link to={`/editnote/${noteId}`}>
          <Button name='Edit Note' caseType='normal' />
        </Link>
        <Button
          name='Delete Note'
          caseType='delete'
          onClick={handleDeleteBtn}
        />
      </div>
    </section>
  );
};

export default SingleNotePage;
