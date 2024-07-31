const characterId = document.getElementById('number');
const btnGo = document.getElementById('btnGo');
const conteudo = document.getElementById('content');

const fecthApi = (value) =>{
    const result = fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        })
        return result
}

btnGo.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await fecthApi(characterId.value);
    conteudo.innerHTML = `
    
        <div class="div-icons">
            <a href="#" class="arrow-back"><span class="material-symbols-outlined">arrow_back</span></a>
            <a href="#" class="favorite"><span class="material-symbols-outlined">favorite</span></a>
        </div>
        <div class="pokemon">
            <span class="name">${result.name}</span>
            <span class="number">#00${result.id}</span>
            <ol class="types">
                ${createLiTypes(result.types)}
            </ol>
            <div class="image">
                <img src="${result.sprites.other.dream_world.front_default}" alt="" id="image">
            </div>
        </div>
        <div class="pokemon-details">
            <nav class="menu-details">
                <ol class="menu-list">
                    <li class="page-details">
                        About
                    </li>
                    <li class="page-details">
                        Base Stats
                    </li>
                    <li class="page-details">
                        Evolution
                    </li>
                    <li class="page-details">
                        Moves
                    </li>
                </ol>
            </nav>
            <div class="teste01">
                <div class="div-details">
                    <ol class="list-details">
                        <li class="attributes-details">
                            Species
                        </li>
                        <li class="attributes-details">
                            Height
                        </li>
                        <li class="attributes-details">
                            Weight
                        </li>
                        <li class="attributes-details">
                            Abilities
                        </li>
                    </ol>
                </div>
                <div class="div-results-details">
                    <ol>
                        <li class="results-details">
                            ${result.name}
                        </li>
                        <li class="results-details">
                            ${result.height}
                        </li>
                        <li class="results-details">
                            ${result.weight}
                        </li>
                        <li class="results-details">
                            ${createAbilities(result.abilities)}
                        </li>
                    </ol>
                </div>
            </div>
            <nav class="nav-breeding">
                <ol class="list-nav-breeding">
                    <li>
                        Breeding
                    </li>
                </ol>
            </nav>
            <div class="teste02">
                <div class="div-breeding">
                    <ol class="list-breeding">
                        <li class="type-breeding">
                            Gender
                        </li>
                        <li class="type-breeding">
                            Egg Group
                        </li>
                        <li class="type-breeding">
                            Egg Cycle
                        </li>
                    </ol>
                </div>
                <div class="div-results-breeding">
                    <ol class="list-results-breeding">
                        <li class="results-type-breeding">
                            <span><span class="material-symbols-outlined">male</span> 87.5%</span>
                            <span><span class="material-symbols-outlined">female</span> 12.5%</span>
                        </li>
                        <li class="results-type-breeding">
                            Monster
                        </li>
                        <li class="results-type-breeding">
                            Grass
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    `
})

function createLiTypes(value){
    let conteudoHtml = '';
    for(let i = 0; i < value.length; i++){
        conteudoHtml += ` 
                        <li class="type">
                            ${value[i].type.name}
                        </li>
                        `
    }
    return conteudoHtml;
}

function createAbilities(value){
    let conteudoHtml = '';
    for(let i = 0; i < value.length; i++){
       conteudoHtml += `
                        <span class="abilitie-detail">
                            ${value[i].ability.name}
                        </span> 
                        ` 
    }
    return conteudoHtml;
}