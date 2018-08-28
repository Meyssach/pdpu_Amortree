import { Component, OnInit } from '@angular/core';
import {User} from './../user';
import {UserService} from './../user.service';


import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {

  users: Array<User>;

  selectedUser: User;


  constructor( private route: ActivatedRoute, private router: Router, private _userService: UserService ) {}

  

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

  onSubmitAddUser(user : User){
    this._userService.addUser(user)
      .subscribe(resNewUser =>{
        this.users.push(resNewUser);
        this.selectedUser = resNewUser;
      });

      this.router.navigate(['']);

  }

}
