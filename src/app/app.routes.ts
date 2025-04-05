import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PageProtectedComponent } from './components/page-protected/page-protected.component';

export const routes: Routes = [
    {
        path: '',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'pag-protected',
        component: PageProtectedComponent
    }
];
