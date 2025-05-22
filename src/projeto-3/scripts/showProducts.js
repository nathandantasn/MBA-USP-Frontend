export function exibirProdutos(listaDeProdutos) {
    let container = document.querySelector('.produtos')
    container.innerHTML = ''

    if (listaDeProdutos.length == 0) {
        container.innerHTML = '<p>Nenhum produto encontrado.</p>'
        return
    }
    for (let produto of listaDeProdutos) {
        let card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button class="btn">Adicionar ao carrinho</button>
        `;
        container.appendChild(card)
    }
}