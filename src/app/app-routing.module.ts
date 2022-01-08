import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaleconoscoComponent } from './views/faleconosco/faleconosco.component';
import { HomeComponent } from './views/home/home.component';
import { LoginCadastroComponent } from './views/login-cadastro/login-cadastro.component';
import { PagProdutoComponent } from './views/pag-produto/pag-produto.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "loginCadastro", component: LoginCadastroComponent},
  { path: "faleconosco", component: FaleconoscoComponent },
  { path: "pagProduto", component: PagProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
