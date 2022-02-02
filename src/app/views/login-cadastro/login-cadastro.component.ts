import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }
  //Com o "router", conseguimos fazer o direcionamento para outras páginas. No caso, vamos usá-lo para redirecionar o usuário para a página home após fazer o login com sucesso.

  ngOnInit(): void {
  }

  loginModel = new User();

  mensagem = ""
  
  onSubmit() {
    console.log(this.loginModel)
    
    let erroEncontrado = 0;

    //Criação de Blacklista (lista de proibição) para evitar ataques SQL. Faremos uma lista de termos que não serão permitidos no formulário para evitar esses ataques. Essa não é a melhor forma de fazer isso, pois é um recurso limitado. A melhor forma é por meio do Backend e do banco de dados.
    const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "insert ", "exec ", "\"", "\'", "--", "#", "*", ";"]
    
    //Se no campo de email for digitada e submetida uma das palavras ou caracteres listados acima, aparecerá a mensagem de "dados inválidos" e será exibido esse termo inválido.
    //Usamos o comando "toLowerCase()" para transformar o texto do email para minúsculo para depois fazer a verificação.
    listaPalavras.forEach(palavra => {
      if(this.loginModel.email?.toLowerCase().includes(palavra)) {
        this.mensagem = "Dados inválidos: " + palavra
        erroEncontrado = 1;
      }
    })

    //Se não houver nenhum erro (nenhum termo da blacklista), será executado o loginService)
    if(erroEncontrado == 0) {
      this.loginService.login(this.loginModel).subscribe( (response) => {
        console.log("Sucesso!")
        this.mensagem = "Sucesso!"
        this.router.navigateByUrl('') //O usuário será redirecionado para a página home.
      }, (respostaErro) => {
        this.mensagem = respostaErro.error
      })

    }

  }

}
