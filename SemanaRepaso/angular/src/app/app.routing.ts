import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RecoverComponent } from './auth/recover/recover.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'recuperar', component: RecoverComponent },
  {
    path: 'administrador',
    loadChildren: () => import('./modulos/admin/admin.module').then(m => m.AdminModule)
  },
  // la ruta ** es la ruta del ERROR o la ruta que responde
  // cuando se coloca una ruta inexistente
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
