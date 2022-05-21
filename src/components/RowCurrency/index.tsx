import { Select } from 'components/ui/Select'
import React, { ChangeEvent } from 'react'
import { FlagContainer, RowCurrencyContainer } from './styles'
import { Input } from 'components/ui/Input'
import { Typography } from 'components/ui/Typography'
import 'currency-flags/dist/currency-flags.css'
interface RowCurrencyProps {
  handlePrice: (e: number) => void
  handleCurrency: (e: string) => void
  options: string[]
  currentCurrency: string
  value: number
}
export default function RowCurrency({
  handlePrice,
  handleCurrency,
  currentCurrency,
  options,
  value,
}: RowCurrencyProps) {
  return (
    <RowCurrencyContainer>
      <Typography fontVariant="large">Y</Typography>
      <Input
        type="text"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handlePrice(Number(e.target.value) || 0)
        }
      />
      <FlagContainer>
        <div
          className={`currency-flag currency-flag-${currentCurrency.toLowerCase()}`}
        />
        <Select
          value={currentCurrency}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            handleCurrency(e.target.value)
          }
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </FlagContainer>
    </RowCurrencyContainer>
  )
}
