export interface Produto {
    id?: number; //o ponto de interrogação é para não tornar o "id" obrigatório, assim, quando formos enviar um novo produto, não é necessário informar o "id"
    imagem: string;
    descricao: string;
    preco: string;
    parcela: string;
}
