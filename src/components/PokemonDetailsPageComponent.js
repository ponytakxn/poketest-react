import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Col, Container, Row, ListGroup, ListGroupItem } from 'react-bootstrap';


const PokemonDetailsPageComponent = ({ getPokemon }) => {

    const { id } = useParams();
    const [pokemon, setPokemon] = useState({
        name: "",
        id: 0,
        type: "",
        sprites: [],
        stats: [],
        abilities: []
    });

    useEffect(() =>{
        getPokemon(id)
            .then(data => setPokemon(data))
            .catch(err=> console.log(err))
    },[]);

    return(
            <Container>
                <Row className='mt-5'>
                    <Col md={3}>
                        <div class='offset-md-4'>
                            <img src={pokemon.sprites[2]} alt='img1'/>
                        </div>
                        <div>
                            <img src={pokemon.sprites[3]} alt='img2' />
                        </div>
                    </Col>
                    
                    <Col md={7} className='ms-2'>
                        <div class='offset-md-4'>
                            <img src={pokemon.sprites[0]} alt='img3'/>
                            <img src={pokemon.sprites[1]} alt='img4'/>
                        </div>
                        <ListGroup>
                            <ListGroupItem><h1>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h1></ListGroupItem>
                            <ListGroupItem><h2>#{pokemon.id}</h2></ListGroupItem>
                            <ListGroupItem style={{textAlign: 'center'}}>Tipo de pokemon: {pokemon.type}</ListGroupItem>
                        </ListGroup>

                        <ListGroup className='mt-5'>
                            <ListGroupItem><h2>Estadísticas: </h2></ListGroupItem>
                            <Row>
                                <Col md={6}>
                                    {pokemon.stats.slice(0,3).map((stat) => (
                                        <ListGroupItem>
                                            {stat.stat.name}: {stat.base_stat}
                                        </ListGroupItem>
                                    ))}
                                </Col>
                                <Col md={6}>
                                    {pokemon.stats.slice(3,7).map((stat) => (
                                        <ListGroupItem>
                                            {stat.stat.name}: {stat.base_stat}
                                        </ListGroupItem>
                                    ))}
                                </Col>
                            </Row>
                        </ListGroup>

                        <ListGroup variant="flush" className='mt-5 offset-md-2'>
                            <ListGroupItem><h3>Habilidades: </h3></ListGroupItem>
                            {pokemon.abilities.map((ability) => (
                                <ListGroupItem>
                                    {ability.ability.name.toUpperCase()}
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
    )
}

export default PokemonDetailsPageComponent;