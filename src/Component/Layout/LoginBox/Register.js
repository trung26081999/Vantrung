/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { Form, Input, Button, DatePicker, Radio } from 'antd';
import register from '../../../Assets/Login/register_1.svg';
import React from 'react';

const Login = () => {
  return (
    <div className="register">
      <div className="container">
        <div className="register__form">
          <h1>Sign Up</h1>
          <Form
            layout={'vertical'}
            name="basic"
            initialValues={{
              remember: true,
            }}
          >
            <Form.Item
              label="Username:"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input className="register__form--ipn" placeholder="Enter your username..." />
            </Form.Item>
            <Form.Item
              label="Email:"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input className="register__form--ipn" placeholder="Enter your email..." />
            </Form.Item>
            <Form.Item
              label="Password:"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password
                className="register__form--ipn"
                placeholder="Enter your password..."
              />
            </Form.Item>
            <Form.Item
              label="Confirm Password:"
              name="confirm password"
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
              ]}
            >
              <Input.Password className="register__form--ipn" placeholder="confirm password..." />
            </Form.Item>
            <Form.Item
              label="Birthday:"
              name="birthday"
              rules={[
                {
                  required: true,
                  message: 'Please provide your birthday!',
                },
              ]}
              style={{ display: 'inline-block', width: 'calc(50% )' }}
            >
              <DatePicker format={'DD/MM/YYYY'} />
            </Form.Item>
            <Form.Item
              label="Gender:"
              name="gender"
              rules={[
                {
                  required: true,
                  message: 'Please choice your gender!',
                },
              ]}
              style={{ display: 'inline-block', width: 'calc(50% )' }}
            >
              <Radio.Group>
                <Radio value={1}>MALE</Radio>
                <Radio value={2}>FEMALE</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="register__form--btn">
                Register
              </Button>
            </Form.Item>
            <Link
              to="/News/login"
              style={{ position: 'relative', float: 'right', textDecorationLine: 'underline' }}
            >
              If you have an account, let's sign in now
            </Link>
          </Form>
        </div>
        <div className="register__img">
          <img src={register} alt="register" />
        </div>
      </div>
    </div>
  );
};

export default Login;
