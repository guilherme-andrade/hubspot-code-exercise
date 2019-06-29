import React from 'react';
import { SearchFilters } from '../presentational';
import { SearchConsumer } from '../../context';

export default function SearchFiltersContainer() {
  return (
    <SearchConsumer>
      {({ setFilters, filters, resetFilters }) => (
        <SearchFilters
          filters={filters}
          setFilters={setFilters}
          resetFilters={resetFilters}
        />
      )}
    </SearchConsumer>
  );
}
