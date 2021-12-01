import React from 'react'
import NewsCardItem from './item/NewsCardItem'
import {Row, Col} from 'react-bootstrap'

export default function NewsCardContainer() {
    return (
        <div  className="container mt-4">
            <h2><center style={{margin:'30px 0'}}>TIN TỨC</center></h2>
            <Row>
                <Col sm={6} md={4}><NewsCardItem/></Col>
                <Col sm={6} md={4}><NewsCardItem/></Col>
                <Col sm={6} md={4}><NewsCardItem/></Col>
            </Row>
        </div>
    )
}
