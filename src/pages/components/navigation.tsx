import { Container, Image, Nav, Navbar } from 'react-bootstrap'

export function Navigation(props: any) {
  return (

    <Navbar
      bg="dark"
      collapseOnSelect
      expand="lg"
      fixed="top"
      id="menu"
      variant="dark"
    >
      <Container>
        <Navbar.Brand
          className="page-scroll text-white"
          href="#home"
        >

          <Image
            alt="logo digitec" fluid
            height={30}
            src="img/logo-digitec.png"
            width={30}
          />

          {props.data ? props.data.title : 'DIGITEC'}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />

          <Nav>
            <Nav.Link href="#">
              Home
            </Nav.Link>

            <Nav.Link href="#about" >
              Quem Somos
            </Nav.Link>

            <Nav.Link href="#features">
              Serviços
            </Nav.Link>

            <Nav.Link
              href="#contact"
            >

              Contatos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
