import constants from '../../constants';
import { client } from '../client';

const getMovies = async () => {
  try {
    return await client.get(`${constants.baseUrl}/movies.json`);
  } catch {
    return null;
  }
};

const getMovieInfo = async (movieId) => {
  try {
    return await client.get(`${constants.baseUrl}/movies/${movieId}.json`);
  } catch {
    return null;
  }
}

export const serviceMovies = { getMovies, getMovieInfo };
