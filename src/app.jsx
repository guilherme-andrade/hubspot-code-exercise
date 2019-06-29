import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SearchContainer } from 'Modules/search/components/containers';

export default function App() {
  return (
    <ThemeProvider theme={{}}>
      <SearchContainer />
    </ThemeProvider>
  );
}
