import React,{
    useContext
} from 'react'
import './Style.css'
import { FeedbackContext } from '../../contexts/FeedbackContext'
export default function FeedbackForm() {
    const {setShowFeedback}=useContext(FeedbackContext)
    const Close_handle =() =>setShowFeedback(false)
    return (
        <div className="feedback_form_components">
            <div className="feedback_title">Đánh giá của bạn về trang web</div>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                <div className="item_mood">
                    <div className="icon_mood">😀</div>
                    <div className="item_mood_text" >Ghét</div>
                </div> 
                <div className="item_mood">
                    <div className="icon_mood">😁</div>
                    <div className="item_mood_text">Không thích</div>
                </div> 
                <div className="item_mood">
                    <div className="icon_mood">😂</div>
                    <div className="item_mood_text">Không có ý kiến</div>
                </div> 
                <div className="item_mood">
                    <div className="icon_mood">😍</div>
                    <div className="item_mood_text">Thích</div>
                </div> 
                <div className="item_mood">
                    <div className="icon_mood">😫</div>
                    <div className="item_mood_text">Rất thích</div>
                </div> 
            </div>
            <div className="close_btn d-flex justify-content-center align-items-center" onClick={Close_handle}>
                <i className="fas fa-times"></i>
            </div>
        </div>
    )
}
