import React from 'react';
import styled from 'styled-components';

const TestimonialWrapper = styled.section`
  background: #f5f5f5;
  width: 100%;
  padding: 3rem 0;
  margin: 2rem 0;
`;

const TestimonialContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const TestimonialContent = styled.div`
  padding: 0 2rem;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    background: #FF6C02;
    left: -1rem;
    top: calc(2rem + 2px);
    bottom: 0;
    width: 2px;
  }
`;

const TestimonialButton = styled.a`
  background: ${props => props.theme.linkFontColor};
  color: ${props => props.theme.bodyBackground};
  padding: ${props => props.theme.componentPadding};
  text-transform: uppercase;
  border-radius: 4px;
  width: 400px;
  text-align: center;
  font-family: 'Montserrat';
  text-decoration: none;
  font-weight: bold;
  font-size: 13px;
`;

const TestimonialText = styled.p`
  font-family: 'Roboto Slab';
  color: ${props => props.theme.bodyFontColor};
  line-height: 2;
  font-weight: 300;

  &::before,
  &::after {
    position: absolute;
    left: calc(-2rem + 2px);
    top: 0;
    bottom: 0;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  &::before {
    content: '';
    background: #FF6C02;
    border-radius: 50%;
  }

  &::after {
    font-family: 'Times New Roman';
    content: '\\201D';
    font-size: 45px;
    color: white;
    line-height: 1.2;
    text-align: center;
  }
`;

const TestimonialAuthor = styled.span`
  font-family: 'Montserrat';
  font-size: 13px;
  font-weight: bold;


  &::before {
    position: absolute;
    content: '';
    background: #FF6C02;
    left: calc(-1rem - 3px);
    bottom: -4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
`;

export default function Testimonial() {
  return (
    <TestimonialWrapper>
      <TestimonialContainer>
        <TestimonialContent>
          <TestimonialText>
            Polaroid bushwich microdosing tattooed. Cornhold single coffee bicycle
            rights lumbersexual, pour-over
            intelligents ethical selfies schlitz raw denim 90&apos;s leggings.
            Art party fap lumbersexual mustache actually tilde
            disrupt kinfolk goth +1.
          </TestimonialText>
          <TestimonialAuthor>
            Indiana Jones, Archaeologist
          </TestimonialAuthor>
        </TestimonialContent>
        <TestimonialButton href="/">
          Tell Me More
        </TestimonialButton>
      </TestimonialContainer>
    </TestimonialWrapper>
  );
}
