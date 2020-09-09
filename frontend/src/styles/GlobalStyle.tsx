import React from 'react';
import GlobalColors from './colors';
import GlobalReset from './reset';

const GlobalStyles: React.FC = () => {
  return (
    <>
      <GlobalColors/>
      <GlobalReset/>
    </>
  );
};
export default GlobalStyles;