import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FormsComponent } from './forms.component';
import { FormsRoutes } from './forms.routing';


@NgModule({
  imports: [
    LayoutModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    FormsRoutes
  ],
  declarations: [FormsComponent],
})
export class MyFormsModule { }
