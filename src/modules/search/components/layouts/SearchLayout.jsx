import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from 'Common/components';

const Header = styled.header`
  padding: 15px;
  border: 1px solid lightgray;
`;

const Body = styled.main`
  display: flex;
  padding: 15px;
  border: 1px solid lightgray;
  border-top: none !important;
`;

export default function SearchLayout({ header, body }) {
  return (
    <Container>
      <Header>{header}</Header>
      <Body>{body}</Body>
    </Container>
  );
}

SearchLayout.propTypes = {
  header: PropTypes.element.isRequired,
  body: PropTypes.element.isRequired,
};
