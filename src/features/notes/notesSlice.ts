import { createSlice } from '@reduxjs/toolkit';
import { currentTime } from '../../utils/currentTime';

export interface NotesState {
  id: string;
  title: string;
  description: string;
  lastModifiedTime?: string;
  lastModifiedDate?: string;
  createdTime: string;
  createdDate: string;
}

const initialState: NotesState[] = [
  {
    id: '1',
    title: 'First Note!',
    description:
      'First note description! It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    lastModifiedTime: currentTime.time,
    lastModifiedDate: currentTime.date,
    createdTime: '12.25pm',
    createdDate: '5 June 2024',
  },
  {
    id: '2',
    title: 'Second Note!',
    description:
      'Second note description! There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    lastModifiedTime: '12.25pm',
    lastModifiedDate: '5 June 2024',
    createdTime: '12.25pm',
    createdDate: '5 June 2024',
  },
];

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    noteAdd(state, action) {
      state.push(action.payload);
    },
    noteUpdated(state, action) {
      const { id, title, description, lastModifiedTime, lastModifiedDate } =
        action.payload;
      const existingNote = state.find((note) => note.id === id);
      if (existingNote) {
        existingNote.title = title;
        existingNote.description = description;
        existingNote.lastModifiedTime = lastModifiedTime;
        existingNote.lastModifiedDate = lastModifiedDate;
      }
    },
  },
});

export const { noteAdd, noteUpdated } = notesSlice.actions;

export default notesSlice.reducer;
