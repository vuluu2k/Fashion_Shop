import React from 'react'
import ContactFooter from './item/ContactFooter'
import { Container } from 'react-bootstrap'
import './Style.css'
export default function Footer() {
    return (
        <div>
            <div className="contact">
                <Container>
                    <ContactFooter/>
                </Container>
            </div>
        </div>
    )
}
