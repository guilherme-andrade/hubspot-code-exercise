import React from 'react';
import { SearchResults } from '../presentational';
import { SearchConsumer } from '../../context';

export default function SearchResultsContainer() {
  return (
    <SearchConsumer>
      {value => <SearchResults results={value.results} />}
    </SearchConsumer>
  );
}
