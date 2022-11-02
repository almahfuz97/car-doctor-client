import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer/Footer'
import Header from '../shared/Header/Header'

export default function Main() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
