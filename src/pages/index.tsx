import CurrencyConverter from 'components/CurrencyConverter'
import { Layout } from 'Layout/styles'
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import getCurrenciesList, { Currency } from 'services/getCurrenciesList'

export const getServerSideProps: GetServerSideProps<{
  currencies: Currency
}> = async () => {
  const currencies = await getCurrenciesList()
  return {
    props: {
      currencies,
    },
  }
}

const Home = ({
  currencies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
      <CurrencyConverter currencies={currencies} />
    </Layout>
  )
}

export default Home
