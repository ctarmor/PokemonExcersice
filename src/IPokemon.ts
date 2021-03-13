export type Pokemon = {
    name: string,
    height: number,
    weight: number
}

export type PokemonStat = {
    mean: number,
    median: number,
    mode: number
}

export type PokemonStats = {
    height?: PokemonStat,
    weight?: PokemonStat,
    pokemons: Pokemon[]
}

