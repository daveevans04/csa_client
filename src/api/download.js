import client from './client';

export const getDownloads = async () => {
  try {
    const {data} = await client('/files');
    return {data};
  } catch (error) {
    const {response} = error;
    if (response?.data) {
      return response.data;
    }
    return {error: error.message || error};
  }
};

export const getDownloadsById = async fileId => {
  try {
    const {data} = await client(`/files/${fileId}`);
    return {data};
  } catch (error) {
    const {response} = error;
    if (response?.data) {
      return response.data;
    }
    return {error: error.message || error};
  }
};
