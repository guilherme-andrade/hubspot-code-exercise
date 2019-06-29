import { objectIsEmpty, between } from '../../common/functions';
import { INITIAL_FILTERS, DATA } from '../config';

class SearchService {
  constructor(data = DATA, filters = INITIAL_FILTERS) {
    this.data = data;
    this.results = data;
    this.filters = filters;
    this.getGenres();
    this.getYears();
    this.getMaxYear();
    this.getMinYear();
  }

  getResults() {
    return this.results;
  }

  getFilters() {
    return this.filters;
  }

  // set filters and filter results
  setFilters(filters) {
    if (filters) {
      this.filters = filters;
    }
    return this.filter();
  }

  getGenres() {
    this.genres = [];
    this.results.forEach((el) => {
      this.genres = this.genres.concat(el.genre
        .filter(cat => !this.genres.includes(cat)));
    });
    this.genres.forEach((genre) => {
      this.filters.genres[genre] = false;
    });
  }

  getYears() {
    this.years = this.data.map(el => parseInt(el.year, 10))
      .sort((y1, y2) => (y1 - y2));
    this.years = this.years.filter(year => this.years.includes(year));
  }

  getMaxYear() {
    return Math.max(...this.years);
  }

  getMinYear() {
    return Math.min(...this.years);
  }

  filter() {
    if (objectIsEmpty(this.filters)) {
      return this.results;
    }
    if (!objectIsEmpty(this.filters.type)) {
      this.filterByType();
    }
    if (!objectIsEmpty(this.filters.genres)) {
      this.filterByGenre();
    }
    if (!objectIsEmpty(this.filters.year)) {
      this.filterByYears();
    }
    if (!objectIsEmpty(this.filters.title)) {
      this.filterByTitle();
    }
    return this.filters;
  }

  filterByType() {
    const types = this.activeTypes();
    this.results = this.results.filter(el => types.includes(el.type));
  }

  filterByGenre() {
    const genres = this.activeGenres();
    this.results = this.results.filter(el => genres.every(genre => el.genre.includes(genre)));
  }

  filterByYears() {
    const { year } = this.filters;
    this.results = this.results.filter(el => between(parseInt(el.year, 10), year.min, year.max));
  }

  filterByTitle() {
    const { title } = this.filters;
    this.results = this.results.filter(el => el.title.toLowerCase().includes(title.toLowerCase()));
  }

  activeGenres() {
    return Object.keys(this.filters.genres)
      .filter(genre => this.filters.genres[genre]);
  }

  activeTypes() {
    return Object.keys(this.filters.type)
      .filter(type => this.filters.type[type]);
  }
}

export default SearchService;
