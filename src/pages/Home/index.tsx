import { HomeContainer } from './style'

import { DeliveryForm } from './components/DeliveryForm'
import { PaymentForm } from './components/PaymentForm'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from 'react'
import { DataFormContext } from '../../context/DataFormContext'
import { useNavigate } from 'react-router-dom'

const newAdressFormSchema = zod.object({
  cep: zod
    .string()
    .regex(/^[0-9]{5}\-?[0-9]{3}$/, 'Preencha um CEP válido Ex.: 03064-000'),
  rua: zod.string(),
  numero: zod
    .string()
    .regex(/^[0-9]/, 'Informe um número válido')
    .min(1, 'Informe o número'),
  complemento: zod.string().optional(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string(),
  pagamento: zod.enum(['credit', 'debit', 'cash']),
})

type newAdreesFormInputs = zod.infer<typeof newAdressFormSchema>

export function Home() {
  const newAdressForm = useForm<newAdreesFormInputs>({
    resolver: zodResolver(newAdressFormSchema),
    mode: 'onBlur',
  })

  const { handleSubmit } = newAdressForm

  const { createDeliveryData } = useContext(DataFormContext)

  const navigate = useNavigate()

  function handleCreateNewAdress(data: newAdreesFormInputs) {
    createDeliveryData(data)
    navigate('/success')
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewAdress)}>
        <FormProvider {...newAdressForm}>
          <DeliveryForm />
          <PaymentForm />
        </FormProvider>

        <button type="submit">Confirmar pedido</button>
      </form>
    </HomeContainer>
  )
}
