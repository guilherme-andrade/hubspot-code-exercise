import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrapper = styled.article`
  display: block;
  margin-bottom: 2rem;
`;

const CardImage = styled.img`
  width: 100%;
  object-fit: contain;
  object-position: center;
`;

const CardTitle = styled.h2`
  font-size: 22px;
`;

const CardSubTitle = styled.p`
`;

export default function Card({ imageUrl, title, subTitle }) {
  return (
    <CardWrapper>
      <CardImage src={imageUrl} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardSubTitle>{subTitle}</CardSubTitle>
    </CardWrapper>
  );
}

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
