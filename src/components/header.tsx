import { Col, Container, Image, Row } from 'react-bootstrap'

export function Header() {
  return (

    <header id="header">
      <div className="intro">
        <div className="overlay">
          <Container fluid >
            <Row >
              <Col
                className="intro-text"
                md={{
                  offset: 2,
                  span: 8

                }}
                sm={12}
                xs={{
                  span: 12
                }}


              >

                <Image
                  alt="logo digitec"
                  fluid
                  height={300}
                  src="img/logo-digitec.png"
                  width={300}

                />

                {/*
                <h1>
                  {props.data ? props.data.title : 'Loading'}

                  <span />
              </h1>*/}

                <p >
                  Atuamos com prestação de serviços de assistência, gestão de segurança e saúde no trabalho.
                </p >

                <a
                  className="btn btn-custom btn-lg page-scroll"
                  href="#features"
                >
                  Saiba Mais
                </a>

                {' '}
              </Col >
            </Row >
          </Container >
        </div >
      </div >
    </header >
  )

}
