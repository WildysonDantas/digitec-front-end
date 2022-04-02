import { About } from './components/about'
import { Contact } from './components/contact'
import { Features } from './components/features'
import Head from 'next/head'
import { Header } from './components/header'
import JsonData from './data/data.json'
import { Navigation } from './components/navigation'
import { NextPage } from 'next'
import { useEffect } from 'react'


const home: NextPage = () => {
  // Const [likes, setLikes] = useState(0)

  // Const [landingPageData, setLandingPageData] = useState({})

  /*
   *Const handleClick = () => {
   *setLikes(likes + 1)
   *}
   */

  // Const handleClick = useCallback(() => setLikes(likes + 1), [likes])


  useEffect(() => {
    // SetLandingPageData(JsonData)
  }, [])

  return (
    <div id="root">
      <Head>
        <title>
          Digitec
        </title>

        <meta
          content="Wildyson Dantas dos Santos"
          name="author"
        />

        <link
          href="img/favicon.png" rel="shortcut icon"

        />
      </Head>

      <Navigation data={JsonData.Navigation} />

      <Header />

      <About data={JsonData.About} />

      <Features data={JsonData.Features} />

      <Contact data={JsonData.Contact} />


    </div>
  )
}

export default home
