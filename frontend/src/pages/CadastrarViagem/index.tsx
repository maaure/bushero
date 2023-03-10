import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import FormCadastrarViagem from "../../components/FormCadastrarViagem";
import { TituloFormH1 } from "./styled";

export default function CadastrarViagem() {


    return (
        <>
            <Container >
                <Row className="justify-content-center align-items-center" style={{ height: "80vh" }}>
                    <Col md="auto">
                        <TituloFormH1>CADASTRAR VIAGEM</TituloFormH1>
                        <FormCadastrarViagem />
                    </Col>
                </Row>
            </Container>
        </>
    )
}