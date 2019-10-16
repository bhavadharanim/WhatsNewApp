import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { WhatsappPageComponent } from './whatsapp-page/whatsapp-page.component';


const routes: Routes = [
  {path:'login',component:LoginPageComponent},
  {path:'whatsapp',component:WhatsappPageComponent},
  {path: '',   redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
