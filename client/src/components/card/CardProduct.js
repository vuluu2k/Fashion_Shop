import React from 'react'
import {Card} from 'react-bootstrap'
export default function CardProduct() {
    return (
        <div>
            <Card border="light" style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://360boutique.vn/wp-content/uploads/2021/11/AHHTK205-8-400x600.jpg" />
                <Card.Body>
                    <Card.Title>Áo hoodie nam AHHTK205</Card.Title>
                    <Card.Text style={{color:'red',textAlign:'center',fontWeight:'bold'}}>
                        480.000 <sup>₫</sup>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
