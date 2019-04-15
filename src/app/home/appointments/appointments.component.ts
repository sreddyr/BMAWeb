import { Component, OnInit } from '@angular/core';
import { Appointment, Employee } from '../../common/models/models';
import { AppointmentServices } from '../../common/services/appointment.services';
import { Router } from '@angular/router';
import { CommonService } from '../../common/services/common.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointment: Appointment;
  appointments: Appointment[] = [];
  employees: Employee[] = [];
  displayGrid = true;
  displayCreate = false;
  displayView = false;
  isAddNew = false;
  startNewDate: string;
  endNewDate: string;
  selectDate: Date;

  // tslint:disable-next-line:max-line-length
  constructor( private toastr: ToastrService, private appointmentService: AppointmentServices, private router: Router, private commonService: CommonService) { }

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
        this.appointmentService.getAppointment().subscribe((appointmentsList: Appointment[]) => {
          this.appointments = appointmentsList ;
        }, ( error ) => {
        });
    }

    onAddNew() {
      this.appointment = new Appointment();
      this.appointment.Company_ID = +localStorage.getItem('CompanyId');
      this.appointment.Employee_ID = +localStorage.getItem('EmployeeId');
      this.isAddNew = true;
      this.displayGrid = false;
      this.displayCreate = true;
  }

  onSave() {
      this.addTimeToDate();
      this.appointmentService.saveOrUpdateAppointment(this.appointment).subscribe((response: string) => {
      if (response) {
        this.toastr.error(response, 'Appointment');
      } else {
        this.displayGrid = true;
        this.isAddNew = false;
        this.displayCreate = false;
        this.loadAppointments();
        this.toastr.success('Appointment saved successfully', 'Appointment');
      }
      }, ( error ) => {
      });
  }

  onEdit(appointment: Appointment) {
    this.appointment = appointment;
    this.appointment.selectDate = new Date(appointment.startTime);
    this.isAddNew = false;
    this.displayGrid = false;
    this.displayCreate = true;
  }

  onCancel() {
    this.isAddNew = false;
    this.displayGrid = true;
    this.displayCreate = false;
    this.loadAppointments();
  }

    onDelete(id: number) {
      if (confirm('Are you sure to delete this record?')) {
        this.appointmentService.deleteAppointment(id).subscribe(res => {
          this.loadAppointments();
          this.toastr.success('Deleted successfully', 'Appointment');
        });
      }
  }

  addTimeToDate() {
      const slectedYear = this.appointment.selectDate.getFullYear();
      const slectedMonth = this.appointment.selectDate.getMonth();
      const slectedDay = this.appointment.selectDate.getDate();
      const startTime = new Date(this.appointment.startTime);
      const endTime = new Date(this.appointment.endTime);
      // tslint:disable-next-line:max-line-length
      this.appointment.startTime = new Date(slectedYear, slectedMonth, slectedDay, startTime.getHours(), startTime.getMinutes());
      // tslint:disable-next-line:max-line-length
      this.appointment.endTime = new Date(slectedYear, slectedMonth, slectedDay, endTime.getHours(), endTime.getMinutes());
    }

}

