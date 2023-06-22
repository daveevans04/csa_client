import client from './client';

export const getRevision = async () => {
  try {
    const {data} = await client('/revisions');
    return {data};
  } catch (error) {
    const {response} = error;
    if (response?.data) {
      return response.data;
    }
    return {error: error.message || error};
  }
};

export const getRevisionsById = async revisionId => {
  try {
    const {data} = await client(`/revisions/${revisionId}`);
    return {data};
  } catch (error) {
    const {response} = error;
    if (response?.data) {
      return response.data;
    }
    return {error: error.message || error};
  }
};
