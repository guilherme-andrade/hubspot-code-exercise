import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import { Card, Text, Padder } from 'Common/components';

const CardAnimation = posed.div({
  enter: {
    opacity: 1,
    transition: 'linear'
  },
  leave: {
    opacity: 0,
    transition: 'linear'
  }
});

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;
  min-height: 100vh;

  @media (max-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;


export default function SearchResults({ results }) {
  return (
    <div>
      <Padder>
        <Text>
          { `${results.length} results match your search.` }
        </Text>
      </Padder>
      <ResultsGrid>
        <PoseGroup animateOnMount>
          {
            results.map(result => (
              <CardAnimation key={result.title}>
                <Card
                  imageUrl={result.poster}
                  title={result.title}
                  subTitle={result.genre.join(', ')}
                />
              </CardAnimation>
            ))
          }
        </PoseGroup>
      </ResultsGrid>
    </div>
  );
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired
};
