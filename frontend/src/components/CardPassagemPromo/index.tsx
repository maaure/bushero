import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import natal from "../../assets/Img/natal.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function CardPassagemPromo() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={natal} />
            <Card.Body>
                <Container>
                    <Row>
                        <Col>Natal-RN</Col>
                        <Col> -------- </Col>
                        <Col>Recife-PE</Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col> <Button variant="primary">Go somewhere</Button></Col>
                    </Row>
                </Container>

            </Card.Body>
        </Card>
    );
}
