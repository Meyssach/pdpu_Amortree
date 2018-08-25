import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import {Http,Response, Headers, RequestOptions } from '@angular/http';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router ) {}

  

  onAnchorClick ( ) {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + f )
      if ( element ) element.scrollIntoView (  )
    });
  }

  

  ngOnInit() {

    this.router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(); }
        }
      }
    });
  }


 

}
