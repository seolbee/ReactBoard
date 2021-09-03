import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Card, Button, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Container>
          <Card className="mt-5">
            <Card.Header as="h3">게시판</Card.Header>
            <Card.Body>
              <Card.Title>D.C 루리웹 같은 게시판을 기대하셨다면 돌아가시기를</Card.Title>
              <Card.Text>이곳은 아무거나 싸지르는 게시판입니다.</Card.Text>
              <LinkContainer to="/writer"><Button variant="primary">게시판 글쓰러 가기</Button></LinkContainer>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default App;
