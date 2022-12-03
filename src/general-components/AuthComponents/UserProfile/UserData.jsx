import React from 'react';
import {Badge, Button} from "react-bootstrap";

const UserData = ({user,handleLogout}) => {

    // console.log(user);

    return (
        <div className={`UserData`}>

            <header>
                {/*email phoneNumber and uid*/}
                <div className={"text-container"}>
                    <h5>
                        {user.email && "Email: "}
                        {user.phoneNumber && "Phone: "}
                        <strong>{user.email || user.phoneNumber}</strong>
                    </h5>
                    <p className={"small m-0"}>
                        ID: <Badge>{user.uid && (user.uid.slice(0,15) + '...')}</Badge>
                    </p>
                    {
                        user.metadata?.creationTime &&
                        <p className={"small"}>
                            Аккаунт создан:
                            <Badge>{user.metadata.creationTime}</Badge>
                        </p>
                    }
                </div>
            </header>

            <Button size={"sm"} onClick={handleLogout} variant={"danger"}>
                Выйти из аккаунта
            </Button>
        </div>
    );
};

export default UserData;
