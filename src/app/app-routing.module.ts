import { ViewformComponent } from './viewform/viewform.component';
import { FormlistComponent } from './formlist/formlist.component';
import { FormComponent } from './form/form.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'form', component: FormComponent},
  { path: 'formlist', component: FormlistComponent},
  { path: 'viewform', component: ViewformComponent},
  
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SigninComponent, SignupComponent, FormComponent, FormlistComponent, ViewformComponent]
