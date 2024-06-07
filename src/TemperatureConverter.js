import React, { useState } from 'react';
import { TextField, Grid, Container, Typography } from '@mui/material';

function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (e) => {
        const value = e.target.value;
        setCelsius(value);
        if (!isNaN(value) && value !== '') {
            setFahrenheit((value * 9/5 + 32).toFixed(2));
        } else {
            setFahrenheit('');
        }
    };

    const handleFahrenheitChange = (e) => {
        const value = e.target.value;
        setFahrenheit(value);
        if (!isNaN(value) && value !== '') {
            setCelsius(((value - 32) * 5/9).toFixed(2));
        } else {
            setCelsius('');
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Temperature Converter</Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Celsius"
                        value={celsius}
                        onChange={handleCelsiusChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Fahrenheit"
                        value={fahrenheit}
                        onChange={handleFahrenheitChange}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default TemperatureConverter;
