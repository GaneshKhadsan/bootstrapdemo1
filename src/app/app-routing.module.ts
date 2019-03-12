import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TableComponent } from './table/table.component';
import { CustomTableComponent } from './custom-table/custom-table.component';


const routes: Routes = [
  { path: '', redirectTo:'/' , pathMatch: 'full' },
  {
    path: 'loginpage', 
    component: LoginpageComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'customtable',
    component: CustomTableComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
