import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SearchContainer } from './modules/search/components/containers';

export default function App() {
  return (
    <ThemeProvider theme={{}}>
      <SearchContainer />
    </ThemeProvider>
  );
}
