let estoqueLivros = [];

function adicionarLivro(titulo, autor, quantidade) {
  const livroExistente = estoqueLivros.find((livro) => livro.titulo === titulo);

  if (livroExistente) {
    console.log(`O livro "${titulo}" já está no estoque.`);
  } else {
    estoqueLivros.push({ titulo, autor, quantidade });
    console.log(`O livro "${titulo}" foi adicionado ao estoque.`);
  }
}

function removerLivro(titulo) {
  const indice = estoqueLivros.findIndex((livro) => livro.titulo === titulo);

  if (indice !== -1) {
    estoqueLivros.splice(indice, 1);
    console.log(`O livro "${titulo}" foi removido do estoque.`);
  } else {
    console.log(`O livro "${titulo}" não foi encontrado no estoque.`);
  }
}

function atualizarQuantidade(titulo, novaQuantidade) {
  const livro = estoqueLivros.find((livro) => livro.titulo === titulo);

  if (livro) {
    livro.quantidade = novaQuantidade;
    console.log(`A quantidade do livro "${titulo}" foi atualizada para ${novaQuantidade}.`);
  } else {
    console.log(`O livro "${titulo}" não foi encontrado no estoque.`);
  }
}

function listarLivros() {
  if (estoqueLivros.length === 0) {
    console.log("O estoque está vazio.");
  } else {
    console.log("Livros disponíveis no estoque:");
    estoqueLivros.forEach((livro, index) => {
      console.log(`${index + 1}. Título: "${livro.titulo}", Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
    });
  }
}

adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 10);
adicionarLivro("1984", "George Orwell", 5);
adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 10);
listarLivros();
atualizarQuantidade("1984", 7);
removerLivro("O Senhor dos Anéis");
listarLivros();
