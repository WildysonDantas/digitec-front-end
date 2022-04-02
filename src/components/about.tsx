import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
export function About(props: any) {
  return (
    <div id="about">
      <Container>
        <Row>
          <Col
            md={6}
            xs={12}
          >
            {' '}

            <Image
              alt=""
              className="img-responsive"
              src={props.data ? props.data.img : 'default'}
            />


          </Col>

          <Col
            md={6}
            xs={12}
          >
            <div className="about-text">
              <h2>
                Sobre Nós
              </h2>
              SÍNTESE DOS SERVIÇOS DE ASSISTÊNCIA EM SAÚDE E SEGURANÇA DO TRABALHO


              <p className="justify">

                Prestação de serviços assistência e gestão de segurança e saúde no trabalho (SST) permanente, através do gerenciamento de
                informações relativas aos processos de SST da empresa para atendimento ao eSocial, com a entrega mensal dos eventos,
                consolidando o atendimento aos requisitos legais, indicadores da empresa e de seus trabalhadores, desenvolvimento dos
                programas de prevenção que compõe o GRO – Gerenciamento de Riscos Ocupacionais (PGR e PCMSO) e assessoria técnica
                para diagnóstico e acompanhamento das ações.

              </p>


            </div>
          </Col>
        </Row>

        <Row className="mt-4">

          <Col
            md={6}
            xs={12}
          >
            <div className="about-text">

              <h3 className="text-uppercase">
                vantagens ao contratar nossos serviços
              </h3>

              <p className="justify">
                Nossa equipe possui qualificação técnica para esclarecimentos e suporte às demandas específicas, reduzindo os riscos dos nossos clientes.
                A seguir estão alguns dos beneficios ao contratar nosso serviços

              </p>

              <div className="list-style">
                <Row>
                  <Col
                    lg={6}
                    sm={6}
                    xs={6}
                  >
                    <ul>
                      {props.data
                        ? props.data.Why.map((thing: string) => <li key={`${thing}`}>
                          {thing}
                        </li>)
                        : 'loading'}
                    </ul>
                  </Col>

                  <Col
                    lg={6}
                    sm={6}
                    xs={6}
                  >
                    <ul>
                      {props.data
                        ? props.data.Why2.map((thing: string) => <li key={`${thing}}`}>
                          {' '}

                          {thing}
                        </li>)
                        : 'loading'}
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>

          <Col
            md={6}
            xs={12}
          >
            {' '}

            <Image
              alt=""
              className="img-responsive"
              src={props.data ? props.data.img2 : 'default'}
            />


          </Col>
        </Row>
      </Container>
    </div >
  )
}
