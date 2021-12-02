import React from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand to="/" as={Link}>
                    <img src="https://360boutique.vn/wp-content/uploads/2021/10/LOGO-360-DUNG-TAM-THOI-MAU-DEN-05.png" alt="" width="60" height="50" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link to="/" as={Link}>Trang chủ</Nav.Link>
                        <Nav.Link to="/product" as={Link}>Sản phẩm</Nav.Link>
                        <NavDropdown title="Danh mục" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                        <Form className="d-flex">
                            <FormControl type="text" placeholder="Tìm kiếm sản phẩm..." className="mr-sm-2" />
                            <Button variant="outline-success">
                                <i className="fas fa-search"></i>
                            </Button>
                        </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
