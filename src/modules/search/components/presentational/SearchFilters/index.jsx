import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GenresFilter from './GenresFilter';
import TypesFilter from './TypesFilter';
import YearsFilter from './YearsFilter';
// eslint-disable-next-line
import { Padder, Input, ButtonLink } from 'Common/components';
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function SearchFilters({ filters, setFilters, resetFilters }) {
  function handleSetGenre(genre, value) {
    setFilters({
      ...filters,
      genres: {
        ...filters.genres,
        [genre]: value
      }
    });
  }

  function handleSetType(type, value) {
    setFilters({
      ...filters,
      type: {
        ...filters.type,
        [type]: value
      }
    });
  }

  function handleSetYears(value) {
    setFilters({
      ...filters,
      year: value
    });
  }

  function handleSetTitle(e) {
    setFilters({
      ...filters,
      title: e.target.value
    });
  }

  function handleReset(e) {
    e.preventDefault();
    resetFilters();
  }

  return (
    <Container>
      <div>
        <Container>
          <GenresFilter
            genres={filters.genres}
            setGenre={handleSetGenre}
          />
          <YearsFilter
            years={filters.year}
            setYears={handleSetYears}
          />
        </Container>
        <Container>
          <Padder>
            <TypesFilter
              types={filters.type}
              setType={handleSetType}
            />
          </Padder>
        </Container>
      </div>
      <div>
        <Padder>
          <Input
            value={filters.text}
            onChange={handleSetTitle}
          />
        </Padder>
        <Padder>
          <ButtonLink onClick={handleReset}>
            Clear Filters
          </ButtonLink>
        </Padder>
      </div>
    </Container>
  );
}

SearchFilters.propTypes = {
  // eslint-disable-next-line
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
  resetFilters: PropTypes.func.isRequired,
};
