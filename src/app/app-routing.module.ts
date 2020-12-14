import { TesteComponent } from './teste/teste.component';
import { Teste2Component } from './teste2/teste2.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'teste',
    component: TesteComponent
  },
  {
    path: 'teste2',
    component: Teste2Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
