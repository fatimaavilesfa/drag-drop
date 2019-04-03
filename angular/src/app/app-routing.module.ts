import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from  './admin/login/login.component';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path: 'app', component: AppComponent,


    children: [
      {path: 'login', component: LoginComponent},
      {path: 'list', component: ListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
