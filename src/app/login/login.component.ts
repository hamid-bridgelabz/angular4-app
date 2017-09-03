import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:object;
  constructor() { }

  ngOnInit() {
  }
  login(username){
    console.log("login click",username)
  }

}
