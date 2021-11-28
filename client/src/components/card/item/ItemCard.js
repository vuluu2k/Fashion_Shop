import React from 'react'
import {Card} from 'react-bootstrap'
import './Style.css'
export default function ItemCard() {
    return (
        <div>
            <Card border="light" style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://360boutique.vn/wp-content/uploads/2021/10/CARCN201-15-400x600.jpg" />
                <Card.Body>
                    <Card.Title>Áo len nam CARCN201</Card.Title>
                    <Card.Text className="cost">
                            580.000<sup>₫</sup>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
