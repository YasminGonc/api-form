import { createContext, ReactNode, useEffect, useState } from 'react'

interface DataFromApi {
  logradouro: string
  bairro: string
  localidade: string
  uf: string
}

interface FormData {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
  pagamento: string
}

interface DataFormContextType {
  dataFromApi: DataFromApi | null
  dataFromApiFailed: string
  deliveryData: FormData | null
  takeCepFromInput: (cep: string) => void
  createDeliveryData: (data: FormData) => void
}

export const DataFormContext = createContext({} as DataFormContextType)

interface DataFormProviderProps {
  children: ReactNode
}

export function DataFormProvider({ children }: DataFormProviderProps) {
  const [cep, setCep] = useState('')
  const [dataFromApi, setDataFromApi] = useState<DataFromApi | null>(null)
  const [dataFromApiFailed, setDataFromApiFailed] = useState('')
  const [deliveryData, setDeliveryData] = useState<FormData | null>(null)

  function takeCepFromInput(cep: string) {
    setCep(cep)
  }

  function createDeliveryData(data: FormData) {
    setDeliveryData(data)
  }

  useEffect(() => {
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (data.erro) {
            setDataFromApiFailed('CEP não encontrado. Digite um CEP válido')
          } else {
            setDataFromApi(data)
            setDataFromApiFailed('')
          }
        })
    }
  }, [cep])

  return (
    <DataFormContext.Provider
      value={{
        dataFromApi,
        dataFromApiFailed,
        deliveryData,
        takeCepFromInput,
        createDeliveryData,
      }}
    >
      {children}
    </DataFormContext.Provider>
  )
}
