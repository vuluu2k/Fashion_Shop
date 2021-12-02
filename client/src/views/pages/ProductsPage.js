import React from 'react'
import './css/Style.css'
import CardProduct from '../../components/card/CardProduct'
import {Row,Col} from 'react-bootstrap'
export default function ProductsPage() {
    return (
        <div>
            <div className="container product_container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="title_product">Sản phẩm quần áo nam thời trang nam mới nhất</div>
                    <div>
                        <select name="" id="select_product">
                            <option value="">Thứ tự mặc định</option>
                            <option value="">Phổ biến nhất</option>
                            <option value="">Mới nhất</option>
                            <option value="">Giá từ thấp tới cao</option>
                            <option value="">Giá từ cao tới thấp</option>
                        </select>
                    </div>
                </div>
                <div className="product">
                    <Row>
                        <Col sm={6} lg={3}><CardProduct/></Col>
                        <Col sm={6} lg={3}><CardProduct/></Col>
                        <Col sm={6} lg={3}><CardProduct/></Col>
                        <Col sm={6} lg={3}><CardProduct/></Col>
                        <Col sm={6} lg={3}><CardProduct/></Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
