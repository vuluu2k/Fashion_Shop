import React from 'react'
import ItemCard from './item/ItemCard'
import {Row,Col} from 'react-bootstrap'
export default function CardContainer(props) {
    return (
        <div className="container">
            <h2 style={{margin:'30px 0'}}><center>{props.title}</center></h2>
            <Row>
                <Col sm={6} md={3} ><ItemCard/></Col>
                <Col sm={6} md={3} ><ItemCard/></Col>
                <Col sm={6} md={3} ><ItemCard/></Col>
                <Col sm={6} md={3} ><ItemCard/></Col>
                <Col sm={6} md={3} ><ItemCard/></Col>
                <Col sm={6} md={3} ><ItemCard/></Col>
                <Col sm={6} md={3} ><ItemCard/></Col>
                <Col sm={6} md={3} ><ItemCard/></Col>
                <Col sm={6} md={3} ><ItemCard/></Col>
            </Row>
        </div>
    )
}
