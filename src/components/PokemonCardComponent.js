import { Card, Button } from 'react-bootstrap';
import React from 'react';

const PokemonCardComponent = ({ pokemon, key }) => {
    
    return (
        <Card className='m-1'>

        <Card.Img variant="top" src={pokemon.img}/>
        
        <Card.Body>

            <Card.Title style={{textAlign: "center", fontSize: '1.5rem', fontWeight: 'bold'}}>{pokemon.name}</Card.Title>
            <Card.Text style={{textAlign: 'center', fontSize: '1.2rem'}}>
                Pokemon #{pokemon.id}
            </Card.Text>
            <Card.Text>
                Type: {pokemon.type}
            </Card.Text>
            
            <Button className="offset-md-4" variant="primary" href={`/pokemon/${pokemon.id}`}>
                Ver detalles
            </Button>                
            
        </Card.Body>
        </Card>  
    )   
}

export default PokemonCardComponent;
