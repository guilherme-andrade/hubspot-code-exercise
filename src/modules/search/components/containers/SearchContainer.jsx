import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-unresolved
import { SearchProvider } from '../../context';
import { SearchService } from '../../services';
import { SearchLayout } from '../layouts';

import SearchFiltersContainer from './SearchFiltersContainer';
import SearchResultsContainer from './SearchResultsContainer';

export default function SearchContainer() {
  let service = new SearchService();
  const [results, setResults] = useState(service.getResults());
  const [filters, setFilters] = useState(service.getFilters());

  function resetFilters() {
    service = new SearchService();
    setFilters(new SearchService().getFilters());
    setResults(new SearchService().getResults());
  }

  useEffect(() => {
    service.setFilters(filters);
    return setResults(service.getResults());
  }, [filters]);

  return (
    <SearchProvider value={{ filters, results, setFilters, resetFilters }}>
      <SearchLayout
        header={<SearchFiltersContainer />}
        body={<SearchResultsContainer />}
      />
    </SearchProvider>
  );
}
