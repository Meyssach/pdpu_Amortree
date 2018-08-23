import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import {CommonService} from './common.service';  

import {Http,Response, Headers, RequestOptions } from '@angular/http';  

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  title = 'Amortree';

  constructor(private newService :CommonService,) {   }  
  Repdata;  
  valbutton ="Submit";  
  
  
ngOnInit() {    
 
}  
 
onSave = function(user,isValid: boolean) {    
user.mode= this.valbutton;  
 this.newService.saveUser(user)  
 .subscribe(data =>  {  alert(data.data);  
      
   this.ngOnInit();    
 }   
 , error => this.errorMessage = error )  
   
} 

}
