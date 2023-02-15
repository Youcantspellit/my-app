import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutes } from './users.routing';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [
    CommonModule,
    UsersRoutes,
    MatCardModule
  ],
  declarations: [UsersComponent],
})
export class UsersModule { }
