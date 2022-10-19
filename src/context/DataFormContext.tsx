import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface DataFromApi {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
}

interface DataFormContextType {
    dataFromApi: DataFromApi | null;
    takeCepFromInput: (cep: string) => void;
}

export const DataFormContext = createContext({} as DataFormContextType);

interface DataFormProviderProps {
    children: ReactNode;
}

export function DataFormProvider({ children }: DataFormProviderProps) {
    const [cep, setCep] = useState('');
    const [dataFromApi, setDataFromApi] = useState<DataFromApi | null>(null);

    function takeCepFromInput(cep: string) {
        setCep(cep);
    }

    useEffect(() => {
        if (cep.length == 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => setDataFromApi(data))
        }

    }, [cep]);

    return (
        <DataFormContext.Provider value={{ dataFromApi, takeCepFromInput }}>
            {children}
        </DataFormContext.Provider>
    )
}