import React, {useState} from 'react';
import {Alert, Button, Form, FormControl} from "react-bootstrap";
import {addUserData} from "../../../functions/Auth/addUserData";

const AddUserData = ({user}) => {

    const [res,setRes] = useState({err:false,text:"",})

    const [formData,setFormData] = useState({
        name:'',
        surname:'',
        photo:'',
    })

    //change inputs
    const handleChange = (value,input) => {
        const copy = Object.assign({},formData);
        copy[input] = value;
        setFormData(copy);
    }

    //set data in database
    const handleSendForm = e => {
        e.preventDefault();

        addUserData(user,formData)
            .then(() => setRes({err: false,text:"Данные профиля успешно загружены",}))
            .catch(() => setRes({err: true,text:"Ошибка загрузки данных. Попробуйте позже.",}))
        setFormData({name:'', surname:'', photo:'',})
        setTimeout(() => setRes({err: false,text:""}),8000)
    }

    return (
        <div className={"AddUserData w-50 my-2 p-2 border"}>

            <h6>
                Добавьте информацию для возможности писать
                сообщения другим пользователяем
            </h6>

            <Form onSubmit={handleSendForm}>
                <FormControl
                    required
                    value={formData.name}
                    onChange={e => handleChange(e.target.value,"name")}
                    placeholder={"Enter name"}
                    size={"sm"}
                />

                <FormControl
                    required
                    value={formData.surname}
                    onChange={e => handleChange(e.target.value,"surname")}
                    placeholder={"Enter surname"}
                    size={"sm"}
                />

                <Form.Control
                    onChange={e => handleChange(e.target.files[0],"photo")}
                    type="file"
                    size={"sm"}
                />

                {/*alert with res*/}
                {
                    res.text &&
                    <Alert className={"my-2 p-2 small"} variant={res.err ? "danger" : "success"}>
                        {res.text}
                    </Alert>
                }

                <Button size={"sm"} type={"submit"}>Добавить</Button>
            </Form>
        </div>
    );
};

export default AddUserData;
