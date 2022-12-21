import { Container, Row, Col } from "react-bootstrap"
import PokemonCardComponent from "../components/PokemonCardComponent"
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";

const getPokemon = async(id) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = {
        id: data.id,
        name: data.name.charAt(0).toUpperCase()+data.name.slice(1),
        type: data.types[0].type.name,
        img: data.sprites.other.home.front_default
    }
    return pokemon;
}

const getAll = async(count) => {
    const pokemonList = [];
    for(let i = 1; i <= count ; i++){
        const pokemon = await getPokemon(i);
        if(pokemon.id > 0){
            pokemonList.push(pokemon);
        }       
    }
    return pokemonList;
}

const HomePage = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(()=>{
        getAll(905)
            .then(data=>{
                setPokemonList(data)
            })
            .catch(err=>console.log(err))
    },[])

    return (
        <>
            <Container>
                <Row xs={1} className="g-5 mt-3">
                    {pokemonList.map((pokemon, idx) => (
                        <Col md={3}>
                            <PokemonCardComponent pokemon={pokemon} key={idx} />
                        </Col>
                    ))}
                    
                </Row>
            </Container>
        </>
    )
}

export default HomePage;