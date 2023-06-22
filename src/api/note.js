import client from './client';

export const getNotes = async () => {
  try {
    const {data} = await client('/notes');
    return {data};
  } catch (error) {
    const {response} = error;
    if (response?.data) {
      return response.data;
    }
    return {error: error.message || error};
  }
};

export const getNotesById = async noteId => {
  try {
    const {data} = await client(`/notes/${noteId}`);
    return {data};
  } catch (error) {
    const {response} = error;
    if (response?.data) {
      return response.data;
    }
    return {error: error.message || error};
  }
};
