import { Injectable} from '@angular/core';


@Injectable()
export class CommonService {

 public getJwt(): string {
    return localStorage.getItem('jwt');
}

public getEmpoyeeId(): string {
    return localStorage.getItem('EmployeeId');
}

public getCompanyId(): string {
    return localStorage.getItem('CompanyId');
}

public saveJwt(jwt: string): void {
    console.log(jwt);
    localStorage.setItem('jwt', jwt);
}

public setEmployeeId(employeeId: number): void {
    localStorage.setItem('EmployeeId', employeeId + '');
}

public setCompanyId(companyId: number): void {
    localStorage.setItem('CompanyId', companyId + '');
}


}

