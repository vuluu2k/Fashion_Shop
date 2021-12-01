import React from 'react'
import {Row,Col} from 'react-bootstrap'
import './Style.css'
export default function InforFooter() {
    return (
        <Row>
            <Col sm={6} lg={3}>
                <div className="title_infor_footer"><center>Hệ thống cửa hàng</center></div>
                <div>242 Thái Hà, Q.Đống Đa, HN</div>
                <div>242 Thái Hà, Q.Đống Đa, HN</div>
                <div>11 Dương Quảng Hàm, Q.Cầu Giấy, HN</div>
                <div>63 Đại Cổ Việt, Q.Hai Bà Trưng, HN</div>
                <div>27 Chùa Bộc, Q.Đống Đa, HN</div>
                <div>296 Nguyễn Trãi, Q.Nam Từ Liêm, HN</div>
                <div>116 Hồ Tùng Mậu,Q.Cầu Giấy, HN</div>
                <div>37 Trung Kính, Q.Cầu Giấy, HN</div>
                <div>346 Cầu Giấy, Q.Cầu Giấy, HN</div>
                <div>272 Tô Hiệu, Q.Lê Chân, HP</div>
                <div>252 Hồ Tùng Mậu, Q.Bắc Từ Liêm, 360Kids</div>
            </Col>
            <Col sm={6} lg={3}>
                <div className="title_infor_footer"><center>CHÍNH SÁCH VÀ QUY ĐỊNH CHUNG</center></div>
                <a href="#">
                    <div>
                        Hướng Dẫn Mua Hàng
                    </div>
                </a>
                <a href="#">
                    <div>
                        Hình Thức Thanh Toán
                    </div>
                </a>
                <a href="#">
                    <div>
                        Quy Định Về Bảo Mật Thông Tin
                    </div>
                </a>
                <a href="#">
                    <div>
                        Chính Sách Bảo Hành
                    </div>
                </a>
                <a href="#">
                    <div>
                        Chính Sách Đổi Trả Hàng
                    </div>
                </a>
                <a href="#">
                    <div>
                        Chính Sách Vận Chuyển
                    </div>
                </a>
                <a href="#">
                    <div>
                        Điều Khoản Dịch Vụ
                    </div>
                </a>
                <a href="#">
                    <div>
                        Giới Thiệu
                    </div>
                </a>
            </Col>
            <Col sm={6} lg={3}>
                <div className="title_infor_footer"><center>ĐỊA CHỈ</center></div>
                <div style={{fontWeight:'bold'}} >CÔNG TY CỔ PHẦN THỜI TRANG 360</div>
                <div>
                    Facebook thời trang nam: <span><a href="">360Boutique</a></span>
                    <br />
                    Facebook kids: <span><a href="">360Kids</a></span>
                    <br />
                    Điện thoại: <span><a href="tel:0898709170">0898709170</a></span>
                    <br />
                    Hotline:  <span><a href="tel:0898709170">0898709170</a></span>
                    <br />
                    Email: <span><a href="mailTo:vuluu0403@gmail.com">vuluu0403@gmail.com</a></span>
                    <br />
                    Website:  <span><a href=" https://360boutique.vn/"> https://360boutique.vn/</a></span>
                    <div>GPKD: 0107756568</div>
                    <img src="https://360boutique.vn/wp-content/uploads/2019/04/da-thong-bao.png" width="200"alt="" />
                </div>
            </Col>
            <Col sm={6} lg={3}>
                <div className="title_infor_footer"><center>Fanpage</center></div>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100072719225180&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style={{border:'none',overflow:'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </Col>
        </Row>
    )
}
