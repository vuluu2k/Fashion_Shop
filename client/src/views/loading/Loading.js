import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
export default function Loading() {
    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="container" style={{height: '500px'}}>
                Noi dung
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}
