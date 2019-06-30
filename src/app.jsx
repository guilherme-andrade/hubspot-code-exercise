import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { SearchContainer } from './modules/search/components/containers';
import { Testimonial } from './modules/common/components';

const grayDark = '#595756';
const blue = '#20A8E6';

const theme = {
  bodyBackground: 'white',
  bodyFont: 'Montserrat',
  bodyFontColor: grayDark,
  bodyFontWeight: 500,
  h1Font: 'Roboto',
  h1Size: '30px',
  h1FontColor: grayDark,
  h1FontWeight: 'bold',
  h2Font: 'Roboto',
  h2Size: '24px',
  h2FontColor: grayDark,
  h2FontWeight: 'bold',
  h3Font: 'Roboto',
  h3Size: '14px',
  h3FontColor: grayDark,
  h3FontWeight: 'bold',
  linkFont: 'Montserrat',
  linkFontColor: blue,
  linkFontWeight: 'bold',
  componentPadding: '1rem 2rem'
};


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <SearchContainer />
        <Testimonial />
      </Fragment>
    </ThemeProvider>
  );
}
