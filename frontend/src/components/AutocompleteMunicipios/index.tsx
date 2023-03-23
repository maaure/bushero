import { useState } from "react";
import { buscarMunicipios } from "../../services/MunicipiosService";
import { IMunicipio } from "../../types/IMunicipio";
import { ISelect } from "../../types/ISelect";
import { IViagemForm } from "../../types/IViagemForm";
import { parseToOption } from "../../utils";
import { AsyncTypeahead } from "react-bootstrap-typeahead"

interface AutocompleteProps {
    id: string,
    value: number,
}


export default function AutocompleteMunicipios({id, value} : AutocompleteProps) {
    const [origemOptions, setOrigemOptions] = useState<ISelect[]>([]);

    const handleSearch = (query: string) => {
        buscarMunicipios(query)
            .then(({ data } : any) => {
                let opt: ISelect[] = []
                data.map((d: IMunicipio) => opt.push(parseToOption(d.id, `${d.nome} - ${d.uf}`)));
                setOrigemOptions(opt)
            });
    };

    function setLocalizacao(e: any) {

    }


    return (
        <AsyncTypeahead
            id={id}
            isLoading={false}
            labelKey="text"
            minLength={3}
            onSearch={handleSearch}
            options={origemOptions}
            onChange={(s: any) => setOrigem(s[0])}
            placeholder="Informe local de origem"
        />
    )
}