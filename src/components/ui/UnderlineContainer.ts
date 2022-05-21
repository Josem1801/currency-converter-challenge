import styled from 'styled-components'

export const UnderlineContainer = styled.div<{ spacing?: number }>`
  height: fit-content;
  padding-bottom: ${({ spacing }) => spacing || 20}px;
  border-bottom: 1px solid #151922;
`
