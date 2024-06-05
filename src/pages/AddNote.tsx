import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Button from '../components/Button';
import { useAppDispatch } from '../state/hooks';
import { noteAdd } from '../features/notes/notesSlice';
import { nanoid } from '@reduxjs/toolkit';
import { currentTime } from '../utils/currentTime';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setDesc(e.target.value);

  const onSavePostClick = () => {
    if (title && desc) {
      dispatch(
        noteAdd({
          id: nanoid(),
          title,
          description: desc,
          lastModifiedTime: currentTime.time,
          lastModifiedDate: currentTime.date,
          createdTime: currentTime.time,
          createdDate: currentTime.date,
        })
      );
      setTitle('');
      setDesc('');
      navigate('/');
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
        <h2 className='py-5 text-center text-2xl font-semibold'>
          Add a new notes
        </h2>
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
      </div>
      <div className='w-full mx-auto px-8'>
        <Button name='Add Note' caseType='normal' onClick={onSavePostClick} />
      </div>
    </section>
  );
};

export default AddNote;
