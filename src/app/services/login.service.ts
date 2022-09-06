import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL:string = 'http://localhost:43109/api/Auth';

  constructor(private http: HttpClient) { }
}
