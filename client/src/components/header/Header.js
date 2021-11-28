import React from 'react'
import NavBar from '../navbar/NavBar'
import './Style.css'
export default function Header() {
    return (
        <div>
            <div className="title_header">
                <center>
                    Hotline Mua Hàng: 0973 285 886 | Hotline CSKH: 1900 886 803 - Ext 1 | Email CSKH: web@360boutique.vn
                </center>
            </div>
            <div>
                <NavBar/>
            </div>
        </div>
    )
}
