import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'


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
        <Link href="/" passHref>
          <Navbar.Brand
            className="page-scroll text-white"

          >

            <Image
              alt="logo digitec" fluid
              height={30}
              src="img/logo-digitec.png"
              width={30}
            />

            {props.data ? props.data.title : 'DIGITEC'}
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />

          <Nav>
            <Link href="/">
              <a className="nav-link">
                {' '}
                Home
              </a>

            </Link>

            <Nav.Link href="#about" >
              Quem Somos
            </Nav.Link>


            <Link
              href="/servicos"
            >
              <a className="nav-link">
                {' '}
                Serviços
              </a>

            </Link>

            <Link href="/plano" >
              <a className="nav-link">
                {' '}
                Planos
              </a>

            </Link>


            <Nav.Link
              href="#contact"
            >

              Contatos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >

  )
}
