import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-navigate-component',
  templateUrl: './navigate-component.component.html',
  styleUrls: ['./navigate-component.component.css']
})
export class NavigateComponentComponent implements OnInit {

  constructor(private jwtHelper: JwtHelperService) { }

  ngOnInit(): void {
  }

  isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    return false;
  }

  logOut() {
    localStorage.removeItem("jwt");
  }

}
