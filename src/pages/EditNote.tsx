import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Button from '../components/Button';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { noteUpdated } from '../features/notes/notesSlice';
import { formatCurrentTime } from '../utils/currentTime';

const EditNote = () => {
  const { noteId } = useParams();
  const note = useAppSelector((state) =>
    state.Notes.find((note) => note.id === noteId)
  );

  const [title, setTitle] = useState(note?.title);
  const [desc, setDesc] = useState(note?.description);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setDesc(e.target.value);

  const onSaveChangeClick = () => {
    if (title && desc) {
      dispatch(
        noteUpdated({
          id: noteId,
          title,
          description: desc,
          lastModifiedTime: formatCurrentTime().time,
          lastModifiedDate: formatCurrentTime().date,
        })
      );
      navigate(`/note/${noteId}`);
    }
  };

  return (
    <section className='w-full h-screen bg-[#E7E7E7] flex flex-col'>
      <div className='py-4 px-8 border-b-2 border-white'>
        <Link to='/'>
          <FaLongArrowAltLeft className='text-xl' />
        </Link>
      </div>
      <div className='flex-1 px-8'>
        <h2 className='py-5 text-center text-2xl font-semibold'>Edit note</h2>
        <form className='flex flex-col'>
          <label htmlFor='noteTitle' className='text-lg font-medium mb-2'>
            Title:
          </label>
          <input
            type='text'
            id='noteTitle'
            name='noteTitle'
            value={title}
            onChange={onTitleChange}
            className='p-3 rounded-lg font-medium text-sm mb-5'
          />
          <label htmlFor='noteDesc' className='text-lg font-medium mb-2'>
            Description:
          </label>
          <textarea
            id='noteDesc'
            name='noteDesc'
            value={desc}
            onChange={onDescChange}
            className='p-3 rounded-lg overflow-hidden text-xs'
          />
        </form>
        <div className='text-xs text-slate-400 text-right mt-3'>
          <p>{`Last Modified: ${note?.lastModifiedDate} ${note?.lastModifiedTime}`}</p>
          <p>{`Created: ${note?.createdDate} ${note?.createdTime}`}</p>
        </div>
      </div>
      <div className='w-full mx-auto px-8'>
        <Button
          name='Save Changes'
          caseType='normal'
          onClick={onSaveChangeClick}
        />
      </div>
    </section>
  );
};

export default EditNote;
