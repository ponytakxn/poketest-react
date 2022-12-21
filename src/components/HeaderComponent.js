import { Navbar } from "react-bootstrap";

const HeaderComponent = () => {
    return (
        <Navbar bg="dark" variant="dark">
            
                <Navbar.Brand href="/" className="ms-5">
                    <img
                        alt=""
                        src="https://i.pinimg.com/736x/3f/53/20/3f5320bda51f29d0e6ef7a61d030c234--cricut.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Pokeapi
                </Navbar.Brand>
            
        </Navbar>
    )
}

export default HeaderComponent;

