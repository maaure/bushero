import { FormSelect } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import { ContainerFormCadastrarViagem } from './styled';
import React, { useEffect, useState } from 'react';
import { IViagemForm } from '../../types/IViagemForm';
import { criarViagem } from '../../services/ViagemService';
import { listarCompainha } from '../../services/CompainhaService';
import { ISelect } from '../../types/ISelect';


export default function FormCadastrarViagem() {
    const [selectCompainha, setSelectCompainha] = useState<ISelect[]>([]);


    const [formValues, setFormValues] = useState<IViagemForm>({
        origem: "",
        destino: "",
        compainha: "",
        saida: "",
        duracao: "",
        classe: 0,
        valor: 0,
        assentos: 40,
    });

    const handleSubmit = (event: any) => {
        event.preventDefault();
        criarViagem(formValues).then(
            () => {
                console.log("Sucesso");
            }
        );
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormValues((prevState) => {
            return { ...prevState, [name]: value };
        });
    };

    function listarCompainhas() {
        listarCompainha().then(
            (res) => {
                setSelectCompainha(res.data);
            },
            (error) => {
                console.log(error)
            });
    }

    useEffect(listarCompainhas, [])

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

                <Form.Group className="mb-3" controlId="formBasicClasse">
                    <Form.Label>Compainha</Form.Label>
                    <FormSelect name="compainha" value={formValues.compainha} onChange={handleChange} placeholder='Informe a compainha' required>
                        <option value=""></option>
                        {
                            selectCompainha.map((s) => {
                                return (<option key={s.id} value={s.id}>{s.nome}</option>)
                            })
                        }
                    </FormSelect>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicHorarioDeSaída">
                    <Form.Label>Horário de Saída</Form.Label>
                    <Form.Control type="datetime-local" name="saida" value={formValues.saida} onChange={handleChange} placeholder="Informe horário de saída" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTempoDeViagem">
                    <Form.Label>Tempo de Viagem</Form.Label>
                    <Form.Control type="time" name="duracao" value={formValues.duracao} onChange={handleChange} placeholder="Informe o tempo de viagem" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicClasse">
                    <Form.Label>Classe</Form.Label>
                    <FormSelect name="classe" value={formValues.classe} onChange={handleChange} placeholder='Informe a classe' required>
                        <option value=""></option>
                        <option value="1">Tradicional</option>
                        <option value="2">Executiva</option>
                        <option value="3">Leito</option>
                    </FormSelect>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicValor">
                    <Form.Label>Valor</Form.Label>
                    <Form.Control type="number" name="valor" value={formValues.valor} onChange={handleChange} step="0.01" min="0" placeholder="R$ 0,00" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicValor">
                    <Form.Label>Total de Assentos</Form.Label>
                    <Form.Control type="text" name="assentos" value={formValues.assentos} onChange={handleChange} disabled />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </ContainerFormCadastrarViagem>
    );
}