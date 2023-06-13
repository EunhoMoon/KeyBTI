import React, {FC, Fragment} from 'react';
import {Outlet} from 'react-router-dom';
import MainNavigation from "../component/MainNavigation";

const MainLayout: FC = () => {
    return (
        <Fragment>
            <MainNavigation/>
            <main>
                <Outlet/>
            </main>
        </Fragment>
    );
};

export default MainLayout;