import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class Header extends React.Component {
    render(){
        return (
            <Navbar bg="light" expends="lg" variant="light">
                <LinkContainer to="/" className="ms-5"><Navbar.Brand>Logo</Navbar.Brand></LinkContainer>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/"><Nav.Link>메인</Nav.Link></LinkContainer>
                        <LinkContainer to="/list"><Nav.Link>글보기</Nav.Link></LinkContainer>
                        <LinkContainer to="/writer"><Nav.Link>글쓰기</Nav.Link></LinkContainer>
                        <Nav.Link>문의하기</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="d-flex justify-content-end">
                    <Nav>
                        <LinkContainer to="/login"><Nav.Link>로그인</Nav.Link></LinkContainer>
                        <LinkContainer to="/regist"><Nav.Link>회원가입</Nav.Link></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;