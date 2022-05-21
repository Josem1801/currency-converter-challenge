/* eslint-disable react-hooks/exhaustive-deps */
import RowCurrency from 'components/RowCurrency'
import { Circle } from 'components/ui/Circle'
import { Typography } from 'components/ui/Typography'
import { UnderlineContainer } from 'components/ui/UnderlineContainer'
import React, { useCallback, useEffect, useState } from 'react'
import { Card } from './styles'
import { BiTransfer } from 'react-icons/bi'
import { Currency } from 'services/getCurrenciesList'
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
    [currentPrice]
  )
  const handleSecondPrice = useCallback(
    (price: number) => {
      setSecondCurrency({ ...secondCurrency, value: price })
      setFirstCurrency({
        ...firstCurrency,
        value: divideTwoNumbers(price, currentPrice),
      })
    },
    [currentPrice]
  )
  //Currencies
  function handleFirstCurrency(currency: string) {
    setFirstCurrency({ ...firstCurrency, currency })
    setSecondCurrency({
      ...secondCurrency,
      value: multiplyTwoNumbers(firstCurrency.value, currentPrice),
    })
  }
  function handleSecondCurrency(currency: string) {
    setSecondCurrency({
      ...secondCurrency,
      currency,
    })
  }
  function handleInvertCurrencies() {
    const memory = firstCurrency
    setFirstCurrency({ ...secondCurrency })
    setSecondCurrency({ ...memory })
  }
  useEffect(() => {
    setSecondCurrency({
      ...secondCurrency,
      value: multiplyTwoNumbers(firstCurrency.value, currentPrice),
    })
  }, [currentPrice])
  return (
    <Card as="section">
      <UnderlineContainer as="header">
        <Typography fontVariant="large">Currency Converter</Typography>
      </UnderlineContainer>
      <RowCurrency
        name="firstRowCurrency"
        value={firstCurrency.value}
        currentCurrency={firstCurrency.currency}
        options={currencies}
        handlePrice={handleFirstPrice}
        handleCurrency={handleFirstCurrency}
      />
      <Circle onClick={handleInvertCurrencies}>
        <BiTransfer className="icon__transfer" />
      </Circle>
      <RowCurrency
        name="secondRowCurrency"
        value={secondCurrency.value}
        currentCurrency={secondCurrency.currency}
        options={currencies}
        handlePrice={handleSecondPrice}
        handleCurrency={handleSecondCurrency}
      />
    </Card>
  )
}
