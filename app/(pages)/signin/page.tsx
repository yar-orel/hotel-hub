'use client'
import { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '../../hooks';
import { getSignInAccountsRequest } from '../../redux/store/reducers/accountsSlice';
import React from 'react';

const SignIn = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: true,
  });
  const router = useRouter();

  const handleChange = (e: any) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'remember' ? checked : value,
    }));
  };
  
  const handleSubmit = async () => {
    const { email, password, remember } = formData;
    dispatch(getSignInAccountsRequest({ email, password, remember }));
    router.push('/');
  };

  const handleSignUp = () =>{
    router.push('/signup')
  }
  return (
    <div className='sign-in'>
      <div className='sign-in-content'>
        <Form
          name='basic'
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          style={{ width: 600, backgroundColor: 'white' }}
          initialValues={{ remember: true }}
          autoComplete='off'
          onFinish={handleSubmit}
        >
          <h4>Authentication</h4>
          <Form.Item
            label='Email'
            name='email'
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input name='email' onChange={handleChange} />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password name='password' onChange={handleChange} />
          </Form.Item>

          <Form.Item name='remember' valuePropName='checked' wrapperCol={{ offset: 1, span: 16 }}>
            <Checkbox name='remember' onChange={handleChange}>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button disabled={formData.password === '' || formData.email === ''} type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>

          <p>If you do not have an account <span className='link' onClick={() => router.push('/signup')}>Sign up</span></p>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
