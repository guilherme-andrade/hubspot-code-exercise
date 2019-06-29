import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card } from 'Common/components';

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

export default function SearchResults({ results }) {
  return (
    <div>
      <p>
        { `${results.length} results match your search.` }
      </p>
      <ResultsGrid>
        {
          results.map(result => (
            <Card
              key={result.title}
              imageUrl={result.poster}
              title={result.title}
              subTitle={result.genre.join(', ')}
            />
          ))
        }
      </ResultsGrid>
    </div>
  );
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired
};
