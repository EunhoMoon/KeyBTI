import React, {Fragment} from 'react';
import {Outlet} from "react-router-dom";
import MainNavigation from "../component/MainNavigation";

const RootLayout = () => {
    return (
        <Fragment>
            <MainNavigation/>
            <Outlet/>
        </Fragment>
    );
};

export default RootLayout;