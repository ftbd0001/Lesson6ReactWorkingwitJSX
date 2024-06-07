import React from 'react';
import TemperatureConverter from './TemperatureConverter';
import TodoList from './TodoList';
import { Container, Typography } from '@mui/material';

function App() {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>React App with Material UI</Typography>
            <TemperatureConverter />
            <TodoList />
        </Container>
    );
}

export default App;
