import React from 'react'
import {Form,Button} from 'react-bootstrap'
import './Style.css'
export default function ContactFooter() {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div>
                <i className="fas fa-envelope-open-text"></i>
                <span className="ml-1">Đăng kí nhận tin</span>
            </div>
            <div>
                <Form className="d-flex"> 
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Nhập email của bạn" />
                    </Form.Group>
                    <Button className="ml-2" variant="dark" type="submit">
                        Đăng kí
                    </Button>
                </Form>
            </div>
            <div>
                <i className="fas fa-phone "></i>
                <span> Hỗ trợ / Mua hàng: <span style={{color:'#ff0000'}}>097 328 58 86</span></span>
            </div>
        </div>
    )
}
