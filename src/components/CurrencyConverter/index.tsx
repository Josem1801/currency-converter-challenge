import RowCurrency from 'components/RowCurrency'
import { Circle } from 'components/ui/Circle'
import { Input } from 'components/ui/Input'
import { Select } from 'components/ui/Select'
import { Typography } from 'components/ui/Typography'
import { UnderlineContainer } from 'components/ui/UnderlineContainer'
import React, { ChangeEvent, useCallback, useState } from 'react'
import { Card } from './styles'
import { BiTransfer } from 'react-icons/bi'
import { Currency } from 'services/getCurrenciesList'
import getObjectKeys from 'utils/getObjectKeys'
import useCurrencyPrice from 'hooks/use-currency-price'
import multiplyTwoNumbers from 'utils/multiplyTwoNumbers'
import divideTwoNumbers from 'utils/divideTwoNumbers'
interface CurrencyConverterProps {
  currencies: Currency
}
interface RowCurrencyTypes {
  currency: string
  value: number
}
export default function CurrencyConverter({
  currencies,
}: CurrencyConverterProps) {
  const [firstCurrency, setFirstCurrency] = useState<RowCurrencyTypes>({
    currency: 'USD',
    value: 0,
  })
  const [secondCurrency, setSecondCurrency] = useState<RowCurrencyTypes>({
    currency: 'MXN',
    value: 0,
  })
  const { currentPrice } = useCurrencyPrice(
    firstCurrency.currency,
    secondCurrency.currency
  )
  //Prices
  const handleFirstPrice = useCallback(
    (price: number) => {
      setFirstCurrency({ ...firstCurrency, value: price })
      setSecondCurrency({
        ...secondCurrency,
        value: multiplyTwoNumbers(price, currentPrice),
      })
    },
    [currentPrice, firstCurrency, secondCurrency]
  )
  const handleSecondPrice = useCallback(
    (price: number) => {
      setSecondCurrency({ ...secondCurrency, value: price })
      setFirstCurrency({
        ...firstCurrency,
        value: divideTwoNumbers(price, currentPrice),
      })
    },
    [currentPrice, firstCurrency, secondCurrency]
  )
  //Currencies
  function handleFirstCurrency(currency: string) {
    setFirstCurrency({ ...firstCurrency, currency })
  }
  function handleSecondCurrency(currency: string) {
    console.log(currency)
    setSecondCurrency({ ...secondCurrency, currency })
  }
  function handleInvertCurrencies() {
    setFirstCurrency({ ...firstCurrency, currency: secondCurrency.currency })
    setSecondCurrency({ ...secondCurrency, currency: firstCurrency.currency })
  }
  return (
    <Card as="section">
      <UnderlineContainer as="header">
        <Typography fontVariant="large">Currency Converter</Typography>
      </UnderlineContainer>
      <RowCurrency
        value={firstCurrency.value}
        currentCurrency={firstCurrency.currency}
        options={getObjectKeys(currencies)}
        handlePrice={handleFirstPrice}
        handleCurrency={handleFirstCurrency}
      />
      <Circle onClick={handleInvertCurrencies}>
        <BiTransfer className="icon__transfer" />
      </Circle>
      <RowCurrency
        value={secondCurrency.value}
        currentCurrency={secondCurrency.currency}
        options={getObjectKeys(currencies)}
        handlePrice={handleSecondPrice}
        handleCurrency={handleSecondCurrency}
      />
    </Card>
  )
}
