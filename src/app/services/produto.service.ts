import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  // criar variável para armazenar o endereço da requisição, ou seja, onde o json serve está rodando
  url = "http://localhost:3000/produtos"

  // injeção de dependência, ou seja, inserção da dependência do httpCliente para utilizar suas funcionalidades
  constructor(private httpClient: HttpClient) { }

  //criação dos métodos
  //função GET é um método para mostrar os produtos

  getProdutos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.url)
  }
  
  //"observable" é o tipo de retorno da função, no caso, ele vai retornar o array contendo os produtos cadastrados
}
