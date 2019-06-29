import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid lightgray;
`;

const Header = styled.header`
  padding: 15px;
  border-bottom: 1px solid lightgray;
`;

const Body = styled.main`
  display: flex;
  padding: 15px;
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
