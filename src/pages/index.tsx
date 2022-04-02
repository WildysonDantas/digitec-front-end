import Home from './home'
import type { NextPage } from 'next'
import SSRProvider from 'react-bootstrap/SSRProvider'

const index: NextPage = () => {
  return (
    <SSRProvider>
      <Home />
    </SSRProvider>
  )
}

export default index
