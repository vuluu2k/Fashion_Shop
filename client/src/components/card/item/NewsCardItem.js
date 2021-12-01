import React from "react";
import {Card} from 'react-bootstrap'

export default function NewsCardItem() {
  return (
    <div>
      <Card border="light" style={{ width: "100%" }}>
        <Card.Img variant="top" src="https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2021/11/40cfed33ec5e27007e4f-scaled.jpg&w=400&h=250&zc=1&q=90" />
        <Card.Body>
          <Card.Text>
            <center style={{opacity:'0.6', fontWeight:'600'}}>23/11/2021</center>
          </Card.Text>
          <Card.Title>
            <center>BLACK FRIDAY – SALE SẬP SÀN HÀNG...</center>
          </Card.Title>
          <Card.Text>
            <div style={{backgroundColor:'orange', width:'30%', height:'2px', margin:'auto'}}></div>
          </Card.Text>
          <Card.Text>
            <center>
              Cơ hội mua sắm không cần nhìn giá có 1-0-2 đã chính thức bắt đầu.
              Hàng ngàn sản phẩm với mức...
            </center>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
