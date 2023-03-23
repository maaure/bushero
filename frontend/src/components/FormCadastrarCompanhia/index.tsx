import { Form, Button } from 'react-bootstrap';
import { ContainerFormCadastrarViagem } from './styled';
import React, { useState } from 'react';
import { criarCompanhia } from '../../services/CompanhiaService';
import { ICompanhia } from '../../types/ICompanhia';


export default function FormCadastrarCompanhia() {

    const [formCompanhiaValues, setFormCompanhiaValues] = useState<ICompanhia>({
        nome: "",
        endereco: "",
        contato: "",
    });

    const handleSubmit = (event: any) => {
        event.preventDefault();
        criarCompanhia(formCompanhiaValues).then(
            () => {
                console.log(formCompanhiaValues);
                console.log("Sucesso");
            }
        );
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormCompanhiaValues((prevState) => {
            return { ...prevState, [name]: value };
        });
    };

    return (
        <ContainerFormCadastrarViagem>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicOrigem">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" name="nome" value={formCompanhiaValues.nome} onChange={handleChange} placeholder="Informe o nome da companhia" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDestino">
                    <Form.Label>Endereco</Form.Label>
                    <Form.Control type="text" name="endereco" value={formCompanhiaValues.endereco} onChange={handleChange} placeholder="Informe o endereço" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicHorarioDeSaída">
                    <Form.Label>Contato</Form.Label>
                    <Form.Control type="tel" name="contato" value={formCompanhiaValues.contato} onChange={handleChange} placeholder="(00) 9999-8888" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </ContainerFormCadastrarViagem>
    );
}