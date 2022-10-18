import { DeliveryFormContainer, InputsContainer, InputWrapper, TitleContainer } from "./styles";

export function DeliveryForm() {
    return (
        <DeliveryFormContainer>
            <TitleContainer>
                <h2>Endereço de entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
            </TitleContainer>
            <InputsContainer>
                <InputWrapper>
                    <label htmlFor="cep">CEP</label>
                    <input type="text" id="cep" placeholder="CEP" />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="rua">Rua</label>
                    <input type="text" id="rua" />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="numero">Número</label>
                    <input type="text" id="numero" />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="complemento">Complemento</label>
                    <input type="text" id="complemento" />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="bairro">Bairro</label>
                    <input type="text" id="bairro" />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text" id="cidade" />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="uf">UF</label>
                    <input type="text" id="uf" />
                </InputWrapper>
            </InputsContainer>
        </DeliveryFormContainer>
    )
}