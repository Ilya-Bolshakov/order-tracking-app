import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-navigate-component',
  templateUrl: './navigate-component.component.html',
  styleUrls: ['./navigate-component.component.css']
})
export class NavigateComponentComponent implements OnInit {

  constructor(private jwtHelper: JwtHelperService, private router: Router) { }

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
    this.router.navigateByUrl('/login');
  }

}
