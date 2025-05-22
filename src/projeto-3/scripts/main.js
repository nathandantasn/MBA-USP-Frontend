// Nome do arquivo: main.js //
import { carregarProdutos } from './productService.js';
import { ativarBusca } from './searchProducts.js';
import { exibirProdutos } from './showProducts.js';
// Descrição: Este arquivo contém o código JavaScript para o projeto 3, que faz uma requisição a um arquivo JSON e exibe os dados no console
async function main() {
    // Fazendo uma requisição para o arquivo JSON, buscando os produtos
    let produtos = await carregarProdutos()
    exibirProdutos(produtos)
    ativarBusca(produtos)
}
main()