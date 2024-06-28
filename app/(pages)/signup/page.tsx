'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '../../hooks';
import { Button, Checkbox, Form, Input } from 'antd';
import { getSignUpAccountsRequest } from '../../redux/store/reducers/accountsSlice';
import React from 'react';

export default function Signup() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordAgain: '',
    remember: true,
  });

  const handleInputChange = (e:any) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const signup = () => {
    dispatch(getSignUpAccountsRequest({
      email: formData.email,
      password: formData.password,
      remember: formData.remember,
    }));
    router.push('/');
  };

  const handleSignIn = () => {
    router.push('/signin')
  }

  return (
    <div className='sign-in'>
      <div className='sign-in-content'>

        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          style={{ width: 600, backgroundColor: 'white' }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onSubmitCapture={signup}
        >
          <h4>
            Registration
          </h4>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input name="email" onChange={handleInputChange} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password name="password" onChange={handleInputChange} />
          </Form.Item>

          <Form.Item
            label="Password again"
            name="passwordAgain"
            rules={[{ required: true, message: 'Please input your password again!' }]}
          >
            <Input.Password name="passwordAgain" onChange={handleInputChange} />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 1, span: 16 }}
          >
            <Checkbox name="remember" checked={formData.remember} onChange={handleInputChange}>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button disabled={formData.password === '' || formData.email === ''} type="primary" htmlType="submit" >
              Submit
            </Button>
          </Form.Item>
          <p>
            if you have an account <span className='link' onClick={handleSignIn}>Log in</span>
          </p>
        </Form>
      </div>
    </div>
  )
}
