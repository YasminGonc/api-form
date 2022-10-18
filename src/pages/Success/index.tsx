import { InfoContainer, SuccessContainer } from "./style";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Success() {
    return(
        <SuccessContainer>
            <h2>Pedido confirmado!</h2>
            <InfoContainer>
                <MapPin size={24} />
                <div>
                    <p>Entrega em Rua J-58, 0</p>
                    <p>Setor Jaó - Goiânia, GO</p>
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
                    <p>Cartão de Crédito</p>
                </div>
            </InfoContainer>

        </SuccessContainer>
    )
}