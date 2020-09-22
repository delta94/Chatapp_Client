import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faAt } from '@fortawesome/free-solid-svg-icons';

import { Link, Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Container, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { userApi } from '../../api';
import { LoginContext } from '../../components/providers';

// CSS
import './login.css';

// Images
import person from '../../assets/images/person.svg';

const Login = () => {
    let { isLogin, setLogin, setUser } = useContext(LoginContext);

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email không hợp lệ')
            .required('Bắt buộc phải nhập email'),
        password: Yup.string()
            .min(6, 'Password phải có ít nhất 6 ký tự')
            .max(10, 'Bạn không được nhập quá 10 ký tự')
            .required('Bạn bắt buộc phải nhập mật khẩu')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: LoginSchema,
        onSubmit: values => { // Values = { email, password }
            userApi.getToken(values).then(res => {
                // console.log(res);
                let { status, data: { message, token, user } } = res;
                
                if(status !== 'success' || !token || !user) {
                    throw new Error(message);
                }

                localStorage.setItem('token', token);

                setLogin(currentState => !isLogin);
                setUser(currentState => user);
            }).catch(error => console.log(error));
        },
    });

    return !isLogin ? (
        <Container className="p-0" fluid={true}>
            <div className="form-wrapper">
                <Form className="login-form rounded" onSubmit={formik.handleSubmit}>
                    <div className="login-image">
                        <img className="rounded-circle" src={person} />
                    </div>
                    <FormGroup className="my-3 w-100">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <FontAwesomeIcon icon={faAt} className="fa-lg" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                type="text"
                                size="lg"
                                name="email"
                                placeholder="Nhập email của bạn"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                            />
                        </InputGroup>
                        <FormText color="danger">{formik.touched.email && formik.errors.email}</FormText>
                    </FormGroup>
                    <FormGroup className="w-100">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <FontAwesomeIcon icon={faLock} className="fa-lg" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                type="password"
                                size="lg"
                                name="password"
                                placeholder="Nhập mật khẩu của bạn"
                                onChange={formik.handleChange}
                                values={formik.values.password}
                                onBlur={formik.handleBlur}
                            />
                        </InputGroup>
                        <FormText color="danger">{formik.touched.password && formik.errors.password}</FormText>
                    </FormGroup>
                    <Button className="my-3" size="lg" outline color="primary">Đăng nhập</Button>
                    <p className="text-white">Bạn chưa có tài khoản <span><Link className="text-success" to="/register">Tạo tài khoản</Link></span></p>
                </Form>
            </div>
        </Container>
    ) : (
            <Redirect to={{
                pathname: '/main'
            }} />
        )
};

export default Login;