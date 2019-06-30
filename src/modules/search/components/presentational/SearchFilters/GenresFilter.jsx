import React from 'react';
import PropTypes from 'prop-types';
import { CheckBoxGroup, CheckBox, Label, DropDown, Padder } from 'Common/components';

export default function GenresFilter({ genres, setGenre }) {
  return (
    <DropDown buttonText="genres" width={'250px'}>
      <Padder>
        {
          Object.keys(genres).map(genre => (
            <CheckBoxGroup key={genre} width={'100%'}>
              <Label>
                { genre }
              </Label>
              <CheckBox
                id="filter-movie"
                value={genres[genre]}
                onClick={() => setGenre(genre, !genres[genre])}
              />
            </CheckBoxGroup>
          ))
        }
      </Padder>
    </DropDown>
  );
}

GenresFilter.propTypes = {
  genres: PropTypes.instanceOf(Object).isRequired,
  setGenre: PropTypes.func.isRequired,
};
