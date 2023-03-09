import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import FormCadastrarViagem from "../../components/FormCadastrarViagem";

export default function CadastrarViagem(){


    return(
        <>
            <Container >
                <Row className="justify-content-center align-items-center"  style={{height:"80vh"}}>
                    <Col md="auto">
                <p className="h1">Cadastar Viagem</p>
                        <FormCadastrarViagem />
                    </Col>
                </Row>
            </Container>
        </>
    )
}