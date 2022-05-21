import styled from 'styled-components'

export const Select = styled.select`
  font-size: ${({ theme }) => theme.typography.large.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.large.fontWeight};
  background: transparent;
  color: ${({ theme }) => theme.palette.white};
  padding: 15px;
  text-transform: uppercase;
  border: none;

  * {
    background: red;
  }
`
