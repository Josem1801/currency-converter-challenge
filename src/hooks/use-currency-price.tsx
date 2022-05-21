import { useCallback, useEffect, useState } from 'react'
import getCoupleCurrencyPrice from 'services/getCoupleCurrencyPrice'
import getObjectKeys from 'utils/getObjectKeys'

export default function useCurrencyPrice(
  firstCurrency: string,
  secondCurrency: string
) {
  const [currentPrice, setCurrentyPrice] = useState<number>(1)
  const requestCurrencyPrice = useCallback(async () => {
    try {
      const res = await getCoupleCurrencyPrice(firstCurrency, secondCurrency)
      setCurrentyPrice(res[getObjectKeys(res)[0]])
    } catch (error) {}
  }, [firstCurrency, secondCurrency])
  useEffect(() => {
    requestCurrencyPrice()
  }, [requestCurrencyPrice])
  return { currentPrice }
}
