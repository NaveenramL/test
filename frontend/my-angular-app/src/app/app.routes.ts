import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', redirectTo: '/hello', pathMatch: 'full' },
    { path: 'hello', component: AppComponent }
];
