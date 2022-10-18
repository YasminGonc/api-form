import { Item, PaymentFormContainer, Root, TitleContainer } from "./style";
import { Bank, CreditCard, CurrencyDollar } from "phosphor-react";

export function PaymentForm() {
    return (
        <PaymentFormContainer>
            <TitleContainer>
                <h2>Pagamento</h2>
                <p>Escolha a forma que deseja pagar</p>
            </TitleContainer>

            <Root>
                <Item value="credit">
                    <CreditCard size={20} />
                    Cartão de crédito
                </Item>
                <Item value="debit">
                    <Bank size={20} />
                    Cartão de Débito
                </Item>
                <Item value="cash">
                    <CurrencyDollar size={20} />
                    Dinheiro
                </Item>

            </Root>
        </PaymentFormContainer>
    )
}