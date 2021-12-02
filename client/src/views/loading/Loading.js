import React,{
    useContext
} from 'react'
import {Button} from 'react-bootstrap'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import HomePage from '../pages/HomePage'
import ProductsPage from '../pages/ProductsPage'
import FeedbackForm from '../../components/feedback/FeedbackForm'
import {FeedbackContext} from '../../contexts/FeedbackContext'
import './Style.css'
export default function Loading({PageRoute}) {
    const body=(
        <>
            {PageRoute==='home'&&<HomePage />}
            {PageRoute==='product'&&<ProductsPage />}
        </>
    )
    const {showFeedback,setShowFeedback}=useContext(FeedbackContext)
    const feedback_handle=()=>{
        setShowFeedback(true)
    }

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
            <div className="feedback">
                {
                    !showFeedback && 
                    <div className="feedback_btn">
                        <Button variant="dark" onClick={()=>feedback_handle()}>😍 Phản hồi</Button>
                    </div>
                }
                {
                    showFeedback && 
                    <div className="feedback_form">
                        <FeedbackForm/>
                    </div>
                }
            </div>
        </div>
    )
}
