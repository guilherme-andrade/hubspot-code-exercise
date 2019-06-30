import styled from 'styled-components';

export { default as Card } from './Card';
export { default as DropDown } from './DropDown';
export { default as Testimonial } from './Testimonial';

export const Container = styled.section`
  max-width: 1000px;
  margin: 0 auto;
`;

export const Text = styled.p`
  font-family: ${props => (props.theme.bodyFont)};
  color: ${props => (props.theme.bodyFontColor)};
  font-size: ${props => (props.theme.bodyFontSize)};
`;

export const Padder = styled.div`
  padding: ${props => props.y || '.5rem'} ${props => props.x || '1rem'};
`;

export const Input = styled.input`
  background: white;
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: 0.5rem 1rem;
  display: block;
  font-family: ${props => (props.theme.bodyFont)};
  color: ${props => (props.theme.bodyFontColor)};
  font-size: ${props => (props.theme.bodyFontSize)};

  &:focus,
  &:active {
    outline: none;
  }
`;

export const ButtonLink = styled.button`
  padding: 0.5rem 1rem;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 13px;
  background: transparent;
  border: none;
  color: blue;
  text-decoration: underline;
  display: block;
  font-family: ${props => (props.theme.linkFont)};
  color: ${props => (props.theme.linkFontColor)};
  font-size: ${props => (props.theme.linkFontSize)};

  &:focus,
  &:active {
    outline: none;
  }
`;

export const RadioGroup = styled.div`
  width: ${props => (props.width || '150px')};
  display: flex;
  justify-content: space-between;
  margin-bottom: .5rem;
`;

export const Radio = styled.span`
  position: relative;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &::after {
    display: ${props => (props.value ? 'block' : 'none')};
  }

  &::after {
    content: '';
    background: lightgray;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
`;

export const CheckBoxGroup = RadioGroup;

export const CheckBox = styled(Radio)`
  border-radius: 2px;

  &::after {
    content: '✕';
    color: lightgray;
    font-size: 10px;
    width: auto;
    height: auto;
    background: none;
  }
`;

export const Label = styled.span`
  font-family: ${props => (props.theme.bodyFont)};
  color: ${props => (props.theme.bodyFontColor)};
  font-size: ${props => (props.theme.bodyFontSize)};
  text-transform: uppercase;
  font-weight: bold;
`;
