import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';

class Regist extends React.Component{
    render(){
        return (
            <Container className="pt-5">
                <h1>회원가입</h1>
                <Form className="pt-2">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control type="email" placeholder="이메일을 입력하세요" />
                        <Form.Text>이메일은 양영디지털고등학교 계정 이메일을 쓰세요.</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicId">
                        <Form.Label>아이디</Form.Label>
                        <Form.Control type="text" placeholder="아이디를 입력하세요"></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>이름</Form.Label>
                        <Form.Control type="text" placeholder="이름을 입력하세요"></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>비밀번호 확인</Form.Label>
                        <Form.Control type="password" placeholder="비밀번호를 한 번 더 입력하세요"></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">회원가입</Button>
                </Form>
            </Container>
        );
    }
}

export default Regist;