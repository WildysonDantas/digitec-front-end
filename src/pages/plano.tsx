import { Col, Container, Row, Table } from 'react-bootstrap'
import { Contact } from '../components/contact'
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

const Subtitle = styled.h4`
    font-size: 90%;
    color: grey;

`

const plano: NextPage = () => {


    useEffect(() => {
        // SetLandingPageData(JsonData)
    }, [])

    return (
        <div id="root">
            <Head>
                <title>
                    Digtec - Planos
                </title>
            </Head>

            <Navigation data={JsonData.Navigation} />


            <Wrapper>
                <Container>
                    <h3 className="text-secondary">
                        <b>
                            Nossos Planos

                        </b>
                    </h3>

                    <hr />


                    <div>
                        <Subtitle>
                            Preparamos algumas opções para que você escolha aquela que atende sua necessidade, de acordo com a fase e maturidade da
                            gestão do seu negócio
                        </Subtitle>

                        <Table bordered responsive="xs" striped >

                            <thead>
                                <tr className="text-center ">


                                    <th className="text-success" colSpan={2} scope="col" >
                                        Adesão
                                    </th>

                                    <th className="text-primary" colSpan={2} scope="col">
                                        Mensalidade
                                    </th>


                                </tr>

                                <tr className="text-center text-secondary">


                                    <th scope="col" >
                                        Funcionarios
                                    </th>

                                    <th scope="col">
                                        Valor R$
                                    </th>

                                    <th scope="col" >
                                        Funcionarios
                                    </th>

                                    <th scope="col">
                                        Valor R$
                                    </th>


                                </tr>
                            </thead>

                            <tbody>

                                {JsonData.Planos
                                    ? JsonData.Planos.map((thing: any) => {
                                        return (
                                            <tr className="text-center" key={`${thing.funcionarios}`}>
                                                <td>
                                                    {thing.funcionarios}
                                                </td>

                                                <td>
                                                    {thing.adesaoValor}
                                                </td>

                                                <td>
                                                    {thing.funcionarios}
                                                </td>

                                                <td>
                                                    {thing.mensalidadeValor}
                                                </td>

                                            </tr>
                                        )
                                    })
                                    : 'loading'}


                            </tbody>
                        </Table>
                    </div>

                    <Subtitle>
                        O que está incluso?
                    </Subtitle>

                    <div className="list-style">
                        <Row>

                            {JsonData.ServicesPage
                                ? JsonData.ServicesPage.items1.map((thing: string) => <Col key={`${thing}`} md={4} sm={4} >

                                    •
                                    {' '}

                                    {thing}

                                </Col>)
                                : 'loading'}

                        </Row>


                    </div>

                    <div>
                        <hr />

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


        </div >
    )
}

export default plano
