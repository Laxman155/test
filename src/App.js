import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './Pages/Home';
import ExerciseDetail from './Pages/ExerciseDetail';

const App = () => {
    return (
        <Box width="400" sx={{ width: { xl: '1488px' } }} m="auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/excercise/:id" element={<ExerciseDetail />} />
            </Routes>
            <Footer />
        </Box>
    );
}

export default App;
