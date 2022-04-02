import { Col, Container, Image, Row } from 'react-bootstrap'


export function Features(props: any) {


  return (
    <div
      className="text-center"
      id="features"
    >
      <Container>
        <Col
          className="section-tile"
          md={{
            offset: 1,
            span: 10

          }}
        >

          <h2>
            Nossos Serviços
          </h2>


        </Col>

        <Row >
          {
            props.data
              ? props.data.map((thing: any) => {

                return (

                  <Col
                    key={`${thing.title}`}
                    md={4}
                    xs={12}
                  >

                    <a className="features-link text-dark" href="#medicina">
                      {' '}

                      <Image
                        alt=""
                        className="img-responsive rounded-circle"
                        height={120}
                        src={thing.img ? thing.img : 'default'}
                        width={120}
                      />
                    </a>


                    <h3 className="mt-2 ">
                      {thing.title}
                    </h3>

                    <p>
                      {thing.text}
                    </p>


                  </Col>
                )
              }) : 'Loading...'
          }
        </Row>
      </Container>
    </div >
  )
}


