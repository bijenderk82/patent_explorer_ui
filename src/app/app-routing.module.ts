import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatentsComponent } from './patents/patents.component';
import { PatentDetailsComponent } from './patent-details/patent-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'patents',
    component: PatentsComponent
  },
  {
    path: 'patents/:id',
    component: PatentDetailsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/patents',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
