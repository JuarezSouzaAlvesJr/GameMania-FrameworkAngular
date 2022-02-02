import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //variável que será usada na função carregarProdutos
  listaProdutos = [] as Produto[] //variável como um array de produtos

  //para que os produtos sejam renderizados remotamente na página home, temos que colocar o "service" como uma dependência; a página home depende dele
  constructor(private produtoService: ProdutoService) { }
  
  //Queremos que os produtos sejam carregados sempre que a página home seja carregada. Então, para isso, temos que indicar no "ngOnInit" que a função "carregarProdutos" deve ser executada sempre que a home for iniciada.
  ngOnInit(): void {
    this.carregarProdutos()
  }

  //o service será usado para fazer a requisição; ele vai retornar e guardar a lista de produtos, que será exibida no tamplete
  //método para a requisição
  carregarProdutos() {
    this.produtoService.getProdutos().subscribe( (produtosRecebidos: Produto[]) => {
      //o que será feito? salvar os produtos recebidos a variável "listaProdutos" para depois exibir no template
      this.listaProdutos = produtosRecebidos;
      console.log(this.listaProdutos);
    } )
  }
}

//RESUMO: A função "carregarProdutos" vai utilizar o service para dar um GET nos produtos; vai monitorar os resultados (subscrive); vai pegar os produtos recebidos e guardar na variável "listaProdutos".
