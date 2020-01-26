import { client } from '../client';

const host = window.location.origin;

const getMovies = async () => {
  try {
    return await client.get(`${host}/movies.json`);
  } catch {
    return [];
  }
};

const getMovieInfo = async (movieId) => {
  try {
    return await client.get(`${host}/movies/${movieId}.json`);
  } catch {
    return {};
  }
}

export const serviceMovies = { getMovies, getMovieInfo };
