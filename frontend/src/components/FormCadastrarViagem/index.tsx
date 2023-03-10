import { FormSelect } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ContainerFormCadastrarViagem } from './styled';
import React, { useState } from 'react';

export default function FormCadastrarViagem() {

    const [formValues, setFormValues] = useState({
        origem: "",
        destino: "",
        saida: "",
        duracao: "",
        classe: "",
        valor: "",
        assentos: "40",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevState) => {
          return { ...prevState, [name]: value };
        });
      };

    return (
        <ContainerFormCadastrarViagem>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicOrigem">
                    <Form.Label>Origem</Form.Label>
                    <Form.Control type="text" name="origem" value={formValues.origem} onChange={handleChange} placeholder="Informe local de origem" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDestino">
                    <Form.Label>Destino</Form.Label>
                    <Form.Control type="text" name="destino" value={formValues.destino} onChange={handleChange} placeholder="Informe local de Destino" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicHorarioDeSaída">
                    <Form.Label>Horário de Saída</Form.Label>
                    <Form.Control type="time" name="saida" value={formValues.saida} onChange={handleChange} placeholder="Informe horário de saída" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTempoDeViagem">
                    <Form.Label>Tempo de Viagem</Form.Label>
                    <Form.Control type="time" name="duracao" value={formValues.duracao} onChange={handleChange} placeholder="Informe o tempo de viagem" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicClasse">
                    <Form.Label>Classe</Form.Label>
                    <FormSelect name="classe" value={formValues.classe} onChange={handleChange} placeholder='Informe a classe' required>
                        <option value=""></option>
                        <option value="econômica">Econômica</option>
                        <option value="Executiva">Executiva</option>
                    </FormSelect>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicValor">
                    <Form.Label>Valor</Form.Label>
                    <Form.Control type="number" name="valor" value={formValues.valor} onChange={handleChange} step="0.01" min="0" placeholder="R$ 0,00" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicValor">
                    <Form.Label>Total de Assentos</Form.Label>
                    <Form.Control type="text" name="assentos" value={formValues.assentos} onChange={handleChange} disabled="true" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </ContainerFormCadastrarViagem>
    );
}