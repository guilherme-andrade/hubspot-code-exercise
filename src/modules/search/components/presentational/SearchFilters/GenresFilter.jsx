import React from 'react';
import PropTypes from 'prop-types';
import { CheckBoxGroup, CheckBox, Label, DropDown } from 'Common/components';

export default function GenresFilter({ genres, setGenre }) {
  return (
    <DropDown buttonText="genres">
      {
        Object.keys(genres).map(genre => (
          <CheckBoxGroup key={genre}>
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
    </DropDown>
  );
}

GenresFilter.propTypes = {
  genres: PropTypes.instanceOf(Object).isRequired,
  setGenre: PropTypes.func.isRequired,
};
