import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Radio, RadioGroup, Label } from 'Common/components';

export default function TypesFilter({ types, setType }) {
  return (
    <Fragment>
      {
        Object.keys(types).map(type => (
          <RadioGroup key={type}>
            <Label>
              { type }
            </Label>
            <Radio
              id="filter-movie"
              value={types[type]}
              onClick={() => setType(type, !types[type])}
            />
          </RadioGroup>
        ))
      }
    </Fragment>
  );
}

TypesFilter.propTypes = {
  types: PropTypes.instanceOf(Object).isRequired,
  setType: PropTypes.func.isRequired,
};
