import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:3000/login"

  //é preciso definir os "headers" da requisição => 'Content-Type': 'application/json'
  //também é preciso inserir um comando para analisar a resposta => observe: "response" (isso é necessário para mostrar a resposta para o usuário, como dizer se os dados inseridos estão ou não corretos)


  //declaração do método de login
  login(user: User): Observable<any> {
    return this.httpClient.post(this.url, JSON.stringify(user), {
      headers: new HttpHeaders({ 'Content-Type':'application/json' }),
      observe: "response"
    })
  }
}
