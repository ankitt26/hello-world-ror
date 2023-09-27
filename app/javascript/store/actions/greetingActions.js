import { setGreeting } from '../reducers/greetingReducer';

export const fetchRandomGreeting = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/v1/greetings');
      const data = await response.json();
      // console.log(data.message)
      dispatch(setGreeting(data.message));
    } catch (error) {
      // Handle errors here
      console.error('Error fetching greeting:', error);
    }
  };
};