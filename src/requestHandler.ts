import { getPokemonStats } from './getPkemonStats';
import { PokemonStats } from './IPokemon';

//
// request handler
//
export async function requestHandler(names: string[]): Promise<PokemonStats> {

    const pokemons = await getPokemonStats(names);

    const weights = pokemons.map(p => p.weight).sort((l, r) => l - r);
    const heights = pokemons.map(p => p.height).sort((l, r) => l - r);

    const stats: PokemonStats = {
        pokemons: pokemons,
        weight: {
            mean: mean(weights),
            median: median(weights),
            mode: mode(weights)
        }, 
        height: {
            mean: mean(heights),
            median: median(heights),
            mode: mode(heights)
        },
    };

    return stats;
}

//
// Quick calulations below
//
const mean = (values: number[]): number => values.length > 0 ? values.reduce((a, v) => a + v) / values.length : 0;

const median = (values: number[]): number => values.length > 0 ? values[Math.round(values.length)/2] : 0;

// 
// Mode: If all are the same, the first value is returned.
const mode = (values: number[]): number => {
    if (values.length === 0) {
        return 0;
    }

    const modeMap = new Map<any, any>();
    values.forEach(n => {
        let curCounter = modeMap.get(n);

        if (!curCounter) {
            curCounter = { k: n, count: 0 };
            modeMap.set(n, curCounter);
        }
        curCounter.count = curCounter.count + 1;
    });

    let maxMode: any | null;
    modeMap.forEach((v) => {
        if (!maxMode || maxMode.count < v.count) {
            maxMode = v;
        }
    });

    return maxMode.k;
};


