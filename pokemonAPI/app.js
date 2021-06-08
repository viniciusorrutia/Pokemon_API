const getPokeUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const generatePokePromises = () => Array(392).fill().map((_, index) => fetch(getPokeUrl(index + 1)).then(res => res.json()))

const generateHTML = pokes => pokes.reduce((accumulator, poke) =>{
    const elementTypes = poke.types.map(typeInfo => typeInfo.type.name)

    accumulator += `
        <li class="card ${elementTypes[0]}">
        <img class="card-image" alt="${poke.name}" src="https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png"/>
            <h2 class="card-title">${poke.id}. ${poke.name}</h2>
            <p class="subtitle">${elementTypes.join(' | ')}</p>
            </li>
        `
    return accumulator
}, '')



const insertPokesIntoPage = pokes => {
    const ul = document.querySelector('[data-js="pokedex"]')

    ul.innerHTML = pokes
}


const pokePromises = generatePokePromises()

/*for(let i = 1; i<=150; i++){
    pokePromises.push(fetch(getPokeUrl(i)).then(res => res.json()))
}*/

Promise.all(pokePromises)
    .then(generateHTML)
    .then(insertPokesIntoPage)


fetchPoke()