import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import FormCadastrarCompanhia from "../../components/FormCadastrarCompanhia";
import { TituloFormH1 } from "../CadastrarViagem/styled";

export default function CadastrarCompanhia() {


    return (
        <>
            <Container >
                <Row className="justify-content-center align-items-center" style={{ height: "80vh" }}>
                    <Col md="auto">
                        <TituloFormH1>CADASTRAR COMPANHIA</TituloFormH1>
                        <FormCadastrarCompanhia />
                    </Col>
                </Row>
            </Container>
        </>
    )
}