import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ILoginModel } from '../models/ILoginModel';
import { IAuthenticatedResponse } from '../models/IAuthenticatedResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login!: ILoginModel;
  invalidLogin!: boolean;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.login = {username:'', password: ''};
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.http.post<IAuthenticatedResponse>("https://localhost:7195/api/auth/login", this.login, {
        headers: new HttpHeaders({ "Content-Type": "application/json"})
      })
      .subscribe({
        next: (response: IAuthenticatedResponse) => {
          const token = response.token;
          localStorage.setItem("jwt", token); 
          this.invalidLogin = false; 
          this.router.navigate(["/"]);
        },
        error: (err: HttpErrorResponse) => this.invalidLogin = true
      })
    }
  }
}
