import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from 'src/app/gobal.constants';
import { Login } from '../models/models';


@Injectable()
export class EmployeeServices {
    constructor(private http: HttpClient, private globalConstant: GlobalConstants) { }

    userLogin(userName, password) {
       const login: Login = new Login();
       login.UserName = userName;
       login.Password = password;
       const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
       return this.http.post(this.globalConstant.URL + this.globalConstant.EMPLOYEE_LOGIN , login, { headers: reqHeader });
      }
}

