import { DeliveryFormContainer, InputsContainer, InputWrapperBairro, InputWrapperCep, InputWrapperCidade, InputWrapperComplemento, InputWrapperNumero, InputWrapperRua, InputWrapperUf, TitleContainer } from "./styles";

export function DeliveryForm() {
    return (
        <DeliveryFormContainer>
            <TitleContainer>
                <h2>Endereço de entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
            </TitleContainer>
            
            <InputsContainer>
                <InputWrapperCep>
                    <label htmlFor="cep">CEP</label>
                    <input type="text" id="cep" placeholder="CEP" />
                    <span>CEP não encontrado</span>
                </InputWrapperCep>
                <InputWrapperRua>
                    <label htmlFor="rua">Rua</label>
                    <input type="text" id="rua" placeholder="Rua" />
                </InputWrapperRua>
                <InputWrapperNumero>
                    <label htmlFor="numero">Número</label>
                    <input type="text" id="numero" placeholder="Número" />
                </InputWrapperNumero>
                <InputWrapperComplemento>
                    <label htmlFor="complemento">Complemento</label>
                    <input type="text" id="complemento" placeholder="Complemento" />
                </InputWrapperComplemento>
                <InputWrapperBairro>
                    <label htmlFor="bairro">Bairro</label>
                    <input type="text" id="bairro" placeholder="Bairro" />
                </InputWrapperBairro>
                <InputWrapperCidade>
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text" id="cidade" placeholder="Cidade" />
                </InputWrapperCidade>
                <InputWrapperUf>
                    <label htmlFor="uf">UF</label>
                    <input type="text" id="uf" placeholder="UF" />
                </InputWrapperUf>
            </InputsContainer>
        </DeliveryFormContainer>
    )
}