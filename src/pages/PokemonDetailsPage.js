import axios from 'axios';
import PokemonDetailsPageComponent from '../components/PokemonDetailsPageComponent';


const PokemonDetailsPage = () => {

    const getPokemon = async(pokemonID) => {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);

        const pokemonFetched = {
            name: data.name,
            id: data.id,
            type: data.types[0].type.name,
            sprites: [
                data.sprites.back_default,
                data.sprites.front_default,
                data.sprites.other.dream_world.front_default,
                data.sprites.other.home.front_default
            ],
            stats: data.stats,
            abilities: data.abilities
        }
        
        return pokemonFetched;
    }

    return(
        <PokemonDetailsPageComponent getPokemon={getPokemon} />
    )
}

export default PokemonDetailsPage;