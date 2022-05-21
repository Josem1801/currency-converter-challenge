import styled from 'styled-components'

export const Circle = styled.button`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid #0f131d;
  cursor: pointer;
  transition: 300ms ease-in-out;
  :hover {
    background: ${({ theme }) => theme.palette.secondary};
    border-color: transparent;
    box-shadow: 0 0 10px 0px ${({ theme }) => theme.palette.secondary};
  }
`
