import React from 'react';
import {Form, Button, Container} from 'react-bootstrap';

class Login extends React.Component{
    render(){
        return (
            <Container className="pt-5">
                <h1>로그인</h1>
                <Form className="pt-2">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control type="email" placeholder="이메일을 입력하세요" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
                    </Form.Group>
                    <Button variant="primary" type="submit">로그인</Button>
                </Form>
            </Container>
        );
    }
}

export default Login;