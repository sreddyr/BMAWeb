import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeeServices } from './common/services/employee.services';
import { CommonService } from './common/services/common.service';
import { GlobalConstants } from './gobal.constants';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AppRoutes } from './app.routes';
import { AppointmentsComponent } from './home/appointments/appointments.component';
import { AppointmentServices } from './common/services/appointment.services';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AppointmentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutes,
    NgxMaterialTimepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ToastrModule.forRoot(),
  ],
  providers: [EmployeeServices, AppointmentServices, CommonService, GlobalConstants, AuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
