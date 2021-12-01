import React from 'react'
import ContactFooter from './item/ContactFooter'
import InforFooter from './item/InforFooter'
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
            <div className="infor">
                <Container>
                    <InforFooter/>
                </Container>
            </div>
            <hr />
            <div className="copyright">
                Copyright © 2021 VuLuu-HaUi
            </div>
        </div>
    )
}
