import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import natal from "../../assets/Img/natal.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardStyle } from './styled';



export default function CardPassagemPromo() {
    return (
        <CardStyle>
            <Card>
                <Card.Img variant="top" src={natal} />
                <Card.Body>
                    <Container>
                        <Row>
                            <Col>Natal-RN</Col>
                            <Col> -------- </Col>
                            <Col>Recife-PE</Col>
                        </Row>
                        <Row>
                            <Col>hora</Col>
                            <Col> <Button variant="primary">a partir de
R$ 120,00</Button></Col>
                        </Row>
                    </Container>

                </Card.Body>
            </Card>
        </CardStyle>
    );
}
