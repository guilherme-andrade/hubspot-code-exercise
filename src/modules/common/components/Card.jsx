import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrapper = styled.article`
  display: block;
  margin-bottom: 2rem;
`;

const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const CardTitle = styled.h2`
  font-size: 22px;
  font-family: ${props => (props.theme.h2Font)};
  color: ${props => (props.theme.h2FontColor)};
  font-size: ${props => (props.theme.h2FontSize)};
  margin-bottom: 0rem;
`;

const CardSubTitle = styled.p`
  font-family: ${props => (props.theme.bodyFont)};
  color: ${props => (props.theme.bodyFontColor)};
  font-size: ${props => (props.theme.bodyFontSize)};
  margin: .5rem 0;
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
