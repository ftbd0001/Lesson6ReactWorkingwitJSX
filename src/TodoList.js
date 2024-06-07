import React, { useState } from 'react';
import { TextField, Button, List, Card, CardContent, Grid, Typography, IconButton, Container } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Todo List</Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={9}>
                    <TextField
                        label="New Task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddTask}
                        fullWidth
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
            <List>
                {tasks.map((task, index) => (
                    <Card key={index} variant="outlined" style={{ margin: '10px 0' }}>
                        <CardContent>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={10}>
                                    <Typography>{task}</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                ))}
            </List>
        </Container>
    );
}

export default TodoList;
