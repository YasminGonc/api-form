import styled from "styled-components";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const PaymentFormContainer = styled.section`
    background-color: ${props => props.theme["blue-200"]};
    border-radius: 16px;
    padding: 2.625rem 2rem;
    margin: 0.5rem 0;
`
export const TitleContainer = styled.div`
    margin-bottom: 2rem;

    h2 {
        color: ${props => props.theme.pink};
        font-size: 1.5rem;
        font-weight: 400;
    }
`
export const Root = styled(RadioGroup.Root)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
`
export const Item = styled(RadioGroup.Item)`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    background-color: ${props => props.theme["blue-100"]};
    border: 0;
    border-radius: 6px;

    color: ${props => props.theme.placeholder};
    font-size: 0.875rem;

    padding: 0.75rem;
    cursor: pointer;

    svg {
        color: ${props => props.theme.pink};
    }

    &[data-state='checked'] {
        background-color: ${props => props.theme.pink};
        color: ${props => props.theme.text};

        svg {
            color: ${props => props.theme.text};
        }
    }

    &[data-state='unchecked']:hover {
        background-color: ${props => props.theme["blue-hover"]};
    }
`