import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate-component',
  templateUrl: './navigate-component.component.html',
  styleUrls: ['./navigate-component.component.css']
})
export class NavigateComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isAuth: boolean = true;

  Auth(): boolean {
    return true;
  }

  logOut() {
    localStorage.removeItem("jwt");
  }

}
