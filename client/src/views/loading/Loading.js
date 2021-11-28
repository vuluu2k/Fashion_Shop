import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import HomePage from '../pages/HomePage'
export default function Loading() {

    const body=<HomePage/>

    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="container_custom">
                {body}
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}
