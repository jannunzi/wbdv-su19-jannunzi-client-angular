import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {ColumnNavigatorComponent} from './column-navigator/column-navigator.component';
const appRoutes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'columns', component: ColumnNavigatorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/:id', component: ProfileComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
