import requester from './requester'

export default async function getCoupleCurrencyPrice(
  firstCurrency: string,
  secondCurrency: string
) {
  try {
    const res = await requester.get(
      `/fetch-one?from=${firstCurrency}&to=${secondCurrency}`
    )
    return res.data
  } catch (error) {
    console.error(error)
  }
}
