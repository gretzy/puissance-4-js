import React, {Component, pageProps} from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Connect4 } from '../components/Connect4'
import { Heading, VStack } from '@chakra-ui/react'
import './App.css';

function initMap() {
  
}

function App() {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ ChakraProvider>
  );
}

export default App;
