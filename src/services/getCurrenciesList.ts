import requester from './requester'
export interface Currency {
  [key: string]: string
}

export default async function getCurrenciesList() {
  try {
    const res = await requester.get('/list')
    console.log(res.data)
    return res.data.currencies
  } catch (error) {
    console.log(error)
  }
}
