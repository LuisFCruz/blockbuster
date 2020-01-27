import constants from '../../constants';
import { client } from '../client';

const getMovies = async () => {
  try {
    return await client.get(`${constants.baseUrl}/movies.json`);
  } catch {
    return [];
  }
};

const getMovieInfo = async (movieId) => {
  try {
    return await client.get(`${constants.baseUrl}/movies/${movieId}.json`);
  } catch {
    return {};
  }
}

export const serviceMovies = { getMovies, getMovieInfo };
