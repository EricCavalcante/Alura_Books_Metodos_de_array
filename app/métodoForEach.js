const elementosParaInserirLivros = document.querySelector("#livros")

function exibirOsLivrosNaTela(listaDeLivros){
  elementosParaInserirLivros.innerHTML= ''
  listaDeLivros.forEach(livro => {
    // let disponibilidade = verificarDisponibilidadeDoLivro(livro)  
    let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
    elementosParaInserirLivros.innerHTML += `
      <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>

      `
  } )
}

// function verificarDisponibilidadeDoLivro(livro){
//   if (livro.quantidade > 0){
//     return 'livro__imagens'
//   }else{
//     return 'livro__imagens indisponivel'
//   }
// }