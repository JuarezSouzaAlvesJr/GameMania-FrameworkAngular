import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginModel = new User();

  onSubmit() {
    console.log(this.loginModel)
  }

}
