import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  height: 60px;
  font-size: ${({ theme }) => theme.typography.larger.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.larger.fontWeight};
  color: ${({ theme }) => theme.palette.white};
  background: transparent;
  outline: none;
  border: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #151922;
  transition: 300ms ease-in-out;

  :focus {
    border-bottom-color: ${({ theme }) => theme.palette.secondary};
  }
`
