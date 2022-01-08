import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginCadastroComponent } from './views/login-cadastro/login-cadastro.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "loginCadastro", component: LoginCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
