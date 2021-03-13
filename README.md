# PokemonExcersice
Exercise using NodeJs to analyze Pokemeon's height and weight

# Instructions

1. Write code to pull Pikachu’s height and weight from: https://pokeapi.co/.

2. Write code to pull 5-6 (pick your favorite) Pokemon’s height and weight from the API.
Write an interface in REST or GraphQL to be able to pull heights and weights for one or more Pokemon(s).

3. Make the app so it can return mean, median, and mode from the interface you created in #3.
Bonus if time:

4. Allow us to pass multiple names as a query parameter to decide which pokemon we want to get the above info on at runtime (versus predetermined)
    
        Example: http://localhost:3000/pokemon?names=kakuna,pikachu,ditto,bulbasaur


# Test 

Request: 

http://localhost:3000/pokemon?names=pikachu

http://localhost:3000/pokemon?names=kakuna,pikachu,ditto,bulbasaur


Response:

        {
                pokemons: [
                        { name: 'kakuna', weight: 100, height: 6 },
                        { name: 'pikachu', weight: 60, height: 4 },
                        { name: 'ditto', weight: 40, height: 3 },
                        { name: 'bulbasaur', weight: 69, height: 7 }
                ],
                weight: { mean: 67.25, median: 69, mode: 40 },
                height: { mean: 5, median: 6, mode: 3 }
        }

## Run Command
Use nodemon to run on dev:
        
        nodemon -e js,ts -w './src/*'  --exec npm run-script buildmon

## Initialized with NPX 
I used npx package to start the new project. 

https://www.npmjs.com/package/init-typescript-app 

<pre>
npx init-typescript-app
# then answer for a few questions in cli
cd project-name
npm install
npm run build
npm start
</pre>
