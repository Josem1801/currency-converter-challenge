import styled from 'styled-components'

export const Layout = styled.main`
  display: grid;
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.palette.primary};
`
