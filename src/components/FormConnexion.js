import "../App.css"
import "./css/formConnexion.css"
import { Form, TextField, SubmitField } from "react-components-form";
import Schema from "form-schema-validation";

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

const FormConnexion = (props) => {
    return(
        <Form
            schema={loginSchema}
            onSubmit={model => console.log(model)}
            onError={(errors, data) => console.log('error', errors, data)}
        >
            <TextField name="Identifiant" label="Identifiant :" type="text" />
            <TextField name="password" label="Password :" type="text" />
            <SubmitField value="Submit" />
        </Form>
    );
};

export default FormConnexion;