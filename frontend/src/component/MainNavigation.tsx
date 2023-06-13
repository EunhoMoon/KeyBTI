import React, {FC, SyntheticEvent} from 'react';
import {Tab, Tabs} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";

const MainNavigation: FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navigateHandler = (event: SyntheticEvent, link: string): void => {
        navigate(link);
    }

    return (
        <Tabs value={location.pathname} onChange={navigateHandler} centered>
            <Tab label="Home" value="/"/>
            <Tab label="Test" value="/test"/>
            <Tab label="Result" value="/result"/>
        </Tabs>
    );
};

export default MainNavigation;