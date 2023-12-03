// In src/components/GitHubActivity.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import { Box } from '@chakra-ui/react';

interface CommitData {
    days: number[];
    total: number;
    week: number;
}

const DayItemday: React.FC<{ day: number }> = ({ day }) => {
    return <span>{day}</span>;
};

const CommitHistoryList: React.FC<{ data: CommitData[] }> = ({ data }) => {
    return (
        <Box>
            <ul>
                {data.map((commit, index) => (
                    <li key={index}>
                        <p>Days: {commit.days.map(day => <DayItemday>day</DayItemday>)}</p>
                        <p>Total: {commit.total}</p>
                        <p>Week: {commit.week}</p>
                    </li>
                ))}
            </ul>
        </Box>
    );
};

const GitHubActivity: React.FC = () => {
    const [commitData, setCommitData] = useState<CommitData[]>([]);

    useEffect(() => {
        axios.get('E:\\challenges\\ftf\\beta\\challenges-ftf-home-task\\packages\\data\\src\\commit-history\\commit-history.json')
            .then(response => {
                setCommitData(response.data.response);
            });
    }, []);

    // sample commit data is in the response property of the data object: E:\challenges\ftf\beta\challenges-ftf-home-task\packages\data\src\commit-history\commit-history.json
    // Create a visualization of the commit data, a sample could be read 
    // Use D3.js to create a line graph visualization of the commit data
    // Use Chakra UI components for styling and layout

    
    // optionally /* D3 visualization goes here */
    return <Box>
        <CommitHistoryList data={commitData}/>
        </Box>;
};

export default GitHubActivity;