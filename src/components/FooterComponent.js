import { Container, Row, Col } from 'react-bootstrap';

const FooterComponent = () => {
    return(
        <footer>
            <Container fluid>
                <Row className='mt-5'>
                    <Col className="text-white-50 bg-dark text-center py-5">Copyright &copy; Poketest</Col>
                    <Col className="text-white-50 bg-dark text-center py-5">JG Valdés Vergara / @ponytakxn</Col>
                </Row>
            </Container>
        </footer>
    )

}

export default FooterComponent;