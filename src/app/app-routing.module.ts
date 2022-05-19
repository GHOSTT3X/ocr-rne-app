import { EditformComponent } from './editform/editform.component';
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
  { path: 'viewform/:id', component: ViewformComponent},
  { path: 'editform', component: EditformComponent},
  { path: 'editform/:id', component: EditformComponent},
  
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SigninComponent, SignupComponent, FormComponent, FormlistComponent, ViewformComponent, EditformComponent]
