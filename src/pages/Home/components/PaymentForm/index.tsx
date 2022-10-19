import { Item, PaymentFormContainer, Root, TitleContainer } from "./style";
import { Bank, CreditCard, CurrencyDollar } from "phosphor-react";
import { Controller, useFormContext } from "react-hook-form";

export function PaymentForm() {
    const { control } = useFormContext();
    return (
        <PaymentFormContainer>
            <TitleContainer>
                <h2>Pagamento</h2>
                <p>Escolha a forma que deseja pagar</p>
            </TitleContainer>

            <Controller
                control={control}
                name='pagamento'
                render={({ field }) => {
                    return (
                        <Root onValueChange={field.onChange} value={field.value}>
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
                    )
                }}
            />


        </PaymentFormContainer>
    )
}