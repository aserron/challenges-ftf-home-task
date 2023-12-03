import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import GitHubActivity from './components/GitHubActivity';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <GitHubActivity />
    </ChakraProvider>
  );
}

export default App;