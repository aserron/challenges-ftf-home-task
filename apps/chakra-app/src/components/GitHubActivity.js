// In src/components/GitHubActivity.js
import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import { Box } from '@chakra-ui/react';

const GitHubActivity = () => {
  const svgRef = useRef();

  useEffect(() => {
    axios.get('https://api.github.com/repos/aserron/[repository]/commits')
      .then(response => {
        const data = response.data;
        // Step 6: Process the fetched data
        // Step 7: Use D3.js to create a line graph visualization
        const svg = d3.select(svgRef.current);
        // D3 graph creation logic
      });
  }, []);

  return <Box ref={svgRef} />;
};

export default GitHubActivity;
