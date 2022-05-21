import requester from './requester'

export default async function getCoupleCurrencyPrice(
  firstCurrency: string,
  secondCurrency: string
) {
  try {
    const res = await requester.get(
      `/live?source=${firstCurrency}&currencies=${secondCurrency}`
    )
    return res.data.quotes
  } catch (error) {
    console.log(error)
  }
}
