

console.log('Quantidade de produtos',produtos.length)

let container = document.querySelector('.produtos')
// para cada produto na lista de produtos, crie um card
for (let produto of produtos) {
    // crie um elemento div com a classe card
    let card = document.createElement('div')
    // adicione a classe card ao elemento
    card.classList.add('card')

    card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <p>R$ ${produto.preco}</p>
        <button>Adicionar ao carrinho</button>
    `
    container.appendChild(card)
}
container.appendChild(card)