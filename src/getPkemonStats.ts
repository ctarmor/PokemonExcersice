import fetch from 'node-fetch';
import { Pokemon } from './IPokemon';

export async function getPokemonStats(names: string[]) {
    // 
    // Make concurretn async calls, but wait for all to return
    //

    // https://pokeapi.co/api/v2/pokemon/pikachu/

    let retData = {};
    await Promise.all(
        names.map(n => fetch('https://pokeapi.co/api/v2/pokemon/' + n + '/'))
    ).then(function (responses) {
        // Get a JSON object from each of the responses
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data: any) {
        retData = reduceJson(data);
    }).catch(function (error) {
        console.log('ERROR: ', error);
    });

    console.log('retData: ', retData);
    return retData;
}


// reduce json to only needed fields
const reduceJson = (json: any): Pokemon[] =>  {
    return json.map((p: any) => ({
        name: p.name,
        weight: p.weight,
        height: p.height
    }));
}
