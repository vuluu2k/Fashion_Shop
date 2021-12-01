import React from 'react'
import Carousel from '../../components/carousel/CarouselCustom'
import CardContainer from '../../components/card/CardContainer'
import NewsCardContainer from '../../components/card/NewsCardContainer'

export default function HomePage() {
    const btn=document.querySelector('button[aria-label="team1"]')
    console.log(btn)
    return (
        <div>
            <div className="carousel_home">
                <Carousel/>
            </div>
            <div className="product_hot">
                <CardContainer title="SẢN PHẨM BÁN CHẠY"/>
            </div>
            <div className="product_new">
                <CardContainer title="HÀNG MỚI VỀ"/>
            </div>
            <div className="news">
                <NewsCardContainer/>
            </div>
        </div>
    )
}
