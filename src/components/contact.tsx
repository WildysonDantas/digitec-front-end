import { Col, Container, Form, Image, Row } from 'react-bootstrap'

import { useCallback, useEffect, useState } from 'react'

// Import emailjs from 'emailjs-com'


interface Email {
  mail: String,
  message: String,
  name: String
}

const initialState = {
  mail: '',
  message: '',
  name: ''
}

export function Contact(props: any) {
  const [email, setEmail] = useState<Email>(initialState)

  const handleClick = useCallback((event) => {
    event.preventDefault()
    console.log('thats its')

    const mail = {
      mail: event.target.mail.value,
      message: event.target.message.value,
      name: event.target.name.value
    }

    setEmail(mail)

  }, [])

  useEffect(() => {
    // SetLandingPageData(JsonData)
    console.log(email)
  }, [email])


  return (
    <div>
      <div id="contact">
        <Container>

          <Row>
            <Col md={8} xs={12}>
              <Row>
                <div className="section-title">
                  <h2>
                    Entre em contato conosco
                  </h2>

                  <p>
                    Por favor, preencha o formulario abaixo e envie-nos à sua dúvida que nós retornaremos
                    uma resposta para seu email assim que possivel.
                  </p>
                </div>

                <Form
                  name="sentMessage"
                  onSubmit={handleClick}
                >
                  <Row>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label htmlFor="name" >
                          NOME
                        </Form.Label>

                        <Form.Control
                          id="name"
                          name="name"
                          placeholder="Nome"
                          required
                          type="text"
                        />

                        <p className="help-block text-danger" />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label htmlFor="mail">
                          EMAIL
                        </Form.Label>

                        <Form.Control
                          className="form-control"
                          id="mail"
                          name="mail"
                          placeholder="Email"
                          required
                          type="email"
                        />

                        <p className="help-block text-danger" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group>
                    <Form.Label htmlFor="message">
                      MENSAGEM
                    </Form.Label>

                    <Form.Control
                      as="textarea"
                      id="message"
                      name="message"
                      placeholder="Mensagem"
                      required
                      rows={6}
                    />

                    <p className="help-block text-danger" />
                  </Form.Group>

                  <div id="success" />

                  <button
                    className="btn btn-custom btn-lg"
                    type="submit"
                  >
                    Enviar Mensagem
                  </button>
                </Form>
              </Row>
            </Col>

            <Col md={4} xs={12}>
              <div className=" contact-info">
                <div className="contact-item">
                  <h3 className="text-uppercase">
                    <b>
                      Informações de Contato
                    </b>
                  </h3>

                  <p>
                    <span>
                      <i className="fa fa-map-marker" />

                      {' '}
                      Endereço
                    </span>

                    {' '}
                    Rua Afonso Miguel de Macêdo, nº 12. Padre Marcos - PiauÍ
                  </p>

                </div>

                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-phone" />

                      {' '}
                      Telefones
                    </span>

                    {' '}

                    (89) 98101-3602
                    <br />
                    (89) 98113-5324
                  </p>
                </div>

                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-envelope" />

                      {' '}
                      Email
                    </span>

                    {' '}

                    contato@digitec.com.br
                  </p>
                </div>
              </div>

            </Col>
          </Row>


          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a
                      href={props.data ? props.data.instagram : '#'} rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fa">


                        <Image
                          alt="instagram"
                          className="icone-social"
                          fluid
                          src="img/social/instagram.png"


                        />


                      </i>
                    </a>
                  </li>

                  <li>
                    <a
                      href={props.data ? props.data.facebook : '#'} rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fa">
                        <Image
                          alt="instagram"
                          className="icone-social"
                          fluid
                          src="img/social/facebook.png"

                        />
                      </i>
                    </a>

                  </li>

                  <li>
                    <a
                      href={props.data ? props.data.twitter : '#'} rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fa">
                        <Image
                          alt="instagram"
                          className="icone-social"
                          fluid
                          src="img/social/twitter.png"
                        />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>


      </div >

      <div className=" bg-dark" id="footer">
        <div className="container text-center">
          <p>

            <div className="text-white">
              &copy; 2022 Design By
            </div>

            {' '}

            <a
              href="https://www.speedwayti.com" rel="noopener noreferrer"
              target="_blank"
            >
              SpeedWay - Tecnologia da Informação
            </a>


          </p>
        </div>
      </div>
    </div >
  )
}
