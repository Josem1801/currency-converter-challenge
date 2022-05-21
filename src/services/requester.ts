import axios from 'axios'

const requester = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  params: {
    api_key: process.env.NEXT_PUBLIC_API_KEY,
  },
})

export default requester
