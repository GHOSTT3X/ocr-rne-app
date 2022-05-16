import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component'
import { NgToastModule } from 'ng-angular-popup'
import {MatSelectModule} from '@angular/material/select';
import {AccordionModule} from 'primeng/accordion';  

  
import {MatDialogModule} from '@angular/material/dialog';
import { FormlistComponent } from './formlist/formlist.component';
import { ViewformComponent } from './viewform/viewform.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FormComponent,
    FormlistComponent,
    ViewformComponent,
   
    
  ],
  imports: [
    MatDialogModule,
    AccordionModule,
    MatSelectModule,
    NgToastModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,

    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
