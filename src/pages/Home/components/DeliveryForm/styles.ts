import styled from "styled-components";

export const DeliveryFormContainer = styled.section`
    background-color: ${props => props.theme["blue-200"]};
    border-radius: 16px;
    padding: 2.625rem 2rem;
    
`
export const TitleContainer = styled.div`
    h2 {
        color: ${props => props.theme.pink};
        font-size: 1.5rem;
        font-weight: 400;
    }
`
export const InputsContainer = styled.div`
    margin-top: 2rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 3rem;
    grid-template-areas: 
        'cep . .'
        'rua rua rua'
        'numero complemento complemento'
        'bairro cidade uf'
    ;
`
const InputWrapper = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    border: 0;
    color: ${props => props.theme.placeholder};
    font-size: 0.875rem;

    input {
        background-color: ${props => props.theme["blue-100"]};
        border: 0;
        border-radius: 6px;
        color: ${props => props.theme.text};

        padding: 0.75rem;

        &::placeholder {
            color: ${props => props.theme.placeholder};
            font-size: 0.875rem;
        }

        &:focus {
            outline: 0;
        }

        &:disabled {
            opacity: 0.6;
        }
    }

    span {
        color: ${props => props.theme.warning};
        font-size: 0.75rem;
    }
`
export const InputWrapperCep = styled(InputWrapper)`
    grid-area: cep;
`
export const InputWrapperRua = styled(InputWrapper)`
    grid-area: rua;
`
export const InputWrapperNumero = styled(InputWrapper)`
    grid-area: numero;
`
export const InputWrapperComplemento = styled(InputWrapper)`
    grid-area: complemento;
`
export const InputWrapperBairro = styled(InputWrapper)`
    grid-area: bairro;
`
export const InputWrapperCidade = styled(InputWrapper)`
    grid-area: cidade;
`
export const InputWrapperUf = styled(InputWrapper)`
    grid-area: uf;

    input {
        width: 3rem;
    }
`