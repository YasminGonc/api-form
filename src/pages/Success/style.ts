import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: ${(props) => props.theme['blue-200']};
  border-radius: 16px;
  padding: 2rem 4rem;

  h2 {
    color: ${(props) => props.theme.pink};
    font-size: 1.5rem;
    font-weight: 400;
  }
`
export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  line-height: 1.3;

  svg {
    color: ${(props) => props.theme.pink};
  }
`
