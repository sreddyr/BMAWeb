import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from 'src/app/gobal.constants';
import { Appointment } from '../models/models';


@Injectable()
export class AppointmentServices {
    list: Appointment[];
    constructor(private http: HttpClient, private globalConstant: GlobalConstants) { }

    getAppointments() {
      return  this.http.get(this.globalConstant.URL + this.globalConstant.APPOINTMENT_LIST + 6);
      }

    getAppointment() {
        const id = localStorage.getItem('EmployeeId');
        return this.http.get(this.globalConstant.URL + this.globalConstant.APPOINTMENT_LIST + id );
    }

    saveOrUpdateAppointment(appointment: Appointment) {
        return this.http.post(this.globalConstant.URL + this.globalConstant.APPOINTMENT_SAVE , JSON.stringify(appointment));
    }

    deleteAppointment(id: number) {
        return this.http.delete(this.globalConstant.URL + this.globalConstant.APPOINTMENT_DELETE + id);
    }
}
