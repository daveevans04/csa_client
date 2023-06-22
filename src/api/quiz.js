import client from './client';

export const getQuiz = async () => {
  try {
    const {data} = await client('/quizzes');
    return {data};
  } catch (error) {
    const {response} = error;
    if (response?.data) {
      return response.data;
    }
    return {error: error.message || error};
  }
};

export const getQuizById = async quizId => {
  try {
    const {data} = await client(`/quizzes/${quizId}`);
    return {data};
  } catch (error) {
    const {response} = error;
    if (response?.data) {
      return response.data;
    }
    return {error: error.message || error};
  }
};
