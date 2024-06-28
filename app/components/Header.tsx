'use client';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useRouter } from 'next/navigation';
import { authenticateUser, removeAccount } from '../redux/store/reducers/accountsSlice';
import { useEffect } from 'react';
import { getAccounts } from '../redux/store/selectors';
import Logo from '../../public/logo.png'
import Image from 'next/image';
import React from 'react';

export const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch()
  const accounts = useAppSelector(getAccounts);
  const logOut = () => {
    dispatch(removeAccount())
  }
  useEffect(() => {
    dispatch(authenticateUser());
  }, [dispatch]);

  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <Image src={Logo} alt="Logo" className="header__logo" onClick={() => router.push('/')} />
          <div className="p-8">
            {accounts.email === null ? (
              <button
                className="header__btn"
                onClick={() => router.push('/signin')}
              >
                Log in
              </button>

            ) : (
              <div className='header-account'>
                <div className='text-white'>{accounts.email}</div>
                <button
                  className="header__btn"
                  onClick={logOut}
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
