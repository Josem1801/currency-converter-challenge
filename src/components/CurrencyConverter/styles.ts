import styled from 'styled-components'

export const Card = styled.div`
  display: grid;
  width: 100%;
  max-width: 750px;
  min-width: 300px;
  padding: 3em;
  height: 500px;
  margin: 0 auto;
  align-self: center;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(40px);
  border: 1px solid #151922;
  border-radius: 8px;
  .icon__transfer {
    color: ${({ theme }) => theme.palette.white};
    transform: rotate(90deg);
    font-size: ${({ theme }) => theme.typography.large.fontSize}px;
  }
`
