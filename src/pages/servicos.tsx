import { Contact } from '../components/contact'
import { Container } from 'react-bootstrap'
import Head from 'next/head'
import JsonData from './data/data.json'
import { Navigation } from '../components/navigation'
import { NextPage } from 'next'
import styled from 'styled-components'
import { useEffect } from 'react'


const Wrapper = styled.section`
    margin-top: 5%;
    padding-top: 1%;
    padding-bottom: 3%;
    
   
    @media (max-width: 768px) {
        margin-top: 20%;
        padding-bottom: 10%;
    }

  

`

const servicos: NextPage = () => {
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
                    Digtec - Serviços
                </title>
            </Head>

            <Navigation data={JsonData.Navigation} />


            <Wrapper>
                <Container>
                    <h3 className="text-secondary">
                        <b>
                            SERVIÇOS

                        </b>
                    </h3>

                    <hr />

                    <div className="list-style">

                        <ul>
                            {JsonData.ServicesPage
                                ? JsonData.ServicesPage.items1.map((thing: string) => <li className="mb-2" key={`${thing}`}>
                                    {thing}
                                </li>)
                                : 'loading'}
                        </ul>


                    </div>

                    <div>
                        Entre em contato conosco abaixo e faça já seu orçamento!
                        <hr />
                    </div>

                    <div>
                        <h3 className="text-secondary">
                            <b>
                                PROPOSTA COMERCIAL

                            </b>
                        </h3>

                        Clique
                        {' '}

                        <a href="#">
                            aqui
                        </a>

                        {' '}
                        para baixar a proposta comercial completa da DIGTEC
                    </div>


                </Container>
            </Wrapper>

            <Contact data={JsonData.Contact} />


        </div>
    )
}

export default servicos
