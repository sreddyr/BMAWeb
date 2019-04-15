import { Component, OnInit } from '@angular/core';
import { EmployeeServices } from '../common/services/employee.services';
import { CommonService } from '../common/services/common.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginError = false;
  constructor(private employeeService: EmployeeServices, private router: Router, private commonService: CommonService) { }
  ngOnInit() {

  }

  OnSubmit(userName, password) {
    this.employeeService.userLogin(userName, password).subscribe((data: any) => {
    this.commonService.setEmployeeId(data.employee_ID);
    this.commonService.setCompanyId(data.company_ID);
    this.commonService.saveJwt(data.token);
    this.router.navigate(['/home']);
   },
   (err: HttpErrorResponse) => {
     this.isLoginError = true;
   });
 }



}
