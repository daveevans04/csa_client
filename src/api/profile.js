import client from './client';

export const getProfile = async () => {
  try {
    const {data} = await client('/users');
    // console.log('Api: ', data); // Check the response data
    return {data};
  } catch (error) {
    // console.log(error); // Check any potential errors
    const {response} = error;
    if (response?.data) {
      return response.data;
    }
    return {error: error.message || error};
  }
};
