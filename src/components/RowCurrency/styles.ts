import { Select } from 'components/ui/Select'
import styled from 'styled-components'

export const RowCurrencyContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  column-gap: 35px;
  width: 100%;
  height: fit-content;

  ${Select} {
    width: 100%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.table}px) {
    flex-direction: row;
    ${Select} {
      width: 140px;
    }
  }
`
export const FlagContainer = styled.div`
  display: flex;
  align-items: center;
`
