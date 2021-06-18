import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagesModule } from './../app/component/pages/pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 
import { HttpClientModule } from '@angular/common/http';

// import { MaterialModule } from './component/material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
 
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule,
    BrowserModule /* or CommonModule */, 
    FormsModule, ReactiveFormsModule ,
    HttpClientModule ,
    
    
  //  MaterialModule
   
  ],

  entryComponents: [
  
  ] ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
