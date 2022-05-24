import "../App.css"
import "./css/formConnexion.css"
import { Form, TextField, SubmitField } from "react-components-form";
import Schema from "form-schema-validation";
import { useCookies } from 'react-cookie';

const loginSchema = new Schema({
    login: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  });

const FormConnexion = () => {
    const [cookies, setCookie] = useCookies(['access_token', 'user']);
    return(
        <Form
            schema={loginSchema}
            onSubmit={model => login(model)}
            onError={(errors, data) => console.log('error', errors, data)}
        >
            <TextField name="login" label="Email :" type="text" />
            <TextField name="password" label="Password :" type="text" />
            <SubmitField value="Submit" />
        </Form>
    );

    async function cookie(data) {
        let expires = new Date();
        expires.setTime(expires.getTime() + (60*60*1000));

        await setCookie('access_token', data['data'].id, { path: '/',  expires});
        await setCookie('user', data.data, { path: '/',  expires});

    }

    async function login(model, stateChanger){
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "password": model.password,
                "email": model.login
            })
        };
        fetch('http://'+process.env.REACT_APP_API_URI+'/login', requestOptions)
            .then(response => response.json())
            .then(data => cookie(data))
            .then(() => console.log("cookie"));
    }
};


export default FormConnexion;