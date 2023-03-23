import { useEffect, useState } from 'react';
import { FormSelect, Form, Button } from 'react-bootstrap';
import { ContainerFormCadastrarViagem } from './styled';
import { criarViagem } from '../../services/ViagemService';
import { listarCompanhia } from '../../services/CompanhiaService';
import { ISelect } from '../../types/ISelect';
import { buscarMunicipios } from '../../services/MunicipiosService';
import { parseToOption } from '../../utils';
import { IMunicipio } from '../../types/IMunicipio';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { ToastContainer } from 'react-toastify';

export interface IViagemForm {
    id?: number,
    origem: number,
    destino: number,
    companhia: number,
    horario_saida: string,
    duracao: string,
    classe: number,
    valor: number,
    assentos: number,
}



export default function FormCadastrarViagem() {
    const [selectCompanhia, setSelectCompanhia] = useState<ISelect[]>([]);
    const [origemOptions, setOrigemOptions] = useState<ISelect[]>([]);

    const [formValues, setFormValues] = useState<IViagemForm>({
        origem: 0,
        destino: 0,
        companhia: 0,
        horario_saida: "",
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
            ({ data } : any) => {
                let k = data.map(({ id, nome }: any) => {
                    return {
                        id,
                        text: nome
                    }
                });
                setSelectCompanhia(k);
            },
            (error) => {
                console.log(error)
            });
    }
    
    useEffect(listarCompanhias, [])
    
    const handleSearch = (query: string) => {
        buscarMunicipios(query)
            .then((res) => res.data)
            .then((data) => {
                let opt: ISelect[] = []
                data.map((d: IMunicipio) => opt.push(parseToOption(d.id, `${d.nome} - ${d.uf}`)));
                setOrigemOptions(opt)
            });

    };

    function setOrigem(e: any) {
        formValues.origem = e.id
        setFormValues(formValues);
    }

    function setDestino(e: any) {
        formValues.destino = e.id
        setFormValues(formValues);
    }

    return (
        <ContainerFormCadastrarViagem>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicOrigem">
                    <Form.Label>Origem</Form.Label>
                    <AsyncTypeahead
                        id="origem"
                        isLoading={false}
                        labelKey="text"
                        minLength={2}
                        onSearch={handleSearch}
                        options={origemOptions}
                        onChange={(s: any) => setOrigem(s[0])}
                        placeholder="Informe local de origem"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDestino">
                    <Form.Label>Destino</Form.Label>
                    <AsyncTypeahead
                        id="destino"
                        isLoading={false}
                        labelKey="text"
                        minLength={2}
                        onSearch={handleSearch}
                        options={origemOptions}
                        onChange={(s: any) => setDestino(s[0])}
                        placeholder="Informe local de destino"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicClasse">
                    <Form.Label>Companhia</Form.Label>
                    <FormSelect name="companhia" value={formValues.companhia} onChange={handleChange} placeholder='Informe a companhia' required>
                        <option value="0">Selecione uma companhia</option>
                        {
                            selectCompanhia.map((s) => {
                                return (<option key={s.id} value={s.id}>{s.text}</option>)
                            })
                        }
                    </FormSelect>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicHorarioDeSaída">
                    <Form.Label>Horário de Saída</Form.Label>
                    <Form.Control type="datetime-local" name="horario_saida" value={formValues.horario_saida} onChange={handleChange} placeholder="Informe horário de saída" required />
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
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </ContainerFormCadastrarViagem>
    );
}