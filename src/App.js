import './App.css';
import HeaderNavigation from "./components/HeaderNavigation";
import LeftNav from "./components/LeftNav";
import Content from "./components/Content";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">
        <HeaderNavigation/>
            <Container>
                <Row className='mt-3'>
                    <Col xs lg="2" className='nav-background'><LeftNav/></Col>
                    <Col><Content/></Col>
                </Row>
            </Container>
    </div>
  );
}

export default App;
