import fetch from 'node-fetch';
import { Pokemon } from './IPokemon';

export async function getPokemonStats(names: string[]) : Promise<Pokemon[]> {
    // 
    // Make concurretn async calls, but wait for all to return
    //

    // https://pokeapi.co/api/v2/pokemon/pikachu/

    let retData: Pokemon[] = [];
    await Promise.all(
        names.map(n => fetch('https://pokeapi.co/api/v2/pokemon/' + n + '/'))
    ).then(function (responses) {
        // Stream each JOSN object from the api response
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data: any) {
        retData = reduceJson(data);
    }).catch(function (error) {
        console.log('ERROR: ', error);
    });

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
