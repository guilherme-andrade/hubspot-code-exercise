import data from '../../../data.json';

export const DATA = data.media;

export const INITIAL_FILTERS = {
  title: '',
  type: {
    movie: false,
    book: false
  },
  genres: {},
  year: {
    min: 1800,
    max: new Date().getFullYear()
  },
};
