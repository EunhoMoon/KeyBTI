import React, {FC, SyntheticEvent} from 'react';
import {Box, Tab, Tabs} from "@mui/material";
import {useLocation, useNavigate} from 'react-router-dom';

const MainNavigation:FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleChange = (event: SyntheticEvent, newValue: string) => {
        navigate(newValue);
    }
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={location.pathname} onChange={handleChange} centered>
            <Tab label="HOME" value="/" />
            <Tab label="TEST" value="/test"/>
            <Tab label="RESULT" value="/result"/>
        </Tabs>
        </Box>
    );
};

export default MainNavigation;