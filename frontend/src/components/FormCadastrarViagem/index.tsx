import { FormSelect } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import { ContainerFormCadastrarViagem } from './styled';
import React, { useEffect, useState } from 'react';
import { IViagemForm } from '../../types/IViagemForm';
import { criarViagem } from '../../services/ViagemService';
import { ISelect } from '../../types/ISelect';
import { listarCompanhia } from '../../services/CompanhiaService';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { buscarMunicipios } from '../../services/MunicipiosService';
import { parseToOption } from '../../utils';
import { IMunicipio } from '../../types/IMunicipio';
import { Option } from 'react-bootstrap-typeahead/types/types';


export default function FormCadastrarViagem() {
    const [selectCompanhia, setSelectCompanhia] = useState<ISelect[]>([]);
    const [origemOptions, setOrigemOptions] = useState<ISelect[]>([]);


    const [formValues, setFormValues] = useState<IViagemForm>({
        origem: 0,
        destino: 0,
        companhia: "",
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

    function listarCompanhias() {
        listarCompanhia().then(
            (res) => {
                setSelectCompanhia(res.data);
            },
            (error) => {
                console.log(error)
            });
    }

    const handleSearch = (query: string) => {
        buscarMunicipios(query)
            .then((res) => res.data)
            .then((data) => {
                let opt: ISelect[] = []
                data.map((d: IMunicipio) => opt.push(parseToOption(d.id, `${d.nome} - ${d.uf}`)));
                setOrigemOptions(opt)
            });

    };

    const setOrigemValue = (id: number) => {
        setFormValues((prevState) => {
            return { ...prevState, ["origem"]: id };
        });
    }

    const setDestinoValue = (o : Option) => {
        console.log(o)
    }


    useEffect(listarCompanhias, [])

    return (
        <ContainerFormCadastrarViagem>
            <Form onSubmit={handleSubmit}>
                {/*                 <Form.Group className="mb-3" controlId="formBasicOrigem">
                    <Form.Label>Origem</Form.Label>
                    <Form.Control type="text" name="origem" value={formValues.origem} onChange={handleChange} placeholder="Informe local de origem" required />
                </Form.Group>
*/}
                <Form.Group className="mb-3" controlId="formBasicOrigem">
                    <Form.Label>Origem</Form.Label>
                    <AsyncTypeahead
                        id="cidade-origem"
                        isLoading={false}
                        labelKey="text"
                        minLength={3}
                        onSearch={handleSearch}
                        options={origemOptions}
                        onChange={(v) => console.log(v)}
                        placeholder="Informe local de Origem"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDestino">
                    <Form.Label>Destino</Form.Label>
                    <AsyncTypeahead
                        id="cidade-destino"
                        isLoading={false}
                        labelKey="text"
                        minLength={3}
                        onSearch={handleSearch}
                        options={origemOptions}
                        onChange={(v) => setDestinoValue(v[0])}
                        placeholder="Informe local de Destino"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicClasse">
                    <Form.Label>Companhia</Form.Label>
                    <FormSelect name="companhia" value={formValues.companhia} onChange={handleChange} placeholder='Informe a companhia' required>
                        <option value=""></option>
                        {
                            selectCompanhia.map((s) => {
                                return (<option key={s.id} value={s.id}>{s.text}</option>)
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