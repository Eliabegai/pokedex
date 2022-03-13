/*
Quando clicar no pokemons da listagem, temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.
*/

// precisamos criar 2 variáveis JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

// vamos precisar trabalhar com um evento de click feito pelo usuário na listagem de pokemon
listaSelecaoPokemons.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        // remover a classe aberto, só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // ao clicar em pokemon da listagem, pegamos o ID desse pokemon para saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartoPokemonParaAbrir.classList.add('aberto')

        // remover a classe ativo que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})