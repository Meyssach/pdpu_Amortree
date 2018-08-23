import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { FragmentPolyfillModule } from "./fragment-polyfill/fragment-polyfill.module";

import { HttpModule } from '@angular/http';  
import { FormsModule } from '@angular/forms';  
 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';




var routes: Routes = [
  {
    path: "app",
        children: [
            {
                path: "home",
                component: HomeComponent
                
            },
           
        ]
    },
            {
                path: "",
                pathMatch: "full",
                redirectTo: "app/home"
            }
      ];
  

  // Redirect from the root to the "/app" prefix (this makes other features, like
  // secondary outlets) easier to implement later on.
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    HttpModule,
    FormsModule, 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FragmentPolyfillModule.forRoot({
      smooth: true
  }),
  RouterModule.forRoot(
      routes,
      {
          // Tell the router to use the HashLocationStrategy.
          useHash: true,
          enableTracing: false
      }
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
