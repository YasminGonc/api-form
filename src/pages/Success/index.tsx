import { InfoContainer, SuccessContainer } from './style'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { DataFormContext } from '../../context/DataFormContext'
import { useContext } from 'react'

export function Success() {
  const { deliveryData } = useContext(DataFormContext)
  return (
    <SuccessContainer>
      <h2>Pedido confirmado!</h2>
      <InfoContainer>
        <MapPin size={24} />
        <div>
          <p>
            Entrega em {deliveryData?.rua}, {deliveryData?.numero}
          </p>
          <p>
            {deliveryData?.bairro} - {deliveryData?.cidade}, {deliveryData?.uf}
          </p>
        </div>
      </InfoContainer>
      <InfoContainer>
        <Timer size={24} />
        <div>
          <p>Previsão de entrega</p>
          <p>7 dias</p>
        </div>
      </InfoContainer>
      <InfoContainer>
        <CurrencyDollar size={24} />
        <div>
          <p>Pagamento</p>
          {deliveryData?.pagamento === 'credit' && <p>Cartão de Crédito</p>}
          {deliveryData?.pagamento === 'debit' && <p>Cartão de Débito</p>}
          {deliveryData?.pagamento === 'cash' && <p>Dinheiro</p>}
        </div>
      </InfoContainer>
    </SuccessContainer>
  )
}
