'use client'
import { setupStore } from '../redux/store/store'
import { Provider } from 'react-redux'
import React from 'react'

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={setupStore()}>
            {children}
        </Provider>
    )
}