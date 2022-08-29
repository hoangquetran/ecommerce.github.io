import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import './login.css';

const Login = () => {

    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [form, setForm] = useState({});

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleValidate() {
        const errors = {};
        if (!form.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
            console.log("code");
        }
        if (!form.password) {
            errors.password = "Required";
        }
        return errors;
    }

    function handleSubmit() {
        alert("Login in successfully!!!");
        handleClose();
    }

    return (
        <div>
            <Button className="btn--login" onClick={handleShow}>Login</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome to <span>MYSHOP</span>! Please login.</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Formik
                        initialValues={form}
                        validate={handleValidate}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="form-Email">
                                    <div className={`custom-input ${ errors.email ? "custom-input-error" : "" }`} >
                                        <Form.Control type="email" name="email" value={form.email || ""} onChange={handleChange} placeholder="abc@email.com" />
                                        <p className="error">{errors.email}</p>
                                    </div>
                                </Form.Group>

                                <Form.Group>
                                    <div className={`custom-input ${ errors.password ? "custom-input-error" : "" }`} >
                                        <Form.Control type="password" name="password" value={form.password || ""} onChange={handleChange} placeholder="Password" />
                                        <p className="error">{errors.password}</p>
                                    </div>
                                </Form.Group>

                                <Button variant="primary" type="submit">Log in</Button>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Login;