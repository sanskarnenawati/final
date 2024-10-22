// // src/components/Dashboard.js
// import React from 'react';

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <p>Welcome to the dashboard. Your stock predictions will appear here.</p>
//       {/* Modal placeholder to be added here */}
//     </div>
//   );
// }

// export default Dashboard;

// src/components/Dashboard.js
// src/components/Dashboard.js
// src/components/Dashboard.js
import React, { useState } from 'react';
import { Box, Button, Container, Typography, Select, MenuItem, FormControl, InputLabel, Paper } from '@mui/material';
import logo from '../assets/Logo.png'; // Import your logo

function Dashboard() {
  const [selectedStock, setSelectedStock] = useState('');

  const handleStockChange = (event) => {
    setSelectedStock(event.target.value);
  };

  const handlePredict = () => {
    if (!selectedStock) {
      alert('Please select a stock to predict');
      return;
    }
    // Add your prediction logic here
    alert(`Predicting for ${selectedStock}`);
  };

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #1e1e1e, #3d3d3d)', 
      minHeight: '100vh', 
      padding: '20px 0',
      color: '#ffffff'
    }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: 4, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
          <Box display="flex" justifyContent="center" sx={{ mb: 4 }}>
            <img src={logo} alt="CraftTrade Logo" style={{ width: '150px', height: '150px' }} />
          </Box>
          <Typography variant="h4" align="center" gutterBottom>
            Dashboard
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 3 }}>
            Welcome to the dashboard. Your stock predictions will appear here.
          </Typography>
          <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
            <InputLabel style={{ color: '#ffffff' }}>Select Stock</InputLabel>
            <Select
              value={selectedStock}
              onChange={handleStockChange}
              label="Select Stock"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#6200ea',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ffffff',
                },
                '.MuiSvgIcon-root ': {
                  fill: '#ffffff !important',
                }
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: '#2e2e2e',
                    color: '#ffffff',
                    '& .MuiMenuItem-root': {
                      '&:hover': {
                        backgroundColor: 'rgba(98, 0, 234, 0.2)',
                      },
                    },
                  },
                },
              }}
            >
              <MenuItem value="RELIANCE">Reliance Industries (RELIANCE)</MenuItem>
              <MenuItem value="TCS">Tata Consultancy Services (TCS)</MenuItem>
              <MenuItem value="INFY">Infosys (INFY)</MenuItem>
              <MenuItem value="HDFCBANK">HDFC Bank (HDFCBANK)</MenuItem>
              <MenuItem value="BHARTIARTL">Bharti Airtel (BHARTIARTL)</MenuItem>
            </Select>
          </FormControl>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              onClick={handlePredict}
              sx={{ 
                padding: '10px 20px', 
                backgroundColor: '#6200ea',
                color: '#ffffff',
                '&:hover': {
                  backgroundColor: '#3700b3',
                }
              }}
            >
              Predict
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default Dashboard;
