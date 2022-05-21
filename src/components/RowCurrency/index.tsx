import { Select } from 'components/ui/Select'
import React, { ChangeEvent } from 'react'
import { FlagContainer, RowCurrencyContainer } from './styles'
import { Input } from 'components/ui/Input'
import 'currency-flags/dist/currency-flags.css'
import { Currency } from 'services/getCurrenciesList'
import getObjectKeys from 'utils/getObjectKeys'
interface RowCurrencyProps {
  handlePrice: (e: number) => void
  handleCurrency: (e: string) => void
  options: Currency
  currentCurrency: string
  value: number
  name: string
}
export default function RowCurrency({
  handlePrice,
  handleCurrency,
  currentCurrency,
  options,
  value,
  name,
}: RowCurrencyProps) {
  return (
    <RowCurrencyContainer>
      <Input
        type="text"
        name={`input-${name}`}
        aria-label={`input-${name}`}
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
          aria-label={`select-${name}`}
          value={currentCurrency}
          name={`select-${name}`}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            handleCurrency(e.target.value)
          }
        >
          {getObjectKeys(options).map((option) => (
            <option key={option} value={option}>
              {options[option]}
            </option>
          ))}
        </Select>
      </FlagContainer>
    </RowCurrencyContainer>
  )
}
