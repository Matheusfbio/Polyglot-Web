import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonLoginComponent } from './components/button-login/button-login.component';
import { ButtonParceirosComponent } from './components/button-parceiros/button-parceiros.component';
import { ButtonSubscribeComponent } from './components/button-subscribe/button-subscribe.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'for-business', component: ButtonParceirosComponent },
  { path: 'login', component: ButtonLoginComponent },
  { path: 'subscribe', component: ButtonSubscribeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
