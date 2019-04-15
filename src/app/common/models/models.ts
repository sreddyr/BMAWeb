import { Time } from '@angular/common';

export class Employee {
    // tslint:disable-next-line:variable-name
    Employee_ID: number;
    // tslint:disable-next-line:variable-name
    Company_ID: number;
    // tslint:disable-next-line:variable-name
    Role_ID: number;
    UserName: string;
    Password: string;
    FirstName: string;
    SurName: string;
    RoleName: string;
    EmailAddress: string;
    MobileNumber: string;
    WorkNumber: string;
    Token: string;
}

export class Login {
    UserName: string;
    Password: string;
}

export class Appointment {
    // tslint:disable-next-line:variable-name
    Employee_ID: number;
    // tslint:disable-next-line:variable-name
    Company_ID: number;
    // tslint:disable-next-line:variable-name
    Appointment_ID: number;
    startTime: Time;
    EndTime: Time;
    Info: string;
    CompnayName: string;
    EmailAddress: string;
    FirstName: string;
    SurName: string;
    MobileNumber: string;
    WorkNumber: string;
    FullName: string;
}

