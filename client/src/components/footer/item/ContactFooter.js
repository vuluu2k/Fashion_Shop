import React from 'react'
import {Form,Button} from 'react-bootstrap'
import './Style.css'
export default function ContactFooter() {
    return (
        <div className="d-flex justify-content-between align-items-center responsive_contact">
            <div className=" w_100">
                <i className="fas fa-envelope-open-text"></i>
                <span className="ml-1">Đăng kí nhận tin</span>
            </div>
            <div className="w_100">
                <Form className="d-flex align-items-center"> 
                    <Form.Group className="d-flex align-items-center w_80" style={{marginBottom:0}} controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Nhập email của bạn" />
                    </Form.Group>
                    <Button className="ml-2 w_20" variant="dark">
                        Đăng kí
                    </Button>
                </Form>
            </div>
            <div className="w_100">
                <i className="fas fa-phone "></i>
                <span> Hỗ trợ / Mua hàng: <span style={{color:'#ff0000'}}>097 328 58 86</span></span>
            </div>
        </div>
    )
}
