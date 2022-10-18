import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 640px;
    max-width: 640px;

    form {
        button[type=submit] {
           width: 100%;
           padding: 0.5rem;

           background-color: ${props => props.theme["blue-200"]};
           border-radius: 6px;
           border: 0;

           color: ${props => props.theme.pink};
           text-transform: uppercase;
           cursor: pointer;

           &:hover {
            background-color: ${props => props.theme["blue-hover"]};
           }
        }
    }
`