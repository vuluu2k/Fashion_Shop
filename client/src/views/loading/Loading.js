import React from 'react'
import {Button} from 'react-bootstrap'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import HomePage from '../pages/HomePage'
import './Style.css'
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
            <div className="feedback_btn">
                <Button variant="dark">😍 Phản hồi</Button>
            </div>
        </div>
    )
}
