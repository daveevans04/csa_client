import client from './client';

export const getVideos = async () => {
  try {
    const {data} = await client('/videos');
    // console.log('Api: ', data); // Check the response data
    return {data};
  } catch (error) {
    const {response} = error;
    if (response?.data) {
      return response.data;
    }
    return {error: error.message || error};
  }
};

export const getVideosById = async videoId => {
  try {
    const {data} = await client(`/videos/${videoId}`);
    return {data};
  } catch (error) {
    const {response} = error;
    if (response?.data) {
      return response.data;
    }
    return {error: error.message || error};
  }
};
