import styled from "styled-components";

export const DeliveryFormContainer = styled.section`
    background-color: ${props => props.theme["blue-200"]};
    border-radius: 16px;
    padding: 2.625rem 2rem;
    width: 640px;
    max-width: 640px;
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
    grid-template-columns: 1fr 1fr auto;
    grid-template-areas: 
        'cep . .'
        'rua rua rua'
        'numero complemento complemento'
        'bairro cidade uf'
    ;
`
export const InputWrapper = styled.fieldset`
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
    }
`