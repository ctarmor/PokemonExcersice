import { getPokemonStats } from './getPkemonStats';


export async function requestHandler(names: string[]) : Promise<string> {

    await getPokemonStats(names);


    return 'reqeust handleerr';
}


