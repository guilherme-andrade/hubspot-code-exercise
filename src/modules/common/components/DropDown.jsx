import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import enhanceWithClickOutside from 'react-click-outside';

const DropDownMenu = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + .5rem);
  display: none;
  padding: .5rem 20px;
  background: white;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  z-index: 100;
  border-radius: 4px;
`;

const DropDownWrapper = styled.div`
  position: relative;

  ${DropDownMenu} {
    display: ${props => (props.open ? 'block' : 'none')};
    width: ${props => props.width || 'auto'};
  }
`;

const DropDownButton = styled.button`
  padding: .5rem 20px;
  background: transparent;
  border: none;
  border-bottom: 2px solid lightgray;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: gray;


  &:focus,
  &:active {
    outline: none;
  }
`;


function DropDown({ buttonText, children, width }) {
  const [open, setOpen] = useState(false);
  return (
    <DropDownWrapper open={open} width={width}>
      <DropDownButton onClick={() => setOpen(!open)}>
        { buttonText }
      </DropDownButton>
      <DropDownMenu open={open}>
        { children }
      </DropDownMenu>
    </DropDownWrapper>
  );
}

DropDown.propTypes = {
  buttonText: PropTypes.string.isRequired,
  width: PropTypes.string,
  children: PropTypes.node.isRequired,
};

DropDown.defaultProps = {
  width: '',
};

export default enhanceWithClickOutside(DropDown);
