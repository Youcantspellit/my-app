import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';

const routes: Routes = [
  { 
    path: '',
   /*  component: AppComponent, */
    children: [
      { 
        path: 'users',
        loadChildren: () => import('src/app/users/users.module').then(m => m.UsersModule)
      },
      { 
        path: 'forms', 
        loadChildren: () => import('src/app/forms/forms.module').then(m => m.MyFormsModule)
      }
    ]  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
