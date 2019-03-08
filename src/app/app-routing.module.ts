import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TableComponent } from './table/table.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { ViewcustomtableComponent } from './viewcustomtable/viewcustomtable.component';

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
  },
  {
    path: 'viewcustomtable',
    component: ViewcustomtableComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
