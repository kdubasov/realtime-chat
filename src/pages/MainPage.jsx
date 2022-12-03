import React from 'react';
import UsersList from "../pages-components/MainPage/UsersList/UsersList";
import CheckUserAlert from "../general-components/Alerts/CheckUserAlert";

const MainPage = () => {

    return (
        <div className={'MainPage py-2'}>

            <CheckUserAlert />

            <h3>Главная страница</h3>

            {/*users list (ListGroup)*/}
            <UsersList />
        </div>
    );
};

export default MainPage;
