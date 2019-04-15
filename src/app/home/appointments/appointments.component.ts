import { Component, OnInit } from '@angular/core';
import { Appointment, Employee } from '../../common/models/models';
import { AppointmentServices } from '../../common/services/appointment.services';
import { Router } from '@angular/router';
import { CommonService } from '../../common/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { stringify } from 'querystring';


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

  // tslint:disable-next-line:max-line-length
  constructor(private toastr: ToastrService, private appointmentService: AppointmentServices, private router: Router, private commonService: CommonService) { }

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
        this.appointmentService.getAppointment().subscribe((appointmentsList: Appointment[]) => {
          this.appointments = appointmentsList ;
          console.log(this.appointments);
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
    const datePipe = new DatePipe('en-UTC');
    const formatedyear = datePipe.transform(appointment.startTime, 'dd-MM-yyyy hh:mm:ss a');
    console.log(new Date(formatedyear));
    this.startNewDate = formatedyear;
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

}

