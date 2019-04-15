
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';


export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    // { path: 'adminPanel', component: AdminPanelComponent, canActivate: [AuthGuard] , data: { roles: ['Admin'] }},
    {path: 'login', component: LoginComponent},
    { path : '', redirectTo: '/login', pathMatch : 'full'}
];
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
